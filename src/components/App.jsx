import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(imageIndex, quantity) {
    if (quantity <= 0) return;
    const newItem = { imageIndex, quantity, index: new Date() };
    setItems((items) => [...items, newItem]);
  }

  function handleRemoveItem(index) {
    setItems((items) => items.filter(item => item.index !== index));
  }

  return (
    <div className="flex justify-center pb-20">
      <div className="relative w-[75rem] lg:px-8">
        <Header items={items} handleRemoveItem={handleRemoveItem} />
        <Main handleAddItem={handleAddItem} />
      </div>
    </div>
  );
}

export default App;
