import React, { useEffect, useState } from 'react';
import AddTooForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
  useEffect(function () {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList]
}

function App() {


  const [todoList, setTodoList] = useSemiPersistentState(JSON.parse(localStorage.getItem("savedTodoList") || "[]"));

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter(function (todo) { return todo.id !== id; });
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTooForm onAddTodo={addTodo} />
      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </div>
  );
}

export default App;
