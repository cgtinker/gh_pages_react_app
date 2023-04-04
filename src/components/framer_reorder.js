import "../style.css";
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";

const listItems = [
  { name: "Hello", id: 1 },
  { name: "World", id: 2 },
  { name: "Framer", id: 3 },
];

export default function FramerReorder() {
  const [items, setItems] = useState(listItems);

  return (
    // ul => Reorder.Group
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item) => (
        // li => Reorder.Item
        <Reorder.Item key={item.id} value={item}>
          {item.name}
        </Reorder.Item>
      ))}
    </Reorder.Group >
  );
}
