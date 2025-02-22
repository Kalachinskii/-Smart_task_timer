import { useState } from 'react';
import styles from '../taskList.module.css';
import BtnList from './BtnList';
import Task from './Task';
// import { SliderCard } from '../sliderCard';
import { SliderCard } from './TaskCard/SliderCard';

export function TaskList({tasks, changeCompletedTask, changeTaskFailed, deleteTask, resumeTask, handleUpdate, setBtnState, btnState}) {


    return (
        <div className={styles['task-list']}>
            <BtnList tasks={tasks} setBtnState={setBtnState}/>
            <div className={styles['tasks']}>
                {/* Нужны актуальные задачи */}
                {btnState === 0 && <SliderCard tasks={tasks} changeCompletedTask={changeCompletedTask} changeTaskFailed={changeTaskFailed} deleteTask={deleteTask} handleUpdate={handleUpdate}/>}

                {btnState === 1 && tasks.map(el => el.completed && (
                    <Task key={el.id}  el={el} deleteTask={deleteTask} resumeTask={resumeTask} state={"completed"}/>
                ))}
    
                {btnState === 2 && tasks.map(el => el.failed && (
                    <Task key={el.id} el={el} deleteTask={deleteTask} resumeTask={resumeTask} state={"failed"}/>
                ))} 
            </div>
        </div>
    );
}
