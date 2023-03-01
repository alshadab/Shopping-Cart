import React from "react";
import { useSelector } from "react-redux";
import logo from "./images/logo.png";
const NavBar = ({ setStatus }) => {
  const data = useSelector((state) => state.products);

  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="#">
            <img
              src={logo}
              alt="LWS"
              className="max-w-[140px]"
              onClick={() => setStatus(true)}
            />
          </a>

          <div className="flex gap-4">
            <a
              href="#"
              className="navHome"
              id="lws-home"
              onClick={() => setStatus(true)}
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#"
              className="navCart"
              id="lws-cart"
              onClick={() => setStatus(false)}
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{data.totalValue}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
