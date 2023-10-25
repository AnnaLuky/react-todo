import React, { useState } from 'react';
import AddTooForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h1>Todo List</h1>
      <AddTooForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
