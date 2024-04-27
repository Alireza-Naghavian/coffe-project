import React from "react";
import TestimonialItem from "../sharedUi/TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Slider.module.css";
function Testimonial() {
  return (
    <div className=" container mx-auto py-5 mt-12 px-20">
      <div className=" ">
        <div className="section-title">
          <h4
            className="text-primary uppercase text-4xl"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h4>
          <h1 className="text-[2.7rem] text-center font-bold">
            Our Clients Say
          </h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <Swiper loop={true} autoplay={true} className={styles.testimonial_slider_Wrapper}>
            <SwiperSlide className={styles.testimonial_slider}>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide className={styles.testimonial_slider}>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide className={styles.testimonial_slider}>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide className={styles.testimonial_slider}>
              <TestimonialItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;