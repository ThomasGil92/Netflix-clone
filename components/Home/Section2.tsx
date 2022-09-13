import { FunctionComponent } from "react";

const Section2: FunctionComponent = () => {
  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div className="p-4" style={{ backgroundColor: "#000000" }}>
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-6">
            <div
              className="col-9 position-relative mx-auto"
              style={{ zIndex: 1 }}
            >
              <img
                alt="mobile"
                className="w-100"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                data-uia="section2-img"
              />
              <div className="home-card-animation-section2 d-flex align-items-center">
                <div style={{ margin: "0 1em 0 0" }}>
                  <img
                    alt="desktop"
                    style={{ height: "4.5em" }}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div>
                  <p style={{ fontSize: "1em", marginBottom: 0 }}>
                    Stranger Things
                  </p>
                  <p
                    style={{
                      fontSize: ".9em",
                      color: "#0071eb",
                      marginBottom: 0,
                    }}
                  >
                    Téléchargement en cours...
                  </p>
                </div>
                <div id="loadingLogo" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="col-9">
              <h1>
                Téléchargez vos séries préférées pour les regarder hors
                connexion.
              </h1>
              <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
                Enregistrez vos programmes préférés et ayez toujours quelque
                chose à regarder.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
