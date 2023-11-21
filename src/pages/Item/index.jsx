import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Item.module.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import MovieCard from "../../components/MovieCard";

function Item() {
  const { id } = useParams();
  const [movieItem, setMovieItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendMovies, setRecommendMovies] = useState([]);
  const fetchData = async (id) => {
    setLoading(true);
    await axios
      .get(`https://moviesapi.ir/api/v1/movies/${id}`)
      .then(function (response) {
        setMovieItem(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const fetchDataRecommend = async () => {
    await axios
      .get("https://moviesapi.ir/api/v1/movies")
      .then(function (response) {
        // handle success
        setRecommendMovies(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(id);
    fetchDataRecommend();
  }, []);
  console.log(movieItem);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${movieItem.poster})` }}
            className={styles.movieItemBanner}
          />
          <Container>
            <h2>درباره فیلم {movieItem.title}</h2>
            <p>{movieItem.plot}</p>
            <p>
              دسته بندی:
              {movieItem.genres.map(function (item, index) {
                return (
                  <span key={index}>
                    {" "}
                    {item} {index < movieItem.genres.length - 1 ? "-" : null}
                  </span>
                );
              })}
            </p>
            <p>
              کارگردان:
              {movieItem.director}
            </p>
            <p>
              نویسنده:
              {movieItem.writer}
            </p>
            <p>
              بازیگران:
              {movieItem.actors}
            </p>
          </Container>
          <Container>
            <Row>
              {recommendMovies.slice(0, 6).map(function (item) {
                return <MovieCard data={item} key={item.id} />;
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default Item;
