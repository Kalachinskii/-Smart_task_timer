import styles from '../app.module.css'
import { FormItem } from '../../FormItem/formItem';
import { useEffect, useState } from 'react';
import { SliderCard } from '../../ActiveCardList/sliderCard';


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

  // добовляем в хранилище данные
  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data',JSON.stringify(items));
    }
  }, [items])

  // 1 запуск
  useEffect(() => {
      const data = JSON.parse(localStorage.getItem('data')) || [];
      if (data) {
        setItems(data.map(item => ({
          ...item
        })))
      }
  }, [])

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem} items={items}/>
      <SliderCard task={items}/>
    </div>
  )
}