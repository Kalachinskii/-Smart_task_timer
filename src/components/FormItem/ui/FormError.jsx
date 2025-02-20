import styles from '../formError.module.css';

export default function FormError({taskError, timeError}) {
    return (
        <div className={styles['error-box']}>
            {taskError && <p style={{ color: 'red' }}>{taskError}</p>}
            {timeError && <p style={{ color: 'red' }}>{timeError}</p>}
        </div>
    )
}
