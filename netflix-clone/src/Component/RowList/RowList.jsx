import React from 'react'
// import requests from '../../Utils/request'
import Row from '../Row/Row'
import requests from '../../Utils/request'

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRANDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TV Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
};
export default RowList
