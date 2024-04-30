import React from "react";
import TestimonialItem from "../sharedUi/TestimonialItem";
import styles from "@/styles/Slider.module.css";
import { useRouter } from "next/router";
function Testimonial({ comments }) {
  const { pathname } = useRouter();
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
          <swiper-container  className={styles.testimonial_slider_Wrapper}>
            {pathname === "/testimonial"
              ? comments?.slice(0, 3).map((comment,index) => {
                  return (
                    <swiper-slide
                      key={comment.id}
                      virtualIndex={index}
                      className={styles.testimonial_slider}
                    >
                      <TestimonialItem comment={comment} />
                    </swiper-slide>
                  );
                })
              : comments.map((comment,index) => {
                  return (
                    <swiper-slide
                    virtualIndex={index}
                      key={comment?.id}
                      className={styles.testimonial_slider}
                    >
                      <TestimonialItem comment={comment} />
                    </swiper-slide>
                  );
                })}
          </swiper-container>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
