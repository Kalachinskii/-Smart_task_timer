import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import "../style.css";
import { Timer } from './Timer';
import styles from '../activeCardList.module.css';

export function SliderCard({tasks, changeCompletedTask, changeTaskFailed}) {
    return (
        <Swiper
            modules={[Pagination]}
            // рука если можно двигать
            grabCursor={true}
            initialSlide={2}
            // центрилизовать
            centeredSlides={true}
            // растановка карточек
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide={true}
            // двигать слайдер при фиксации между карточкой
            pagination={{clickable: true}}
            // растояние между карточками
            breakpoints={{
                320: {spaceBetween: 40},
                430: {spaceBetween: 50},
                580: {spaceBetween: 70},
                650: {spaceBetween: 30},
            }}
        >
            
            {tasks.map(el => !el.failed && !el.completed && (
                <SwiperSlide className='swiper-slide' key={el.id}>
                    <div className={styles['card']}>
                        <div className={styles["card-content"]}>
                            <h3>
                                {el.task}
                            </h3>
                        </div>
                        <Timer timeSecond={el.time} idTask={el.id} changeTaskFailed={changeTaskFailed}/>
                        <p onClick={() => changeCompletedTask({id: el.id, state: "completed"})} className={styles["btn-execute"]}>Выполнить</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
