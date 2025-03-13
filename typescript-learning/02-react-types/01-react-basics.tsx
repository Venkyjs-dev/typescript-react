/**
 * React with TypeScript Basics
 * This file demonstrates fundamental React concepts with TypeScript
 */

import React, { useState, useEffect, useRef } from "react";

// 1. Basic Component Props
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old</p>}
    </div>
  );
};

// 2. Event Handling
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// 3. State Management
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 4. useEffect with TypeScript
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Simulated API call
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 5. useRef with TypeScript
  const inputRef = useRef<HTMLInputElement>(null);

  // 6. Event Handlers with TypeScript
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Handle input change
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <Button onClick={() => console.log("Button clicked")}>Submit</Button>
      </form>
    </div>
  );
};

// 7. Children Props
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

// 8. Generic Components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Example usage of the List component
const TodoList: React.FC = () => {
  const todos = [
    { id: 1, text: "Learn TypeScript" },
    { id: 2, text: "Build React App" },
    { id: 3, text: "Write Documentation" },
  ];

  return (
    <List
      items={todos}
      renderItem={(todo) => (
        <div>
          <span>{todo.id}</span>
          <span>{todo.text}</span>
        </div>
      )}
    />
  );
};

// Export components
export { Greeting, Button, UserProfile, Card, List, TodoList };
