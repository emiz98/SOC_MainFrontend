import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./movielist.css";
import { Link } from "react-router-dom";

const MovieList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);

  return (
    <div>
      <div className="title">{title}</div>
      <div className="movie_container">
        {movies.map((movie) => (
          <div className="movie" key={movie?.id}>
            <img src={`${base_url}${movie.poster_path}`} alt="" />
            {/* <div className="movie-info">
          </div> */}
            <div className="movie-over">
              <h4>{movie?.original_title}</h4>
              <Link to={`/single/${movie?.id}}`}>
                <span className="info">Book Now</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
