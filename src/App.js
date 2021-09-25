import "./App.scss";
import Mbanner from "./Components/movie-banner/Mbanner";
import Bhome from "./Pages/home/Bhome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import BookingSingle from "./Components/booking-single/BookingSingle";
import BookingSingle2 from "./Components/booking-single/BookingSingle2";
import ListHalls from "./Pages/ListHalls/ListHalls";
import Footer from "./Components/footer/Footer";
import Account from "./Pages/AccountDetails/Account";
import Seats from "./Pages/Seats/Seats";
import Events from "./Pages/Events/Events";
import HallDetail from "./Pages/ListHalls/HallDetail";
import FoodCourt from "./Pages/FoodCourt/FoodCourt";
import SeatTest from "./Pages/Seats/SeatTest";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Bhome /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/cinemas">
            <Bhome />
          </Route>
          <Route path="/single/:id/">
            <BookingSingle />
          </Route>
          <Route path="/movie/:id/">
            <BookingSingle2 />
          </Route>
          <Route path="/seats/:id/">
            <Seats />
          </Route>

          <Route path="/halldetails">
            <HallDetail />
          </Route>
          <Route path="/theaters">
            <ListHalls />
          </Route>
          <Route path="/food">
            <FoodCourt />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
