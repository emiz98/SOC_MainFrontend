import {
  ExpandMore,
  Notifications,
  Search,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="linking">
            <img
              // src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
              src="/logo.png"
              alt=""
            />
          </Link>
          <Link to="/" className="linking">
            <span className="linking">Home</span>
          </Link>
          <Link to="/events" className="linking">
            <span className="linking">Events</span>
          </Link>
          <Link to="/cinemas" className="linking">
            <span className="linking">Cinemas</span>
          </Link>
        </div>

        <div className="right">
          {/* <SearchOutlined className="icon" /> */}
          <img src="/user.jpg" alt="" />

          <div className="profile">
            <ExpandMore className="icon" />

            <div className="options">
              <Link to="/account" className="linking">
                <span className="linking">Edit Account</span>
              </Link>

              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
