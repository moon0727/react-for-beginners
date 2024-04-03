import PropTypes from "prop-types";
import styles from "./Info.module.css";

function Info({ coverImg, title, runtime, genres, like, intro, year }) {
  return (
    <div className={styles.container}>
      <div className={styles.info__img}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.info__title}>{title}</h1>
        <h3 className={styles.info__year}>{year}</h3>
        <ul className={styles.info__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <div>
          ⏱️{" "}
          {runtime >= 60
            ? `${(runtime / 60).toFixed()}h ${runtime % 60}m`
            : runtime === 0
            ? `Not provided`
            : runtime}
        </div>
        <div>❤️ {like}</div>
        <p className={styles.info__intro}>{intro}</p>
      </div>
    </div>
  );
}

Info.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  intro: PropTypes.string.isRequired,
};

export default Info;
