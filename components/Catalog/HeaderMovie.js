import { useEffect, useState } from "react";
import Navbar from "../Navbar";

const HeaderMovie = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState();

  const getTrailerUrl = async () => {
    const trailers = await fetch(
      `${process.env.NEXT_PUBLIC_IMDB_API_URL}/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
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
        e.name.toLowerCase().includes("official trailer")
      );
      return t !== undefined ? t : trailers.results[0];
    };

    setTrailerUrl(trailer().key);
  };

  const hide = (id, e) => {
    const myModalEl = document.getElementById(id);
    const modal = bootstrap.Modal.getInstance(myModalEl);
    if (myModalEl.contains(e.target)) {
    } else {
      modal.hide(), setTrailerUrl();
    }
  };

  return (
    <>
      <div
        className="fixed-top"
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
          className="w-100 d-flex align-items-center text-white px-5"
        >
          <div>
            <div style={{ maxWidth: "50vw", paddingLeft: 12, zIndex: 100000 }}>
              {" "}
              <h1 className="bigger_h1">Regarder {movie.title} maintenant</h1>
              <p>{movie.overview.split(" ").slice(0, 30).join(" ")} ...</p>
              <button
                type="button"
                className="btn-custom-white rounded py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#FirstMovieHeader"
                onClick={(e) => {
                  e.preventDefault(), getTrailerUrl();
                }}
              >
                Regarder la bande annonce
              </button>
              <button
                type="button"
                className="btn-custom-dark rounded py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#MoreInfos"
                onClick={(e) => {
                  e.preventDefault(); /* , getTrailerUrl(); */
                }}
              >
                Plus d'infos
              </button>
            </div>
          </div>
          {movie.backdrop_path ? (
            <img
              src={`${process.env.NEXT_PUBLIC_IMDB_API_IMG_URL}${movie.backdrop_path}`}
              style={{
                maxWidth: "60vw",
                width: "60vw",
                height: "auto",
                position: "absolute",
                right: 0,
                zIndex: -1,
              }}
            />
          ) : (
            <div
              style={{
                backgroundColor: "#000000",
                maxWidth: "60vw",
                width: "60vw",
                height: "auto",
                position: "absolute",
                right: 0,
                color: "white",
                zIndex: -1,
              }}
            >
              test
            </div>
          )}
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade text-dark"
        id="FirstMovieHeader"
        tabIndex="-1"
        aria-labelledby="FirstMovieHeaderLabel"
        aria-hidden="true"
        onClick={(e) => {
          e.preventDefault(), hide("FirstMovieHeader", e);
        }}
      >
        <div className="modal-dialog modal-lg  modal-dialog-centered">
          <div className="modal-content">
            {trailerUrl && (
              <div className="modal-body p-0 " style={{ maxHeight: 500 }}>
                <iframe
                  type="text/html"
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&origin=localhost:3000&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="modal fade text-dark"
        id="MoreInfos"
        tabIndex="-1"
        aria-labelledby="MoreInfosHeaderLabel"
        aria-hidden="true"
        onClick={(e) => {
          e.preventDefault(), hide("MoreInfos", e);
        }}
      >
        <div
          className="modal-dialog modal-md m-0 ms-auto modal-dialog-centered"
          style={{ height: "100vh" }}
        >
          <div
            id="moreInfosModalBody"
            className="modal-content"
            style={{ height: "100vh" }}
          >
            {movie && (
              <>
                <div className="modal-header border-0">
                  <h1 className="modal-title" id="exampleModalLabel">
                    {movie.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close  btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  className="modal-body px-3 pt-0"
                  style={{ maxHeight: 500 }}
                >
                  <h4>Synopsis:</h4>
                  <p>{movie.overview}</p>
                  <h4 className="mt-4 mb-0">Date de sortie:</h4>
                  <p>{movie.release_date}</p>
                  <h4 className="mt-4 mb-0">Note:</h4>
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
