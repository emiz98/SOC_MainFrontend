import "./bhome.scss";
import Mbanner from "../../Components/movie-banner/Mbanner";
import requests from "../../requests";
import MovieList from "../../Components/MovieList/MovieList";
import OngoingMovies from "../../Components/OngoingMovies/OngoingMovies";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import OngoingMovies2 from "../../Components/OngoingMovies/OngoingMovies2";

const Bhome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bookingHome">
      <Mbanner />
      <Link to="/theaters" className="linking">
        <div className="buttonLike">Theaters</div>
      </Link>
      <Link to="/food" className="linking">
        <div className="buttonLike">Food Court</div>
      </Link>
      <div className="spacer"></div>
      <OngoingMovies2 title="NOW ON THEATERS" />
      {/* <OngoingMovies
        title="NOW ON THEATERS"
        fetchUrl={requests.fetchAnimation}
      /> */}
      <OngoingMovies
        title="UPCOMING MOVIES"
        fetchUrl={requests.fetchNowPlaying}
      />
    </div>
  );
};

export default Bhome;
