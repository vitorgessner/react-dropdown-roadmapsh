import './Dropdown.css';
import { useState } from 'react'
import itemsJson from '../items.json';

export default function Dropdown() {
  const [items, setItems] = useState(itemsJson.items);

  function Input() {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault();
    setItems([...items, value])
  }

  return (
    <div className="center container">
      <form>
        <input
          type='text'
          onChange={handleChange}
          value={value}
        />
        <button onClick={handleClick}>Adicionar item</button>
      </form>
    </div>
  )
}

  return (
    <div className="center container main">
      <h1>Dropdown</h1>
      <Input />
      <select>
        <option key="select">Select an Item</option>
        {items.map((item, idx) => <option key={idx}>{item}</option>)}
      </select>
    </div>
  );
}