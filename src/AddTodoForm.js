import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo(todoTitle);
        setTodoTitle("");
    }



    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle" >Title</label>
            <input name="title" id="todoTitle" type="text" value={todoTitle} onChange={handleTitleChange}></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;