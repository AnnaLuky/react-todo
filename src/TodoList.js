import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(function (toDoListItem) {
        return (<TodoListItem key={toDoListItem.id} todo={toDoListItem} />);
      })}
    </ul>
  );
}

export default TodoList;