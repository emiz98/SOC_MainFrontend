import "./bhome.scss";
import Mbanner from "../../Components/movie-banner/Mbanner";
import requests from "../../requests";
import MovieList from "../../Components/MovieList/MovieList";

const Bhome = () => {
  return (
    <div className="bookingHome">
      <Mbanner />
      <MovieList title="NOW ON THEATRES" fetchUrl={requests.fetchAnimation} />
      <MovieList title="UPCOMING MOVIES" fetchUrl={requests.fetchScifi} />
    </div>
  );
};

export default Bhome;
