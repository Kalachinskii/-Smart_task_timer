import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import "../../style.css";
import { Timer } from './Timer';
import styles from '../../activeCardList.module.css';

export function SliderCard({tasks, changeCompletedTask, changeTaskFailed, deleteTask, handleUpdate, changeIsPlayPayse}) {
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
                        <i className={`${"fa-solid fa-xmark"}`} onClick={() => deleteTask(el.id)}></i>
                        <div className={styles["card-content"]}>
                            <h3>
                                {el.task}
                            </h3>
                        </div>
                        <Timer isPlayPayse={el.isPlayPayse} changeIsPlayPayse={changeIsPlayPayse} currentTime={el.time} startTime={el.startTime} idTask={el.id} changeTaskFailed={changeTaskFailed} handleUpdate={handleUpdate}/>
                        <p onClick={() => changeCompletedTask({id: el.id, state: "completed"})} className={styles["btn-execute"]}>Выполнить</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
