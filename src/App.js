import React from 'react';
import Todolist from './Todolist';
import {useState} from 'react';




const App = () =>{
   const [List, setList] = useState("");
   const [Item, setItem] = useState([]);

  const mainItem =(event)=>{
    setList(event.target.value)

  }
  const Listitem =()=>{
    setItem((olditem)=>{
      return [...olditem, List]

    });
    setList("");

  };
  const deletItem =(id)=>{
    setItem((olditem)=>{
      return olditem.filter((arrElement, index)=>{
        return index !== id;

      })
    })

  };
  return(
    <>
      <div className="main_div">
      <br />
        <div className="second_div">
          <h1>ToDo list</h1>
          <br />
          <input type="text" placeholder="Enter a list" onChange={mainItem} value={List} />
          <button onClick={Listitem}>+</button>



          <ol>
             { Item.map( (Itemvalue, index)=>{
              return <Todolist 
              key={index} 
              text={Itemvalue} 
              id={index}
              onSelect={deletItem}
              />   
            })}
           
          </ol>
        </div>
      </div>
    </>

  )
};

export default App;