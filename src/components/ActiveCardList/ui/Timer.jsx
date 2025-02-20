import { useState } from 'react';
import { CountdownCircleTimer} from 'react-countdown-circle-timer'
import styles from '../timer.module.css';

export const Timer = ({timeSecond}) => {
    const [isPlayPayse, setIsPlayPayse] = useState(true);

    const children = ({ remainingTime }) => {
        const hours = String(Math.floor(remainingTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(remainingTime % 60).padStart(2, '0');

        return (
            <div className={styles['time-btn']} onClick={() => setIsPlayPayse(!isPlayPayse)}>
                <p>{`${hours}:${minutes}:${seconds}`}</p>
                {!isPlayPayse && <i className="fa-solid fa-play"></i>}
                {isPlayPayse && <i className="fa-solid fa-pause"></i>}
            </div>
        )
    }
    
    return (
        <CountdownCircleTimer
        // остановить/запустить анимацию
        isPlaying={isPlayPayse}
        // Продолжительность обратного отсчета в секундах
        duration={timeSecond}
        // Один из допустимых цветов обвотки
        colors={["#008394", "#00ffff", "#AFB3B7", "#ff0000"]}
        // Указывает время, когда цвет должен смениться на следующий цвет.
        colorsTime={[60, 30, 15, 0]}
        // шырина/высота круга
        size={160}
        // Размер внешнего анимированного кругового следа
        strokeWidth={5}
        // Цвет внутреннего кругового следа
        trailColor='#4D5160'
        // Размер внутреннего кругового следа
        trailStrokeWidth={3}
        // Обратное направление вращения пути прогресса
        rotation='counterclockwise'
        // Обработчик событий при завершении анимации - перезапуск в данном случае
        // onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        onComplete={() => {alert('задача провалена')}}
        // onUpdate -	Обработчик событий обновления оставшегося времени
        // отображать время внутри
        children={children}
        >

        </CountdownCircleTimer>
    )
}