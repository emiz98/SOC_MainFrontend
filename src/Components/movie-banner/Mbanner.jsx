import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./mbanner.scss";
import requests from "../../requests";

const Mbanner = () => {
  // const [movieLink, setMovieLink] = useState(["T1NeHRuPpoM"]);
  const [movieLink, setMovieLink] = useState(["KK8FHdFluOQ"]);

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
    },
  };

  return (
    <div>
      <section className="wrapX noselect">
        <div className="video-bg">
          <img src="mulanCover.png" alt="" />
          {/* <YouTube videoId={movieLink} opts={opts} /> */}
          {/* <iframe
            id="youtube-video"
            src={`https://www.youtube.com/embed/${movieLink}?autoplay=1&mute=1&VQ=HD720&playsinline=1&loop=1&playlist=${movieLink}&controls=0&disablekb=1`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
        <div className="fadebottom"></div>
        <div className="content">
          <div className="banner-content">
            <img className="movieLogo" src="mulan.png" alt="" />
            <br />
            <span className="radius">More Info</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mbanner;
