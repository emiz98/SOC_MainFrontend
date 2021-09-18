import "./bhome.scss";
import Mbanner from "../../Components/movie-banner/Mbanner";
import requests from "../../requests";
import MovieList from "../../Components/MovieList/MovieList";
import OngoingMovies from "../../Components/OngoingMovies/OngoingMovies";

const Bhome = () => {
  return (
    <div className="bookingHome">
      <Mbanner />
      <OngoingMovies
        title="NOW ON THEATERS"
        fetchUrl={requests.fetchAnimation}
      />
      <MovieList title="UPCOMING MOVIES" fetchUrl={requests.fetchScifi} />
    </div>
  );
};

export default Bhome;
