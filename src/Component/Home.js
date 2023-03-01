import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

import ProductInputForm from "./ProductInputForm";
import ProductItem from "./ProductItem";

const Home = ({ status }) => {
  const data = useSelector((state) => state.products);
  const { products } = data;

  if (status) {
    return (
      <div>
        <main className="py-16">
          <div className="productWrapper">
            {/* <!-- products container --> */}
            <div className="productContainer" id="lws-productContainer">
              {/* <!-- product item --> */}
              {products.length > 0 ? (
                products.map((data) => <ProductItem data={data} />)
              ) : (
                <div>
                  <h4>Products not found.</h4>
                </div>
              )}
            </div>
            {/* <!-- products container ends --> */}
            <div>
              {/* <!-- Product Input Form --> */}
              <ProductInputForm />
              {/* <!-- Product Input Form Ends --> */}
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <Cart />
      </div>
    );
  }
};

export default Home;
