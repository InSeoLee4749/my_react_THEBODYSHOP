import React from "react";
import banner from "../scss/banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner(props) {
    return (
        <section id="banner">
            <div className={`${banner.height}`}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className={`banner1`}></SwiperSlide>
                    <SwiperSlide className={`banner2`}></SwiperSlide>
                    <SwiperSlide className={`banner3`}></SwiperSlide>
                    <SwiperSlide className={`banner4`}></SwiperSlide>
                    <SwiperSlide className={`banner2`}></SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
    );
}
