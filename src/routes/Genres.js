import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import MoveHome from "../components/MoveHome";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Genres() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { g } = useParams();

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&genre=${g}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [g]);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <Loading />
        </div>
      ) : (
        <div className={styles.container}>
          <Header headername={`Genre : ${g}`} />
          <MoveHome />
          <div className={styles.movies}>
            {movies.map((movie) => (
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

export default Genres;
