import axios from "axios";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";

const SeatTest = () => {
  const { id } = useParams();
  const [showTimes, setShowTimes] = useState([]);
  const [ticket, setTicket] = useState({
    movie: {
      id: parseInt(id),
    },
    movieShowTime: {
      dateSlot: {
        id: 6,
      },
      id: 9,
      movie: {
        id: parseInt(id),
      },
      timeSlot: {
        id: 7,
      },
    },
    email: "",
    seats: 1,
  });

  const base_url = "http://localhost:8080/assets/images/";

  useEffect(() => {
    async function fetchShowTimes() {
      const request = await axios.get(
        `http://localhost:8080/api/v1/showTimes/${parseInt(id)}`
      );
      setShowTimes(request.data);
    }
    fetchShowTimes();
  }, []);

  const handleSubmit = (e) => {
    const request2 = axios.post("http://localhost:8080/api/v1/tickets", ticket);
  };

  const changeShowTime = (e) => {
    ticket.movieShowTime.id = e.target.value;
    // ticket.seats = e.target.value;
    console.log(ticket);
  };
  const changeEmail = (e) => {
    ticket.email = e.target.value;
    console.log(ticket);
  };
  const changeSeats = (e) => {
    ticket.seats = e.target.value;
    console.log(ticket);
  };

  return (
    <div style={{ margin: "20%" }}>
      {/* <img
        style={{
          Width: "100%",
        }}
        src={`${base_url}${showTimes[0]?.movie.poster_path}`}
        alt=""
      /> */}
      <form onSubmit={handleSubmit}>
        <select
          name="movieShowTime"
          onChange={changeShowTime}
          className="form-select"
          aria-label="Default select example"
        >
          {showTimes.map((showTime) => (
            <option key={showTime.id} value={showTime.id}>
              Date: {showTime.dateSlot.date} -------- Time:
              {showTime.timeSlot.time}
            </option>
          ))}
        </select>
        <input type="text" name="email" onChange={changeEmail}/>
        <input type="number" name="seats" onChange={changeSeats}/>
        <input type="submit" value="Book Now!!" />
      </form>
    </div>
  );
};

export default SeatTest;
