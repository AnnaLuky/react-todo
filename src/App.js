import React, { useEffect, useState } from 'react';
import AddTooForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    new Promise(function (resolve, reject) {
      setTimeout(function () { resolve({ data: { todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [] } }); }, 2000);
    }).then(function (result) {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });

  }, []);

  useEffect(function () {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);


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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
    </div>
  );
}

export default App;
