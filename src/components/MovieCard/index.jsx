import style from "./MoveCard.module.css";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <div className={style.movieCard}>
      <Link to={`item/${data.id}`}>
        <div>
          <div className={style.movieCardImage}>
            <img src={data.poster} />
            <div className={style.movieCardDetail}></div>
          </div>
          <div className={style.movieCardTitle}>{data.title}</div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
