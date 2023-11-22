import React, { useEffect, useRef } from "react";

export function InputWithLabel({children, todoTitle, handleTitleChange}) {
    const inputRef = useRef();

    useEffect(()=>{
        if (inputRef.current){
            inputRef.current.focus();
        }
    });

    return (<>
        <label htmlFor="todoTitle" >{children} </label> 
        <input name="title" ref={inputRef} id="todoTitle" type="text" value={todoTitle} onChange={handleTitleChange} />
    </>)
}           