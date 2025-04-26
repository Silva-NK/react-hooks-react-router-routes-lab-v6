import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import "../index.css"


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://localhost:4000/movies")
        .then((response) => response.json())
        .then((data) => setMovies(data));
    }
  }, []);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
