import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Lavar a louça" },
    { id: 2, text: "Fazer compras" },
    { id: 3, text: "Passear com o cachorro" },
  ]);

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, text: "Nova tarefa" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <button onClick={handleAddTask}>Adicionar tarefa</button>
    </div>
  );
}

export default App;