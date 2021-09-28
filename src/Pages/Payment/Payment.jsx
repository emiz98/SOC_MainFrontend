import axios from "axios";
import "./payment.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Stripe from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base_url = "http://localhost:8080/assets/images/";

const Payment = () => {
  const history = useHistory();
  const location = useLocation();
  const [ticket, setTicket] = useState({
    movie: {
      id: location.state.movieId,
    },
    movieShowTime: {
      dateSlot: {
        id: "",
      },
      id: location.state.movieShowTimeId,
      movie: {
        id: location.state.movieId,
      },
      timeSlot: {
        id: "",
      },
    },
    email: "menadithrox1@gmail.com",
    seats: location.state.seats.toString(),
  });

  toast.configure();

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/api/v1/tickets", ticket);
  };

  const date = location.state.movie.showTime.dateSlot.date.split("-");

  console.log(date);

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: location.state.seats.length * 10,
        },
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        history.push("/");
      });
  }

  useEffect(() => {
    if (location.state.seats == 0) {
      toast.error("please select 1 or more seats to proceed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      history.goBack();
    }
  }, []);

  return (
    <div>
      <button onClick={handleSubmit} style={{ margin: "10%" }}>
        pay
      </button>
      <Stripe
        stripeKey="pk_test_51JeObyEXdQP0Ck3CjOwRRRDyk8Z65U1AaiinArcsyYajARHGIhfYPiWpnXsF1FGBG1IaLduF9NncVzw0hs0ZWIIU004ibEuBdv"
        amount={location.state.seats.length * 10 * 100}
        token={handleToken}
      />

      <div
        class="ticket ticket-2"
        style={{
          backgroundImage: `url("${base_url}${location.state.movie.poster}")`,
          backgroundSize: "cover",
        }}
      >
        <div class="date">
          <span class="day">{date[2]}</span>
          <span class="month-and-time">
            {date[1]} <br />
            <span class="small">{date[0]}</span>
          </span>
        </div>
        <div class="artist">
          <span class="name">{location.state.movie.name}</span>
        </div>
        <div className="bookedTickets">
          Booked Tickets <br />{" "}
          <span>Seat Numbers : {location.state.seats.toString()}</span>
        </div>
        <div className="payment_fadebottom"></div>
      </div>
    </div>
  );
};

export default Payment;
