import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Info from "../components/Info";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Info
            key={detail.id}
            coverImg={detail.large_cover_image}
            title={detail.title}
            runtime={detail.runtime}
            genres={detail.genres}
            like={detail.like_count}
            intro={detail.description_intro}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
