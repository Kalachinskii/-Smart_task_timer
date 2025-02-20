import styles from '../app.module.css'
import { FormItem } from '../../FormItem/formItem';
import { useState } from 'react';

export function App() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      task: item.task,
      time: item.time,
      completed: false,
      failed: false,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem} items={items}/>
      
    </div>
  )
}