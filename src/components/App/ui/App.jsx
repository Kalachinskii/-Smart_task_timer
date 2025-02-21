import styles from '../app.module.css'
import { FormItem } from '../../FormItem/formItem';
import { useEffect, useState } from 'react';
import { SliderCard } from '../../TaskList/sliderCard';
import { TaskList } from '../../TaskList/ui/TaskList';


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
      const data = JSON.parse(localStorage.getItem('data'));
      if (data) {
        setItems(data.map(item => ({
          ...item
        })))
      }
  }, [])

  const changeTask = (obj) => {
    // получить все данные из хранилища
    const data = JSON.parse(localStorage.getItem('data'));
    // задача которую будем изменять
    const task = items.find(task => task.id === obj.id);
    // изменяем состояние у задачи
    task[obj.state] = true;
    // перерисовывем и изменяем хранилище
    setItems(items.map(item => ({
      ...item
    })))
  }

  const deleteTask = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem} items={items}/>
      <TaskList tasks={items} changeCompletedTask={changeTask} changeTaskFailed={changeTask} deleteTask={deleteTask}/>
    </div>
  )
}