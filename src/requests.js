const API_KEY = "2d993593c6f4bc11d6feb87b34548c0b";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchMusic: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchScifi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
  //genres   https://api.themoviedb.org/3/genre/movie/list?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US
  //movies by genres https://api.themoviedb.org/3/discover/movie?api_key=2d993593c6f4bc11d6feb87b34548c0b&with_genres=27

  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
