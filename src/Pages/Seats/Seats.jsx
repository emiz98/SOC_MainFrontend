import "./seats.scss";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const base_url = "http://localhost:8080/assets/images/";

const movies = [
  {
    name: "Avenger",
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function App() {
  const { id } = useParams();
  const [showTimes, setShowTimes] = useState([]);
  const [ShowTimeId, setShowTimeId] = useState();

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedShowTime, setSelectedShowTime] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    async function fetchShowTimes() {
      const req = await axios.get(
        `http://localhost:8080/api/v1/showTimes/${parseInt(id)}`
      );
      setShowTimes(req.data);
      setSelectedShowTime(req.data[0]);
      setShowTimeId(req.data[0].id);
      return req;
    }
    fetchShowTimes();
  }, []);

  // console.log(selectedShowTime?.seats.split(",").map(Number));

  const ShowTimeChange = (e) => {
    setSelectedSeats([]);
    const obj = showTimes.find((t) => t.id == e.target.value);
    setSelectedShowTime(obj);
    setShowTimeId(obj.id);
  };

  return (
    <div className="App">
      <div className="Movies">
        <label htmlFor="">Pick a Show Time</label>
        <select onChange={ShowTimeChange}>
          {showTimes.map((showTime) => (
            <option key={showTime.id} value={showTime.id}>
              {showTime.dateSlot.date} ({showTime.timeSlot.time})
            </option>
          ))}
        </select>
      </div>
      {/* <Movies
        showTimes={showTimes}
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      /> */}
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        posterPath={showTimes[0]?.movie.poster_path}
        seatsArray={selectedShowTime?.seats?.split(",")}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>

      <div>
        <Link
          to={{
            pathname: "/payment",
            state: {
              movieId: parseInt(id),
              movieShowTimeId: parseInt(ShowTimeId),
              seatsLength: selectedSeats.length,
              seats: selectedSeats.concat(
                selectedShowTime?.seats.split(",").map(Number)
              ),
            },
          }}
          className="linking"
        >
          {selectedSeats.concat(
            selectedShowTime?.seats.split(",").map(Number).length
          ) != 64 ? (
            <button className="nextBtn">Pay Now</button>
          ) : (
            <div style={{ marginBottom: "50px" }}></div>
          )}
          {/* <button className="nextBtn">Pay Now</button> */}
        </Link>
      </div>
    </div>
  );
}

function Movies({ movie, onChange, showTimes }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
        {showTimes.map((showTime) => (
          <option key={showTime.id} value={showTime.id}>
            {showTime.dateSlot.date} ({showTime.timeSlot.time})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({
  movie,
  selectedSeats,
  onSelectedSeatsChange,
  posterPath,
  seatsArray,
}) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  const movie2 = seatsArray?.map(Number);

  return (
    <div className="Cinema">
      <div className="screen">
        <img className="screenImg" src={`${base_url}${posterPath}`} alt="" />
      </div>

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          // const isOccupied = movie.occupied.includes(seat);
          const isOccupied = movie2?.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
