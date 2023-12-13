import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTooForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<MainList />} />
      <Route path="/new" element={<NewTodo/>} />
    </Routes>
  </BrowserRouter>);
}


function MainList() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []
          }
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });

  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);


  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => { return todo.id !== id; });
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

function NewTodo() {
  return <h1>New Todo List</h1>;
}



export default App;
