import './Dropdown.css';
import { useState } from 'react'
import itemsJson from '../items.json';
import Back from './Back'

export default function Dropdown() {
  const [items, setItems] = useState(itemsJson.items);
  const [value, setValue] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    if (items.includes(value)) {
      setValue('')
      return;
    }

    setItems([...items, value]);
    setValue('')
  }

  return (
    <>
      <div className="center container main">
        <h1>Dropdown</h1>
        <input onChange={handleChange} value={value} />
        <button onClick={handleClick}>Adicionar item</button>
        <select>
          <option key="select">Select an Item</option>
          {items.map((item, idx) => <option key={idx}>{item}</option>)}
        </select>
      </div>
      <Back />
    </>
  );
}