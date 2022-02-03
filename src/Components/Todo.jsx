import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "DEFAULT",
      status: false
    }
  ]);
  const handleTask = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length
    };
    setTodos([...todos, payload]);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id
        ? { ...item, status: item.status === true ? false : true }
        : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
          />
        );
      })}
      <TodoInput onTask={handleTask} />
    </div>
  );
};

export default Todo;
