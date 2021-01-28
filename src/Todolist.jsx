import React from 'react';


const Todolist =(props)=>{

   
    return(
        <>
        <div className="todo_list">
        <i className="far fa-times-circle" aria-hidden="ture" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
        </div>    
        </>
    );
};
export default Todolist;