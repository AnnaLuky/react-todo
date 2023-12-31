import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {

    function onClickRemove(){
        onRemoveTodo(todo.id);
    }

    return (
        <li>{todo.title} <button type="button" onClick={onClickRemove}>Remove</button></li>
    );
}

export default TodoListItem;
