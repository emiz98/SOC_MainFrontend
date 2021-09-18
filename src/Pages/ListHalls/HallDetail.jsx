import "./listhalls.scss";
import { useEffect } from "react";

const HallDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container hallTitle">
        <div className="col">
          <img src="theatres_banner.jpg" />
        </div>
        <div className="hallTitleAbsolute">
          <div className="hallTitleMain">Savoy 3D Dolby ATMOS</div>
          <div className="hallTitleSub">Wellawatte</div>
        </div>
      </div>
      <div className="container hallAbout">
        <div className="row">
          <div className="col-md-5 col-xl-4 col-xxl-4">
            <h1>About</h1>
          </div>
          <div className="col-md-7 col-xl-8 col-xxl-8">
            <p>
              Savoy Cinema is owned and managed by EAP Films &amp; Theaters
              Private Limited. It has long been a one of the top end movie
              entertainment centers in and around Colombo city. Savoy Cinema is
              well equipped with the latest movie technology can accommodate 150
              GOLD CLASS, 497ODC and 8 Box seats that can seat two per Box.
              Savoy Cinema currently screen movies in four major languages,
              namely English and Hindi Movies and the cinema currently screens
              four movies per day.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container hallAbout">
        <div className="row">
          <div className="col-md-5 col-xl-4 col-xxl-4">
            <h1>Contact</h1>
          </div>
          <div className="col-md-7 col-xl-8 col-xxl-8">
            <p>
              <strong>
                No 12, Savoy Building, Wellwatte, Colombo 6, Wellawatte
              </strong>
              <br />
            </p>
            <p>
              Phone: +94117444466
              <br />
            </p>
            <p>
              Fax: +94117444466
              <br />
            </p>
            <p>
              Email: savoymanager@eapmovies.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container hallFacility">
        <div className="row">
          <div className="col-md-12 col-xl-4 col-xxl-4">
            <h1>Facilities</h1>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-2">
            <img src="ico1.png" />
            <p className="facilityHeading">Parking</p>
            <p>
              The theater has its own parking on site for customers.
              <br />
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <img src="ico2.png" />
            <p className="facilityHeading">Snacks and Drinks</p>
            <p>
              Snacks and drinks are available for purchase at the theater snack
              counters.
              <br />
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <img src="ico3.png" />
            <p className="facilityHeading">
              <br />
              <strong>Restaurant</strong>
              <br />
              <br />
            </p>
            <p>
              Enjoy a sit-down meal at the theater with family and friends
              before or after a movie.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallDetail;
