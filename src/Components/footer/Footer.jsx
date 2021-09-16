import "./footer.scss";
import $ from "jquery";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="wrapper">
          <img className="footerImg" src="/sm.png" alt="" />
          <small>
            &copy;2021 <strong>Movie Booking System</strong>, All Rights
            Reserved
          </small>
          <nav className="footer-nav">
            <a href="#" id="button">
              Back to Top
            </a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
