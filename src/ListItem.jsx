import React from "react";
import { useState } from 'react';

export default function ListItem({ name }) {

  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <li>
        <label> {name} </label>
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </li>
    </div>
  );
}