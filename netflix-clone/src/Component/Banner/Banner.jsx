import React, { useState, useEffect } from 'react';
import axios from '../../Utils/axios';
import requests from '../../Utils/request';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        console.log(response);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error.message);
      }
    })(); // Immediately Invoked Function Expression (IIFE)
  }, []);

    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

  return ( <div
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="banner_contents">
      <h1 className="banner_title">
        {movie?.name || movie?.original_name}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button play">Plays</button>
        <button className="banner_button">My Lists</button>
      </div>
      <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
    </div>
    <div className="banner_fadeBottom" />
  </div>)
}

export default Banner;
