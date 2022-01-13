const Section1 = () => {
  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div className="p-4" style={{ backgroundColor: "#000000" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <div className="col-9 ms-auto">
              <h1>Regardez Netflix sur votre TV.</h1>
              <h2 className="mt-3">
                Regardez Netflix sur votre Smart TV, PlayStation, Xbox,
                Chromecast, Apple TV, lecteurs Blu-ray et bien plus.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="col-9 position-relative" style={{ zIndex: 1 }}>
              <img
                alt=""
                style={{ maxWidth: "100%", zIndex: 3 }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                data-uia="section1-img"
              />
              <div className="our-story-card-animation" style={{ zIndex: -1 }}>
                <video className="h-100 w-100" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
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
export default Section1;
