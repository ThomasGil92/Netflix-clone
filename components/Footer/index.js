const Footer = () => {
  const footerObj = [
    "FAQ",
    "Centre d'aide",
    "Compte",
    "Presse",
    "Relations Investisseurs",
    "Recrutement",
    "Utiliser des cartes cadeaux",
    "Acheter des cartes cadeaux",
    "Modes de lecture",
    "Conditions d'utilisation",
    "Confidentialité",
    "Préférences de cookies",
    "Mentions légales",
    "Nous contacter",
    "Test de vitesse",
    "Informations légales",
    "Seulement sur Netflix",
  ];

  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div
        className="row py-5"
        style={{
          paddingLeft: "18%",
          paddingRight: "18%",
          backgroundColor: "#000",
        }}
      >
        {footerObj.map((item, id) => {
          return (
            <div
              className="col-3 mb-2 text-secondary"
              key={id}
              title="Lien inactif"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
