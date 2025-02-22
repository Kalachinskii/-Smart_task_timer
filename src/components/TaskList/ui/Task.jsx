import styles from '../task.module.css';

export default function Task({deleteTask, el, resumeTask, state}) {
    return (
        <div className={styles["task"]}  key={el.id}> 
            <div className={styles["task-time"]}>
                <h3>{el.task}</h3>
                <h5>
                    <span>Время задачи: </span>
                    {new Date(el.startTime * 1000).toISOString().substr(11, 8)}
                </h5>
            </div>
            <div className={styles["task-btn"]}>
                {state == "failed" && <i onClick={() => resumeTask({id: el.id, state})} className={`fa-solid fa-circle-left ${styles['failed']}`}></i>}
                <i className="fa-solid fa-trash" onClick={() => {deleteTask(el.id)}}></i>
            </div>
        </div>
    )
}
// 
