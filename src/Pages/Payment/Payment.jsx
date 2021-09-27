import axios from "axios";
import "./payment.scss";
import React, { useState } from "react";
import { useLocation } from "react-router";
import Stripe from "react-stripe-checkout";

const Payment = () => {
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

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/api/v1/tickets", ticket);
  };

  // function handleToken(token, addresses) {
  //   console.log({ token });
  // }

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 10,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  // console.log(location.state.seats);
  console.log(ticket);
  // console.log(dbSeats);
  return (
    <div>
      <button onClick={handleSubmit} style={{ margin: "10%" }}>
        pay
      </button>
      <Stripe
        stripeKey="pk_test_51JeObyEXdQP0Ck3CjOwRRRDyk8Z65U1AaiinArcsyYajARHGIhfYPiWpnXsF1FGBG1IaLduF9NncVzw0hs0ZWIIU004ibEuBdv"
        amount={10 * 100}
        token={handleToken}
      />

      <div class="ticket ticket-2">
        <div class="date">
          <span class="day">24</span>
          <span class="month-and-time">
            JAN <br />
            <span class="small">8PM</span>
          </span>
        </div>

        <div class="artist">
          <span class="name">SISTER NANCY</span>
          <span class="live small">LIVE</span>
        </div>

        <div class="location">
          <span>GOLDEN GROVE</span>
          <br />
          <span class="small">SIZZLA'S DUB PLACE</span>
        </div>

        <div class="rip"></div>

        <div class="cta">asdasd</div>
      </div>
    </div>
  );
};

export default Payment;
