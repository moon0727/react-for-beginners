import PropTypes from "prop-types";
import "../styles.css";

function Info({ coverImg, title, runtime, genres, like, intro }) {
  return (
    <div className="container">
      <div className="largeImage">
        <img src={coverImg} alt={title} />
      </div>
      <div className="detailInformation">
        <h1>{title}</h1>
        <div>
          ⏱️ :{" "}
          {runtime > 60
            ? `${(runtime / 60).toFixed()}h ${runtime % 60}m`
            : runtime}
        </div>
        <div>❤️ : {like}</div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className="intro">{intro}</p>
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
