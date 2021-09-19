import "./foodCourt.scss";
import { useEffect } from "react";

const FoodCourt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="topFoodImage">
        <img src="order-bottom.png" style={{ width: "100%" }} alt="" />
      </div>
      <div class="container" style={{ marginTop: "50px" }}>
        <h4 className="FoodHeaderSub">Fresh From Cinema</h4>
        <h1 className="FoodHeaderMain">
          <strong>OUR SPECIAL MENU</strong>
          <br />
        </h1>
      </div>

      <div class="container" style={{ marginTop: "60px" }}>
        <div class="row" style={{ marginBottom: "30px" }}>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
          <div class="col-md-3 foodItem">
            <img src="menu-1.png" />
            <h4>Margherita Pizza</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
            </p>
            <h5>250.00 RS</h5>
          </div>
        </div>
      </div>
      <div className="bottomFoodImage">
        <img src="order-top.png" style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default FoodCourt;
