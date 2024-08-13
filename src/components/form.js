import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDiscription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
