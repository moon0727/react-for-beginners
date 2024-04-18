import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Info from "../components/Info";
import styles from "./Detail.module.css";
import MoveHome from "../components/MoveHome";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <Loading />
        </div>
      ) : (
        <div className={styles.details}>
          <Header headername={detail.title} />
          <MoveHome />
          <Info
            key={detail.id}
            coverImg={detail.large_cover_image}
            title={detail.title}
            runtime={detail.runtime}
            genres={detail.genres}
            like={detail.like_count}
            intro={detail.description_intro}
            year={detail.year}
            trailer={detail.yt_trailer_code}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
