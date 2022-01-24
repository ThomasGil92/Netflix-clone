import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import HeaderMovie from "../components/Catalog/HeaderMovie";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Catalogue = ({
  movies,
  netflixMovies,
  actionMovies,
  animationMovies,
  genres,
}) => {
  const [movie, setMovie] = useState(movies.results[0]);
  console.log(genres, animationMovies);

  const genresRows = (label, data) => {
    return (
      <div
        id="slider"
        style={{
          height: 250,
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <h5 className="text-white ms-5">{label}</h5>
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          /*  */
          navigation={true}
          className="mySwiper mx-5"
        >
          {data.results.map((item, id) => (
            <SwiperSlide
              key={id}
              className="text-white"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMDB_API_IMG_URL}${item.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 200,
              }}
              onClick={(e) => {
                e.preventDefault(), setMovie(item);
              }}
            >
              {/* {item.original_title} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      {movie && movies && (
        <Layout>
          <HeaderMovie movie={movie} />
          <div
            style={{
              marginTop: 400,
            }}
          >
            {genresRows("Netflix", netflixMovies)}
            {genresRows("Meilleurs films", movies)}
            {genresRows("Action", actionMovies)}
            {genresRows("Animation", animationMovies)}
          </div>
          <Footer />

          {/* <Section1 movies={movies.results} setMovie={setMovie} /> */}
        </Layout>
      )}
    </>
  );
};
export async function getServerSideProps(context) {
  const netflixMovies = await fetch(
    `${process.env.NEXT_PUBLIC_IMDB_API_URL}/discover/movie?with_original_language=en&with_watch_providers=8&watch_region=FR&primary_release_year=2021&sort_by=popularity.desc&language=fr-FR&api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let outcome = JSON.parse(text);
      return outcome;
    });
  const movies = await fetch(
    `${process.env.NEXT_PUBLIC_IMDB_API_URL}/discover/movie?with_original_language=en&sort_by=popularity.desc&primary_release_year=2021&language=fr-FR&api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let outcome = JSON.parse(text);
      return outcome;
    });

  const actionMovies = await fetch(
    `${process.env.NEXT_PUBLIC_IMDB_API_URL}/discover/movie?with_original_language=en&primary_release_year=2021&sort_by=vote_average.desc&with_genres=28&sort_by=vote_average.desc&vote_count.gte=10&language=fr-FR&api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let outcome = JSON.parse(text);
      return outcome;
    });
  const animationMovies = await fetch(
    `${process.env.NEXT_PUBLIC_IMDB_API_URL}/discover/movie?with_original_language=en&primary_release_year=2021&sort_by=vote_average.desc&with_genres=16&sort_by=vote_average.desc&vote_count.gte=10&language=fr-FR&api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let outcome = JSON.parse(text);
      return outcome;
    });
  const genres = await fetch(
    `${process.env.NEXT_PUBLIC_IMDB_API_URL}/genre/movie/list?language=fr-FR&api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let outcome = JSON.parse(text);
      return outcome;
    });

  console.log("load");
  return {
    props: { movies, actionMovies, netflixMovies, animationMovies, genres }, // will be passed to the page component as props
  };
}
export default Catalogue;
