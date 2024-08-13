import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handlerAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlerToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handlerClearItems() {
    const confirmed = window.confirm("Are you sure to empty your list?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlerAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onToggleItem={handlerToggleItem}
        onClearItem={handlerClearItems}
      />
      <Stats item={items} />
    </div>
  );
}
