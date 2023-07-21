import { useState } from 'react';
import '../index.css';
import Logo from './logo.js'
import Form from './form.js'
import PackingList  from './PackingList.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id){
    setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed} : item)); 
  }

  function handleClearItems(){
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
      <Stats items={items}/>
    </div>
  );
}
 
