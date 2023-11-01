import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(function (toDoListElement) {
        return (<TodoListItem key={toDoListElement.id} todo={toDoListElement} />);
      })}
    </ul>
  );
}

export default TodoList;