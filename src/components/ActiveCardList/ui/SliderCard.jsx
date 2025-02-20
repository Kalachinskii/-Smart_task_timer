import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import "../style.css";
import { Timer } from './Timer';
import styles from '../activeCardList.module.css';

export function SliderCard() {
    return (
        <Swiper
        modules={[Pagination]}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide={true}
        pagination={{clickable: true}}
        breakpoints={{
            320: {spaceBetween: 40},
            430: {spaceBetween: 50},
            580: {spaceBetween: 70},
            650: {spaceBetween: 30},
        }}>

            <SwiperSlide className='swiper-slide'>
                <div className={styles['card']}>
                    <div className={styles["card-content"]}>
                        <h3>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quasi, optio sed quidem delectus repudiandae!
                        </h3>
                    </div>
                    <Timer timeSecond={60}/>
                    <p className={styles["btn-execute"]}>Выполнить</p>
                </div>
            </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                <div className={styles['card']}>
                    <div className={styles["card-content"]}>
                        <h3>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quasi, optio sed quidem delectus repudiandae!
                        </h3>
                    </div>
                    <Timer timeSecond={60}/>
                    <p className={styles["btn-execute"]}>Выполнить</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
