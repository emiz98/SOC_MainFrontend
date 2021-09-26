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

  const handleSubmit = (e) => {
    const request1 = axios.post("http://localhost:8080/api/v1/tickets", ticket);
    const request2 = axios.post(
      "http://localhost:8080/api/v1/showTimes",
      dbSeats
    );
  };

  console.log(ticket);
  console.log(dbSeats);
  return (
    <div>
      <button onClick={handleSubmit} style={{ margin: "10%" }}>
        pay
      </button>
    </div>
  );
};

export default Payment;
