import "./App.scss";
import Mbanner from "./Components/movie-banner/Mbanner";
import Bhome from "./Pages/home/Bhome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import BookingSingle from "./Components/booking-single/BookingSingle";
import ListHalls from "./Pages/ListHalls/ListHalls";
import Footer from "./Components/footer/Footer";
import Account from "./Pages/AccountDetails/Account";
import Seats from "./Pages/Seats/Seats";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Bhome /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Bhome />
          </Route>
          <Route path="/single/:id/">
            <BookingSingle />
          </Route>
          <Route path="/cinemas">
            <ListHalls />
          </Route>
          <Route path="/seats">
            <Seats />
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
