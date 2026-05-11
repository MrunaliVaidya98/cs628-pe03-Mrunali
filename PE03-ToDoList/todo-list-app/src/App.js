import { useState } from "react";
import "./App.css";

function TodoTask({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoTask key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTask() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function handleDeleteTask(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>ToDo List App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button className="add-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="empty-message">No tasks added yet.</p>
        ) : (
          <TodoList todos={todos} onDelete={handleDeleteTask} />
        )}
      </div>
    </div>
  );
}