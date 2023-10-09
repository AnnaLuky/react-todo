import React from "react";
const todoList = [
    {
      id: 1,
      title: "Complete assignment"
    },
    {
      id: 2,
      title: "Create branch"
    },
    {
      id: 3,
      title: "Push to GitHub"
    },
    {
      id: 4,
      title: "Create pull request"
    }
  ];
function TodoList() {
    return (<ul>
        {todoList.map(function (toDoListElement) {
            return <li key={toDoListElement.id}>{toDoListElement.title}</li>;
        })}
    </ul>);
}

export default TodoList;