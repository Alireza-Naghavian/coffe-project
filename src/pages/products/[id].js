import ProductComments from "@/components/template/ProductComments";
import ProductDetail from "@/components/template/ProductDetail";
import axios from "axios";
import React from "react";

function Product({ data, productComments }) {
  return (
    <>
      <ProductDetail data={data} />;
      <ProductComments productComments={productComments} />
    </>
  );
}

export default Product;
export async function getStaticPaths(context) {
  const { data } = await axios.get(`http://localhost:4000/menu/`);
  const paths = data.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(`http://localhost:4000/menu/${params.id}`);
  const { data: Comments } = await axios.get(`http://localhost:4000/comments`);
  const productComments = Comments.filter((comment) => {
    return String(comment.productID) === params.id;
  });
  return {
    props: {
      data,
      productComments,
    },
    revalidate: 60 * 60 * 12,
  };
}
