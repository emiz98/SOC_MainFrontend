import "./App.scss";
import Bhome from "./Pages/home/Bhome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import BookingSingle from "./Components/booking-single/BookingSingle";
import BookingSingle2 from "./Components/booking-single/BookingSingle2";
import ListHalls from "./Pages/ListHalls/ListHalls";
import Footer from "./Components/footer/Footer";
import Account from "./Pages/AccountDetails/Account";
import Seats from "./Pages/Seats/Seats";
import HallDetail from "./Pages/ListHalls/HallDetail";
import FoodCourt from "./Pages/FoodCourt/FoodCourt";
import Payment from "./Pages/Payment/Payment";
import Blogs from "./Pages/Blogs/Blogs";
import Blog from "./Pages/Blogs/Blog";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Bhome />
          </Route>
          <Route path="/cinemas">
            <ListHalls />
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
          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>

          <Route path="/halldetails">
            <HallDetail />
          </Route>

          <Route path="/food">
            <FoodCourt />
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
