import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Search from "../components/Search";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    setShowMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getSearchResult = (search) => {
    if (search === "") {
      setShowMovies(movies);
    } else {
      setShowMovies(
        movies.filter((it) =>
          it.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <Loading />
        </div>
      ) : (
        <div className={styles.container}>
          <Header headername="HOME" />
          <Search movies={movies} onSubmit={getSearchResult} />
          <div className={styles.movies}>
            {showMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
