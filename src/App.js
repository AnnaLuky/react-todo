import React from 'react';
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
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(data){
          return <li key={data.id}>{data.title}</li>;
        })}
      </ul>
    </div>

  );
}

export default App;
