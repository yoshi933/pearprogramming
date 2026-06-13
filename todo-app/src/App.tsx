import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My Todo App</h1>

      <div className="top-area">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
