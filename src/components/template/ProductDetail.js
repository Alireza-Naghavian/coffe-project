import React from "react";
import styles from "@/styles/Product.module.css";
import { FaStar } from "react-icons/fa";
function ProductDetail({ data }) {
  return (
    <div
      className={`${styles.product_main} items-center mb-5 text-decoration-none justify-center`}
    >
      <img
        className={`${styles.product_img}  mb-3 mb-sm-0`}
        src={data?.img}
        alt=""
      />
      <div style={{ width: "500px" }}>
        <h4 className="text-white font-bold mb-3">{data?.title}</h4>
        <hr style={{ borderColor: "white" }} />

        <div className={styles.price_details}>
          {data?.off ? (
            <>
              <p>${data?.price - (data?.price * data?.off) / 100}</p>
              <p>${data?.price}</p>
            </>
          ) : (
            <p>${data?.price}</p>
          )}
        </div>

        <p style={{ color: "#fff" }} className="m-0 pr-5">
          {data?.desc}
        </p>
        <div className={styles.stars}>
          {new Array(Math.trunc(data?.score))
            .fill(data?.score)
            .map((item, index) => {
              return (
                <FaStar key={index} className={`ml-2 mt-12 text-primary `} />
              );
            })}
          {new Array(5 - Math.trunc(data?.score))
            .fill(data?.score)
            .map((item, index) => (
              <FaStar key={index} className={`ml-2 mt-12 text-gray-400 `} />
            ))}
        </div>
        <button className={styles.shopping_btn}>buy</button>
      </div>
    </div>
  );
}

export default ProductDetail;
