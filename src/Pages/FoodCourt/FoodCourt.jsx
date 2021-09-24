import "./foodCourt.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const FoodCourt = () => {
  const [foods, setFoods] = useState([]);

  const base_url = "http://localhost:8080/assets/foods/";

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      const request = await axios.get("http://localhost:8080/api/v1/foods");
      setFoods(request.data);
      return request;
    }

    fetchData();
  }, []);

  console.log(foods);

  return (
    <div>
      <div className="topFoodImage">
        <img src="order-bottom.png" style={{ width: "100%" }} alt="" />
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <h4 className="FoodHeaderSub">Fresh From Cinema</h4>
        <h1 className="FoodHeaderMain">
          <strong>OUR SPECIAL MENU</strong>
          <br />
        </h1>
      </div>

      <div className="container" style={{ marginTop: "60px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          {foods.map((food) => (
            <div className="col-md-3 foodItem">
              <img src={`${base_url}${food.food_image}`} />
              <h4>{food.title}</h4>
              <p>
                {food.description}
                <br />
              </p>
              <h5>{food.price}.00 RS</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="bottomFoodImage">
        <img src="order-top.png" style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default FoodCourt;