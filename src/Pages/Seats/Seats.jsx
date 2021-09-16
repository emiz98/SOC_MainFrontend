import { useState } from "react";
import "./seats.scss";

const Seats = () => {
  const [Selected, setSelected] = useState(false);

  const toggleClass = () => {
    setSelected(!Selected);
  };

  return (
    <div>
      <div class="movie-container">
        <label>Pick a movie: </label>
        <select id="movie">
          <option value="1">7.00 AM - 9.00 AM</option>
          <option value="2">9.30 AM - 11.30 AM</option>
          <option value="3">1.00 PM - 3.00 PM</option>
          <option value="4">4.30 PM - 6.30 PM</option>
          <option value="5">7.00 PM - 9.00 PM</option>
        </select>

        <ul class="showcase">
          <li>
            <div class="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div class="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div class="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>

        <div class="container2">
          <div class="screen"></div>

          <div class="row">
            <div
              onClick={toggleClass}
              className={`seat ${Selected && "selected"}`}
            ></div>
            <div class="seat"></div>
            <div class="seat selected"></div>
            <div class="seat selected"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
          </div>

          <p class="text">
            You have selected <span id="count">0</span> seats for the total
            price of Rs. <span id="total">0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seats;
