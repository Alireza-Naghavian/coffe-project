import React from "react";

function TestimonialItem({ comment }) {
  return (
    <div className="testimonial-item ">
      <div className="flex items-center mb-3">
        <img
          className="w-full h-full object-cover  max-w-[150px]"
          src={comment?.profile}
          alt=""
        />
        <div className="ml-3">
          <h4>{comment?.username}</h4>
          <i>User</i>
        </div>
      </div>
      <p className="m-0">{comment?.body}</p>
    </div>
  );
}

export default TestimonialItem;
