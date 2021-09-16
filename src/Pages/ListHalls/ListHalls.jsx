import "./listhalls.scss";
import { Link } from "react-router-dom";

const ListHalls = () => {
  return (
    <div>
      <div class="wrap2 cf">
        <h1 class="projTitle">Available Cinemas</h1>
        <div class="cart">
          <ul class="cartWrap">
            <li class="items odd">
              <div class="infoWrap">
                <div class="cartSection">
                  <div>
                    <p class="itemNumber">Savoy 3D</p>
                    <Link to="/seats">
                      <span className="book">Book Ticket</span>
                    </Link>
                  </div>

                  {/* <h3>Savoy 3D</h3> */}

                  <div className="iconRow">
                    <p className="dolby">
                      <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dolby-Digital.svg/250px-Dolby-Digital.svg.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div class="cartSection removeWrap"></div>
              </div>
            </li>
            <li class="items odd">
              <div class="infoWrap">
                <div class="cartSection">
                  <div>
                    <p class="itemNumber">Cinemax 3D</p>
                    <Link to="/seats">
                      <span className="book">Book Ticket</span>
                    </Link>
                  </div>

                  {/* <h3>Savoy 3D</h3> */}

                  <div className="iconRow">
                    <p className="dolby">
                      <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dolby-Digital.svg/250px-Dolby-Digital.svg.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div class="cartSection removeWrap"></div>
              </div>
            </li>
            <li class="items odd">
              <div class="infoWrap">
                <div class="cartSection">
                  <div>
                    <p class="itemNumber">EROS cinemas</p>
                    <Link to="/seats">
                      <span className="book">Book Ticket</span>
                    </Link>
                  </div>

                  {/* <h3>Savoy 3D</h3> */}

                  <div className="iconRow">
                    <p className="dolby">
                      <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dolby-Digital.svg/250px-Dolby-Digital.svg.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div class="cartSection removeWrap"></div>
              </div>
            </li>
            <li class="items odd">
              <div class="infoWrap">
                <div class="cartSection">
                  <div>
                    <p class="itemNumber">PVR cinemas</p>
                    <Link to="/seats">
                      <span className="book">Book Ticket</span>
                    </Link>
                  </div>

                  {/* <h3>Savoy 3D</h3> */}

                  <div className="iconRow">
                    <p className="dolby">
                      <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dolby-Digital.svg/250px-Dolby-Digital.svg.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div class="cartSection removeWrap"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListHalls;
