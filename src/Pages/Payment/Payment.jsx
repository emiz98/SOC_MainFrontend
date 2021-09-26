import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";

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
    seats: location.state.seatsLength,
  });

  const [dbSeats, setDbSeats] = useState({
    id: location.state.movieShowTimeId,
    seats: location.state.seats.toString(),
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dbSeats),
  };

  const handleSubmit = (e) => {
    axios
      .all([
        axios.post("http://localhost:8080/api/v1/showTimes", dbSeats),
        axios.post("http://localhost:8080/api/v1/tickets", ticket),
      ])
      .then(
        axios.spread((data1, data2) => {
          console.log(data1);
          console.log(data2);
        })
      );
  };
  console.log(location.state.seats);
  // console.log(ticket);
  // console.log(dbSeats);
  return (
    <div>
      <button onClick={handleSubmit} style={{ margin: "10%" }}>
        pay
      </button>
    </div>
  );
};

export default Payment;
