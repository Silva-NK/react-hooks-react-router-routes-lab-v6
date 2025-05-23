import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../index.css"

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://localhost:4000/directors")
        .then((result) => result.json())
        .then((data) => setDirectors(data));
    }
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
          {directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
      </main>
    </>
  );
};

export default Directors;
