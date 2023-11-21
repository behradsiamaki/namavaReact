import Container from "../../components/Container";
import IntroImage from "../../components/IntroImage";
import Row from "../../components/Row";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://moviesapi.ir/api/v1/movies")
      .then(function (response) {
        // handle success
        setMovies(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <IntroImage />
      <Container>
        <Row>
          {movies.slice(0,6).map(function (item) {
            return <MovieCard data={item} key={item.id} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;