const FAQ = () => {
  const accordionItems = [
    {
      header: "Netflix, qu'est-ce que c'est ?",
      paragraphs: [
        "Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.",
        "Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !",
      ],
    },
    {
      header: "Combien coûte Netflix ?",
      paragraphs: [
        "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires.",
      ],
    },
    {
      header: "Où puis-je regarder Netflix ?",
      paragraphs: [
        "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.",
        "Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.",
      ],
    },
    {
      header: "Comment puis-je annuler mon forfait ?",
      paragraphs: [
        "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.",
      ],
    },
    {
      header: "Que puis-je regarder sur Netflix ?",
      paragraphs: [
        "Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.",
      ],
    },
    {
      header: "Est-ce que Netflix est adapté aux enfants ?",
      paragraphs: [
        "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.",
        "Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.",
      ],
    },
  ];

  return (
    <div className="pt-2 text-white" style={{ backgroundColor: "#222222" }}>
      <div className="p-5" style={{ backgroundColor: "#000000" }}>
        <div className="col-8 mx-auto">
          <div className="accordion" id="accordionFAQ">
            {accordionItems.map((item, id) => {
              return (
                <div key={id} className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={{ fontSize: 26, fontWeight: 400 }}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${id}`}
                    >
                      {item.header}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      {item.paragraphs.map((pItem, id) => {
                        return (
                          <h2 key={id} className="mb-3">
                            {pItem}
                          </h2>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
