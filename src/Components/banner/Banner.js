import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [movieLink, setMovieLink] = useState(["LKFuXETZUsI"]);
  const [sound, setSound] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchTrending
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
    movieLinkCall();
  }, []);

  function movieLinkCall() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
      )
      .then(function (res) {
        setMovieLink(res.data.results[0].key);
      });
  }

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function shoot() {
    setSound(0);
  }
  function shoot2() {
    setSound(1);
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button onClick={shoot} className="banner_button">
              Play
            </button>
            <button onClick={shoot2} className="banner_button">
              My List
            </button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 200)}
          </h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            // https://www.youtube.com/embed/KO4xEQ3--OI
            src={`https://www.youtube.com/embed/${movieLink}?autoplay=1&vq=large&mute=${sound}&loop=1&playlist=${movieLink}`}
            // src={`https://www.youtube.com/embed/KO4xEQ3--OI?autoplay=1&mute=`${sound}+`&loop=1&playlist=KO4xEQ3--OI`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Banner;
