import React, { useState } from 'react';
import AddTooForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {


  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, { title: newTodo, id: Date.now() }]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTooForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
