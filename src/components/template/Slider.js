import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/Slider.module.css";
function HomePage() {
  return (
    <Swiper
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className={styles.swiper}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: `url("/images/carousel-1.jpg")` }}
      >
        <div
          className={`${styles.slider_caption} flex  flex-col justify-center gap-y-4 `}
        >
          <h2 className="text-primary text-5xl ">We Have Been Serving</h2>
          <h1 className="text-2xl">COFFEE</h1>
          <h2 className="text-2xl ">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: `url("/images/carousel-2.jpg")` }}
      >
        <div
          className={`${styles.slider_caption} flex  flex-col justify-center gap-y-4 `}
        >
          <h2 className="text-primary text-5xl ">We Have Been Serving</h2>
          <h1 className=" text-2xl">COFFEE</h1>
          <h2 className=" text-2xl">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default HomePage;
