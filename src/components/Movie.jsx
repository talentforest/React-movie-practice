import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <div>{movie.title}</div>
      <div>{movie.year}</div>
    </div>
  );
}
