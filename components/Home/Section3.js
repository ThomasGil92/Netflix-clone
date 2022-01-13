const Section3 = () => {
  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div className="p-5" style={{ backgroundColor: "#000000" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <div className="col-9 ms-auto">
              <h1>Où que vous soyez.</h1>
              <h2 className="mt-3">
                Regardez des films et séries TV en accès illimité sur votre TV,
                smartphone, tablette et ordinateur, tout compris.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="col-9 position-relative" style={{ zIndex: 1 }}>
              <img
                alt=""
                style={{ maxWidth: "100%", zIndex: 3 }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                data-uia="our-story-card-img"
              />
              <div
                className="our-story-card-animation-section3"
                style={{ zIndex: -1 }}
              >
                <video className="h-100 w-100" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
