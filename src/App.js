import "./App.css";
import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
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
  const addMovie = (movie) => {
    // movies 배열에 추가
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
