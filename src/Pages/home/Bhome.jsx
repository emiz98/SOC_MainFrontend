import "./bhome.scss";
import Mbanner from "../../Components/movie-banner/Mbanner";
import requests from "../../requests";
import MovieList from "../../Components/MovieList/MovieList";
import OngoingMovies from "../../Components/OngoingMovies/OngoingMovies";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
      <div className="buttonLike">Food Court</div>
      <div className="spacer"></div>
      <OngoingMovies
        title="NOW ON THEATERS"
        fetchUrl={requests.fetchFantasy}
      />
      <OngoingMovies title="UPCOMING MOVIES" fetchUrl={requests.fetchNowPlaying} />
    </div>
  );
};

export default Bhome;
