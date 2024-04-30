import HeaderPage from "@/components/sharedUi/HeaderPage";
import Testimonial from "@/components/template/Testimonial";
import axios from "axios";
import React from "react";

function TestimonialPage({ comments }) {
  return (
    <>
      <HeaderPage route={"testimonial"} />
      <Testimonial comments={comments} />
    </>
  );
}

export default TestimonialPage;

export async function getStaticProps() {
  const { data: comments } = await axios.get("http://localhost:4000/comments");
  return {
    props: {
      comments,
    },
    revalidate: 60 * 60 * 4,
  };
}
