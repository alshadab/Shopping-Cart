import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../redux/Product/Actions";

const Cart = () => {
  const info = useSelector((state) => state.products);
  const { cartProducts } = info;
  const dispatch = useDispatch();
  const plusHandler = (id) => {
    dispatch(plus(id));
  };

  return (
    <>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              {cartProducts.map((data) => {
                return (
                  <div className="cartCard">
                    <div className="flex items-center col-span-6 space-x-6">
                      {/* <!-- cart image --> */}
                      <img
                        className="lws-cartImage"
                        src={data.imgUrl}
                        alt="product"
                      />
                      {/* <!-- cart item info --> */}
                      <div className="space-y-2">
                        <h4 className="lws-cartName">{data.pname}</h4>
                        <p className="lws-cartCategory">{data.category}</p>
                        <p>
                          BDT{" "}
                          <span className="lws-cartPrice">{data.price}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                      {/* <!-- amount buttons --> */}
                      <div className="flex items-center space-x-4">
                        <button
                          className="lws-incrementQuantity"
                          disabled={data.quantity < 0 ? true : false}
                          onClick={() => plusHandler(data.id)}
                        >
                          <i className="text-lg fa-solid fa-plus"></i>
                        </button>
                        <span className="lws-cartQuantity">{data.qty}</span>
                        <button
                          className="lws-decrementQuantity"
                          onClick={() => minus(data.id)}
                        >
                          <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                      </div>
                      {/* <!-- price --> */}
                      <p className="text-lg font-bold">
                        BDT{" "}
                        <span className="lws-calculatedPrice">
                          {data.price}
                        </span>
                      </p>
                    </div>
                    {/* <!-- delete button --> */}
                    <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                      <button className="lws-removeFromCart">
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                  Bill Details
                </h4>
                <div className="space-y-4">
                  {/* <!-- sub total --> */}
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                      BDT <span className="lws-subtotal">8800</span>
                    </p>
                  </div>
                  {/* <!-- Discount --> */}
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      BDT <span className="lws-discount">0</span>
                    </p>
                  </div>
                  {/* <!-- VAT --> */}
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      BDT <span className="vat">0</span>
                    </p>
                  </div>
                  {/* <!-- Total --> */}
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">
                      BDT <span className="lws-total">8800</span>
                    </p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
