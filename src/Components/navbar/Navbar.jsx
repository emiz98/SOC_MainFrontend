import {
  ExpandMore,
  Notifications,
  Search,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Container,
  NavDropdown,
  Navbar as Navbars,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // window.onscroll = () => {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  return (
    <Navbars collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbars.Brand>
          <Link to="/" className="navbarBrand">
            <img
              src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
        </Navbars.Brand>
        <Navbars.Toggle aria-controls="responsive-navbar-nav" />
        <Navbars.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="linking" style={{ textDecoration: "none" }}>
              <span className="linking">Home</span>
            </Link>

            <Link
              to="/cinemas"
              className="linking"
              style={{ textDecoration: "none" }}
            >
              <span className="linking">Cinemas</span>
            </Link>

            <Link
              to="/blogs"
              className="linking"
              style={{ textDecoration: "none" }}
            >
              <span className="linking">Blogs</span>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <Link
                to="/account"
                className="linking"
                style={{ textDecoration: "none" }}
              >
                <span className="linking rightLinks">Edit Account</span>
              </Link>
              <NavDropdown.Divider />
              <Link
                to="/account"
                className="linking"
                style={{ textDecoration: "none" }}
              >
                <span className="linking rightLinks">Log Out</span>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbars.Collapse>
      </Container>
    </Navbars>
    // <div className={isScrolled ? "navbar scrolled" : "navbar"}>
    //   <div className="container contain">
    //     <div className="left">
    //       <Link to="/" className="linking">
    //         <img
    //           src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
    //           alt=""
    //         />
    //       </Link>
    //       <Link to="/" className="linking">
    //         <span className="linking">Home</span>
    //       </Link>
    //       <Link to="/cinemas" className="linking">
    //         <span className="linking">Cinemas</span>
    //       </Link>
    //       <Link to="/blogs" className="linking">
    //         <span className="linking">Blogs</span>
    //       </Link>
    //     </div>

    //     <div className="right">
    //       {/* <SearchOutlined className="icon" /> */}
    //       <img src="/user.jpg" alt="" />

    //       <div className="profile">
    //         <ExpandMore className="icon" />

    //         <div className="options">
    //           <Link to="/account" className="linking">
    //             <span className="linking">Edit Account</span>
    //           </Link>

    //           <span>Logout</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
