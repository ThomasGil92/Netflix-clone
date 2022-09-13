import { FunctionComponent } from "react";

const HomeHeader: FunctionComponent = ({ children }) => {
  return (
    <div style={{ position: "relative", paddingBottom: 150 }}>
      {children}
      <div
        className="headerGradient"
        style={{
          zIndex: -9,
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top,rgba(0,0,0,1) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)",
        }}
      ></div>
      <img
        style={{
          zIndex: -10,
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        className="HomeHeaderBG position-absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/c9165c40-9fd3-42fd-8672-5073004f6582/FR-fr-20220103-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/c9165c40-9fd3-42fd-8672-5073004f6582/FR-fr-20220103-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/c9165c40-9fd3-42fd-8672-5073004f6582/FR-fr-20220103-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/c9165c40-9fd3-42fd-8672-5073004f6582/FR-fr-20220103-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        alt=""
      />

      <div
        className="col-md-8 mx-auto text-white text-center"
        style={{ paddingTop: 200, zIndex: 1000000 }}
      >
        <div className="col-7 mx-auto text-center">
          <h1 style={{ fontSize: "3.125rem", fontWeight: 700 }}>
            Films, séries TV et bien plus en illimité.
          </h1>
          <h2 className="mt-4">Où que vous soyez. Annulez à tout moment.</h2>
        </div>
        <div className="col-10 mx-auto text-center">
          <h3 className="mt-4" style={{ fontSize: "1.2rem", fontWeight: 400 }}>
            Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
            abonner ou réactiver votre abonnement.
          </h3>
        </div>
        <div className="col-8 mx-auto text-center mt-4">
          <form className="row g-3 needs-validation" noValidate>
            <div className="form-floating d-flex">
              <input
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label className="text-dark" htmlFor="floatingInput">
                Adresse Email
              </label>

              <button
                style={{
                  fontSize: "1.625rem",
                  fontWeight: 400,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                className="text-white btn-red py-2 px-4 "
                type="button"
                id="button-email"
                onClick={(e) => {
                  e.preventDefault(),
                    alert(
                      "Ce formulaire n'est pas actif. Ce site est juste un projet de développement."
                    );
                }}
              >
                Commencer
              </button>
            </div>
            <div className="invalid-feedback">Votre email est requis!</div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;
