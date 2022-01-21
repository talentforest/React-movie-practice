import React from "react";
import { useState } from "react";

export default function MovieForm({ addMovie }) {
  // 영화제목 인풋창
  const [movieTitle, setMovieTitle] = useState("");
  // 연도 인풋창
  const [movieYear, setMovieYear] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addMovie({
      title: movieTitle,
      year: movieYear,
    });
    setMovieTitle("");
    setMovieYear("");
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
}
