import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (toDoListItem) {
        return (<TodoListItem key={toDoListItem.id} todo={toDoListItem} onRemoveTodo={onRemoveTodo} />);
      })}
    </ul>
  );
}

export default TodoList;