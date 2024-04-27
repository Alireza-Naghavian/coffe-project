import React from "react";

function TestimonialItem() {
  return (
    <div className="testimonial-item ">
      <div className="flex items-center mb-3">
        <img
          className="w-full h-full object-cover  max-w-[150px]"
          src={"/images/testimonial-1.jpg"}
          alt=""
        />
        <div className="ml-3">
          <h4>hoori nikooo</h4>
          <i>User</i>
        </div>
      </div>
      <p className="m-0">Wonderful coffee ❤️</p>
    </div>
  );
}

export default TestimonialItem;
