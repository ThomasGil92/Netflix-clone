const Section4 = () => {
  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div className="p-4" style={{ backgroundColor: "#000000" }}>
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-6">
            <div
              className="col-9 position-relative ms-auto"
              style={{ zIndex: 1 }}
            >
              <img
                alt="jeunesse-img"
                className="w-100"
                src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZDfkUMdwXcdHIHDS8mqiBYqabgFeaWFN6H5MDy4Sad0uS0CwII4ot9SLFvEiI5URTBm3WolSn9tevH9mWgTI1f2gkJM.png?r=a3e"
                data-uia="section4-img"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="col-9">
              <h1>Créez des profils pour les enfants.</h1>
              <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
                Les enfants découvrent de nouvelles aventures et retrouvent
                leurs personnages préférés dans un espace bien à eux, déjà
                inclus dans votre abonnement.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
