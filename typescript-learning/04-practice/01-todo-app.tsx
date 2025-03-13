/**
 * Todo Application with TypeScript
 * This file demonstrates a complete Todo application using TypeScript and React
 */

import React, { useState, useEffect } from "react";

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Components
const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <span className="todo-date">{todo.createdAt.toLocaleDateString()}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

// Main Todo App Component
const TodoApp: React.FC = () => {
  // State with TypeScript
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(
        JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
      );
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Event handlers with TypeScript
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  // Statistics
  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    active: todos.filter((todo) => !todo.completed).length,
  };

  return (
    <div className="todo-app">
      <h1>TypeScript Todo App</h1>

      <TodoForm onSubmit={addTodo} />

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>

      <div className="stats">
        <p>Total: {stats.total}</p>
        <p>Completed: {stats.completed}</p>
        <p>Active: {stats.active}</p>
      </div>
    </div>
  );
};

// Styles
const styles = `
    .todo-app {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    .todo-form {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .todo-input {
        flex: 1;
        padding: 8px;
        font-size: 16px;
    }

    .todo-button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .todo-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #888;
    }

    .todo-date {
        color: #666;
        font-size: 0.9em;
    }

    .delete-button {
        margin-left: auto;
        padding: 4px 8px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .filters {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .filters button {
        padding: 8px 16px;
        border: 1px solid #ddd;
        background: white;
        cursor: pointer;
        border-radius: 4px;
    }

    .filters button.active {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
    }

    .stats {
        margin-top: 20px;
        padding: 10px;
        background-color: #f8f9fa;
        border-radius: 4px;
    }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default TodoApp;
