import styles from '../activeCardList.module.css';
import { SliderCard } from './SliderCard';
import { Timer } from './Timer';

export function ActiveCardList() {
    return (
        <SliderCard >
        <div className={styles['active-card-list']}>

            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
        </div>
        </SliderCard >
    )
}
