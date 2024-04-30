import React from "react";
import styles from "@/styles/Slider.module.css";
import TestimonialItem from "../sharedUi/TestimonialItem";
function ProductComments({ productComments }) {
  return (
    <div className=" container mx-auto py-5 mt-12 px-20">
      <div className=" ">
        <h2 className="mb-12 font-bold text-xl">comments:</h2>
        <div className="owl-carousel testimonial-carousel">
          <swiper-container className={styles.testimonial_slider_Wrapper}>
            {
                !productComments?.length ? <p className="text-gray-800">there is no comment submitted yet!!</p> 
                : 
                productComments?.map((comment, index) => {
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
            }
          </swiper-container>
        </div>
      </div>
    </div>
  );
}

export default ProductComments;
