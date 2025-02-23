import styles from '../app.module.css'
import { FormItem } from '../../FormItem/formItem';
import { useEffect, useState } from 'react';
import { TaskList } from '../../TaskList/ui/TaskList';


export function App() {
  const [items, setItems] = useState([]);
  // const [btnState, setBtnState] = useState(0);
  
  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      task: item.task,
      time: item.time,
      startTime: item.time,
      completed: false,
      failed: false,
      isPlayPayse: true,
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
  // }, [btnState])

  // obj = {id: 1, state: "dailed", time: 5}
  const changeTask = (obj) => {
    // задача которую будем изменять
    const task = items.find(task => task.id === obj.id);
    // изменяем состояние у задачи
    task[obj.state] = !task[obj.state];
    if (obj.state == "failed") {task.time = task.startTime}
    // перерисовывем и изменяем хранилище
    setItems(items.map(item => ({
      ...item
    })))
  }

  // удаление задач - решение проблемы удаления последней задачи в LS
  const deleteTask = (id) => {
    if (items.length === 1) {
      setItems([]);
      localStorage.setItem('data',JSON.stringify([]));
    } else {
      setItems(items.filter(item => item.id !== id));
    }
  }

  // obj = {newTime: 7, id: 1, state: 'time'}
  const changeTaskTime = (obj) => {
    const task = items.find(task => task.id === obj.id);
    task.time = obj.newTime;
    setItems(items.map(item => ({
      ...item
    })))
  }

  // обновленное время с LS - решение проблемы F5
  // obj = {newTime: 7, id: 1, state: 'time'}
  // const updateTimeLS = (obj) => {
  //   const data = JSON.parse(localStorage.getItem('data'));
  //   data.forEach(el => {
  //       if (el.id === obj.id) {
  //           el.time = obj.newTime;
  //       }
  //     }
  //   );
  //   localStorage.setItem('data', JSON.stringify(data));
  // } 

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem} items={items}/>
      <TaskList changeIsPlayPayse={changeTask} tasks={items} changeCompletedTask={changeTask} changeTaskFailed={changeTask} deleteTask={deleteTask} resumeTask={changeTask} handleUpdate={changeTaskTime} />
    </div>
  )
}