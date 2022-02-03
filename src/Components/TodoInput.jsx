import Button from "./Button";
import { useState } from "react";

const TodoInput = ({ onTask }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    onTask(text);
    setText("");
  };
  return (
    <div>
      <input
        style={{
          width: "300px",
          height: "44px",
          border: "2px solid black",
          borderRadius: "7px"
        }}
        type="text"
        placeholder="Add something"
        value={text}
        onChange={handleChange}
      />
      <Button onAdd={handleClick} title="+" />
    </div>
  );
};
export default TodoInput;
