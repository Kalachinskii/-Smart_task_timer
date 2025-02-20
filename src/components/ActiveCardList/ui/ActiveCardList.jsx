import styles from '../activeCardList.module.css';
import { Timer } from './Timer';

export function ActiveCardList() {


    return (
        <div className={styles['active-card-list']}>
            <div className={styles['card']}>
                <div className={styles["card-content"]}>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quasi, optio sed quidem delectus repudiandae!
                    </h3>
                </div>
                <Timer timeSecond={60}/>
                <p className={styles["btn-execute"]}>Выполнить</p>
            </div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
        </div>
    )
}
