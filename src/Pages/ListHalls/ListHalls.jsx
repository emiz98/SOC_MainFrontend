import "./listhalls.scss";
import { Link } from "react-router-dom";

const ListHalls = () => {
  return (
    <div>
      <section style={{ margin: "37px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="theaterHeading">Theaters</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <Link to="/halldetails" className="linking">
                <button className="btn btn-primary" type="button">
                  More Info
                </button>
              </Link>
            </div>
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <button className="btn btn-primary" type="button">
                More Info
              </button>
            </div>
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <button className="btn btn-primary" type="button">
                More Info
              </button>
            </div>
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <button className="btn btn-primary" type="button">
                More Info
              </button>
            </div>
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <button className="btn btn-primary" type="button">
                More Info
              </button>
            </div>
            <div className="col-md-3 theaterCard">
              <img src="savoy.png" />
              <h1>Savoy 3D</h1>
              <p>Wellawatte</p>
              <button className="btn btn-primary" type="button">
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListHalls;
