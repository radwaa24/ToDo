import React, { useState } from "react";
import shortid from 'shortid';

function TodoForm(props){

    const [text,setText] = useState("")
    const handleChange = (e)=>{
        setText(
            e.target.value
        )
     }
     const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id : shortid.generate(),
            text : text,
            complete : false
        });
       setText("")
     }
     return (
        <>
        <h1>Today's Todo List</h1>
        <form onSubmit={handleSubmit} className="form">
            <input className='input-field' type="text" onChange={handleChange} value={text}/>
            <button className='btn' id="btn" onClick={handleSubmit}>Add Todo</button>
        </form>
        </>
    );
}




export default TodoForm;