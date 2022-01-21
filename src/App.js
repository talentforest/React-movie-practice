import "./App.css";
import React, { useState } from "react";
import Movie from "./components/Movie";

function App() {
  // 영화제목 인풋창
  const [movieTitle, setMovieTitle] = useState("");
  // 연도 인풋창
  const [movieYear, setMovieYear] = useState("");
  // movie배열을 리렌더링하기 위해 state선언
  const [movies, setMovies] = useState([
    { title: "kosie1", year: 2001 },
    { title: "kosie2", year: 2001 },
    { title: "kosie3", year: 2001 },
    { title: "kosie4", year: 2001 },
  ]);
  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });
  const addMovie = (e) => {
    e.preventDefault();
    // movies 배열에 추가
    setMovies([
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      },
    ]);
    setMovieTitle("");
    setMovieYear("");
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle} // 상태연결
          placeholder="영화제목"
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          value={movieYear}
          placeholder="개봉연도"
          onChange={(e) => setMovieYear(e.target.value)}
        />
        <br></br>
        <button type="submit">영화 추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
