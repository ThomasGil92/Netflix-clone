import React, { useState, MouseEvent, useEffect, useRef } from "react";
import { Movie } from "@Types";
import Navbar from "../Navbar";

interface Trailers {
  id: number;
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }[];
}

interface MovieProps {
  movie: Movie;
}

const HeaderMovie: React.FC<MovieProps> = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState<string>();

  const getTrailerUrl = async () => {
    const trailers: Trailers = await fetch(
      `${process.env.NEXT_PUBLIC_IMDB_API_URL}/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`,
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        let outcome = JSON.parse(text);
        return outcome;
      });
    const trailer = () => {
      const t = trailers.results.find((e) =>
        e.name.toLowerCase().includes("official trailer"),
      );
      return t !== undefined ? t : trailers.results[0];
    };

    setTrailerUrl(trailer().key);
  };

  const hide = (): void => {
    setTrailerUrl("");
  };

  return (
    <>
      <div
        className='fixed-top'
        style={{
          overflow: "hidden",
        }}
      >
        <Navbar />
        <div
          style={{
            top: 0,
            height: 400,
            backgroundImage:
              "linear-gradient( to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 60% ",
          }}
          className='w-100 d-flex align-items-center text-white px-5'
        >
          <div>
            <div style={{ maxWidth: "50vw", paddingLeft: 12, zIndex: 100000 }}>
              {" "}
              <h1 className='bigger_h1' style={{ lineHeight: 0.9 }}>
                Regarder {movie.title} maintenant
              </h1>
              <p>{movie.overview.split(" ").slice(0, 30).join(" ")} ...</p>
              <button
                type='button'
                className='btn-custom-white rounded py-2 px-3'
                data-bs-toggle='modal'
                data-bs-target='#FirstMovieHeader'
                onClick={(e) => {
                  e.preventDefault(), getTrailerUrl();
                }}
              >
                Regarder la bande annonce
              </button>
              <button
                type='button'
                className='btn-custom-dark rounded py-2 px-3'
                data-bs-toggle='modal'
                data-bs-target='#MoreInfos'
                onClick={(e) => {
                  e.preventDefault(); /* , getTrailerUrl(); */
                }}
              >
                Plus d'infos
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#000",
              maxWidth: "60vw",
              width: "60vw",
              height: "100%",
              position: "absolute",
              right: 0,
              zIndex: -2,
            }}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='loader'>Loading...</div>
          </div>
          <img
            alt='poster'
            src={`${process.env.NEXT_PUBLIC_IMDB_API_IMG_URL}${movie.backdrop_path}`}
            style={{
              backgroundColor: "#000",
              maxWidth: "60vw",
              width: "60vw",
              height: "auto",
              position: "absolute",
              right: 0,
              zIndex: -1,
            }}
          />
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className='modal fade text-dark'
        id='FirstMovieHeader'
        tabIndex={-1}
        aria-labelledby='FirstMovieHeaderLabel'
        aria-hidden='true'
        data-bs-dismiss='modal'
        onClick={(e) => {
          e.preventDefault(), hide();
        }}
      >
        <div className='modal-dialog modal-lg  modal-dialog-centered'>
          <div className='modal-content'>
            {trailerUrl && (
              <div className='modal-body p-0 ' style={{ maxHeight: 500 }}>
                <iframe
                  width='100%'
                  height='500'
                  src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&origin=localhost:3000&mute=1`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className='modal fade text-dark'
        id='MoreInfos'
        tabIndex={-1}
        aria-labelledby='MoreInfosHeaderLabel'
        aria-hidden='true'
        data-bs-dismiss='modal'
        onClick={(e) => {
          e.preventDefault(), hide();
        }}
      >
        <div
          className='modal-dialog modal-md m-0 ms-auto modal-dialog-centered'
          style={{ height: "100vh" }}
        >
          <div
            id='moreInfosModalBody'
            className='modal-content'
            style={{ height: "100vh" }}
          >
            {movie && (
              <>
                <div className='modal-header border-0'>
                  <h1 className='modal-title' id='exampleModalLabel'>
                    {movie.title}
                  </h1>
                  <button
                    type='button'
                    className='btn-close  btn-close-white'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>

                <div
                  className='modal-body px-3 pt-0'
                  style={{ maxHeight: 500 }}
                >
                  <h4>Synopsis:</h4>
                  <p>{movie.overview}</p>
                  <h4 className='mt-4 mb-0'>Date de sortie:</h4>
                  <p>{movie.release_date}</p>
                  <h4 className='mt-4 mb-0'>Note:</h4>
                  <p>{movie.vote_average}/10</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderMovie;
