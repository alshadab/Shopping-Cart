import React, { useState } from "react";
import { useDispatch } from "react-redux";
import add_product from "../redux/Product/Actions";

const ProductInputForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: 0,
    pname: "",
    category: "",
    imgUrl: "",
    price: 0,
    quantity: 0,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value, id: Math.floor(Math.random() * 500) });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(add_product(data));
    setData({
      id: 0,
      pname: "",
      category: "",
      imgUrl: "",
      price: 0,
      quantity: 0,
    });
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={submitHandler}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            name="pname"
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            value={data.pname}
            onChange={changeHandler}
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            name="category"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            value={data.category}
            onChange={changeHandler}
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            name="imgUrl"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            value={data.imgUrl}
            onChange={changeHandler}
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              name="price"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={data.price}
              onChange={changeHandler}
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              name="quantity"
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              value={data.quantity}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInputForm;
