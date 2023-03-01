import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/Product/Actions";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = (data) => {
    dispatch(add_to_cart(data));
  };

  return (
    <div className="lws-productCard" key={data.id}>
      <img className="lws-productImage" src={data.imgUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{data.pname}</h4>
        <p className="lws-productCategory">{data.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{data.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{data.quantity}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart" onClick={() => addToCart(data.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
