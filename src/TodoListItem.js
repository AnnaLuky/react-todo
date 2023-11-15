import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {

    function onClick(){
        onRemoveTodo(todo.id);
    }

    return (
        <li>{todo.title} <button onClick={onClick}>Remove</button></li>
    );
}

export default TodoListItem;
