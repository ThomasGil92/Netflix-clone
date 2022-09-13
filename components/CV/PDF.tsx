import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { FunctionComponent } from "react";

const styles = StyleSheet.create({
  page: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  header: {
    position: "relative",
    height: 80,
    backgroundColor: "#343A40",
    width: "100%",
    textAlign: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col12: {
    paddingVertical: 10,
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#f5f5f5",
    marginBottom: 15,
    zIndex: -1,
  },
  col8: {
    width: "76%",
    maxWidth: "76%",
    color: "white",
  },
  col4: {
    width: "20%",
    maxWidth: "20%",
    marginLeft: "auto",
  },
  card: {
    width: "100%",
    backgroundColor: "#F8F9FA",
    marginTop: 10,
    color: "black",
    borderRadius: "10px",
    padding: 10,
    border: "1px solid #d0d0cf",
  },
});

interface PDFProps {
  url: string;
}

const CVPDF: FunctionComponent<PDFProps> = ({ url }) => {
  return (
    <Document title={"CV Thomas Gil REACT/NEXT.js"}>
      <Page size={"A3"} style={styles.page}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25 }}>Thomas Gil</Text>
          <Text style={{ fontSize: 19 }}>
            Développeur web Frontend React.js et Next.js en freelance
          </Text>
          <Image
            style={{
              position: "absolute",
              right: 30,
              top: 0,
              width: 120,
              height: 120,
              borderRadius: "50%",
            }}
            src={"assets/img/thomas-g.jpeg"}
          />
        </View>
        <View style={styles.col12}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "26%",
              }}
            >
              <Image
                src={"assets/img/email-icon.png"}
                style={{ width: 15, height: 15 }}
              />
              <Text>{"  "}Tgil849@gmail.com</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "26%",
              }}
            >
              <Image
                src={"assets/img/mobile-icon.png"}
                style={{ height: 22, marginTop: 2 }}
              />
              <Text>{"   "}07.62.50.70.97</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "26%",
              }}
            >
              <Image
                src={"assets/img/github-icon.png"}
                style={{ height: 17 }}
              />
              <Text style={{ fontSize: 13 }}>
                {" "}
                https://github.com/ThomasGil92
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col8}>
            <View
              style={{
                paddingVertical: 10,
                backgroundColor: "#343A40",
                width: "100%",
                textAlign: "center",
                borderRadius: "10%",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: 700 }}>Expériences</Text>
            </View>
            <View style={styles.card}>
              <Text style={{ fontSize: 20, fontWeight: 700 }}>2021:</Text>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 15, paddingTop: 20 }}>
                  I/ Création d&apos;un site vitrine et d&apos;un blog pour
                  "Integrative Phenomics", société d&apos;analyse médicale du
                  microbiote et de conseils en nutrition.
                </Text>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 11 }}>
                    • Intégration des maquettes visuelles.
                  </Text>
                  <Text style={{ fontSize: 11 }}>• Création du blog.</Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 11, textDecoration: "underline" }}>
                      Technologies utilisées:
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      : Next.js, REACT.js, Firebase, D3, HTML5, CSS3.
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, paddingTop: 20 }}>
                  II/ Création d&apos;une application web ("Enterapie") pour
                  "Integrative Phenomics", société d&apos;analyse médicale du
                  microbiote et de conseils en nutrition. Cette plateforme est
                  destinée au médecins spécialisés dans la nutrition.
                </Text>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 11 }}>
                    • Création du dashboard de suivi des patients.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Visualisation des analyses.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Gestion et historique des rendez-vous.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Intégration et visualisation de graphiques avec D3.js et
                    react-chartjs-2.js.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Création et envoi de rapports PDF sur les analyses de
                    comportements et du microbiote des patients.
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 11, textDecoration: "underline" }}>
                      Technologies utilisées:
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      : Next.js, REACT.js, Firebase, D3, HTML5, CSS3.
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, paddingTop: 20 }}>
                  III/ Création d&apos;une application web ("EatSmart") pour
                  "Integrative Phenomics", société d&apos;analyse médicale du
                  microbiote et de conseils en nutrition.
                </Text>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 11 }}>
                    • Création du parcours utilisateur pour les commandes en
                    livraison de repas recommandés.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Gestion des bases de données avec Firebase (utilisateurs,
                    articles de blog, nouvelles).
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Intégration et visualisation de graphiques avec D3.js et
                    react-chartjs-2.js.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Création et envoi de rapports PDF sur les analyses de
                    comportements et du microbiote des utilisateurs.
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 11, textDecoration: "underline" }}>
                      Technologies utilisées:
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      : Typescript, REACT.js, Firebase, D3, HTML5, CSS3.
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, paddingTop: 20 }}>
                  IV/ Intégration d&apos;un éditeur de texte (TinyMCE, Draft.js)
                  pour un CMS "EventsBlue" créé pour la société "Quintys
                  Limited"
                </Text>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 11 }}>
                    • Intégration du module d&apos;édition de texte au format
                    HTML avec TinyMCE et Draft.JS
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Enregistrement des contenus avec AWS via l&apos;API
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 11, textDecoration: "underline" }}>
                      Technologies utilisées:
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      : REACT.js, HTML5, CSS3, TinyMCE, Draft.js
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, paddingTop: 20 }}>
                  V/ Intégration HTML / CSS / Javascript pour la Banque
                  Populaire d&apos;Investissement.
                </Text>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <Text style={{ fontSize: 11 }}>
                    • Création d&apos;une page de validation de CGU.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Intégrations de divers éléments pour les pages
                    d&apos;authentications.
                  </Text>
                  <Text style={{ fontSize: 11 }}>
                    • Intégration du module "Intl-Tel-Input" pour récupérer les
                    numéros de téléphones à l&apos;international
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 11, textDecoration: "underline" }}>
                      Technologies utilisées:
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      : JAVASCRIPT, HTML5, CSS3, Bootstrap
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 700, paddingTop: 20 }}>
                2020:
              </Text>
              <View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 15, paddingTop: 20 }}>
                    I/ Développement d’un site Wordpress pour un cabinet de
                    pédicures-podologues.
                  </Text>
                  <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ fontSize: 11 }}>• Création du design.</Text>
                    <Text style={{ fontSize: 11 }}>
                      • Installation du CMS Wordpress.
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      • Personnalisation du thème Wordpress.
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                      • Installation des différentes extensions (YoastSEO,
                      ContactForm, ...)
                    </Text>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 11, textDecoration: "underline" }}
                      >
                        Technologies utilisées:
                      </Text>
                      <Text style={{ fontSize: 11 }}>
                        : Wordpress, Photoshop, utilisation de "Page Builder",
                        YoastSEO, ...
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.col4}>
            <View
              style={{
                paddingVertical: 14,
                marginBottom: 10,
                backgroundColor: "#343A40",
                width: "100%",
                color: "white",
                textAlign: "center",
                borderRadius: "10%",
              }}
            >
              <Text style={{ fontSize: 23, fontWeight: 700 }}>Compétences</Text>
            </View>

            <Image
              style={{
                width: "auto",
                height: "auto",
              }}
              src={url}
            />
            <View
              style={{
                paddingVertical: 14,
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: "#343A40",
                width: "100%",
                color: "white",
                textAlign: "center",
                borderRadius: "10%",
              }}
            >
              <Text style={{ fontSize: 23, fontWeight: 700 }}>Langues</Text>
            </View>
            <View
              style={{
                border: "1px solid #d0d0cf",
                backgroundColor: "#f8f9fa",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 5,
                  fontSize: 13,
                  paddingVertical: 10,
                  borderBottom: "1px solid #d0d0cf",
                }}
              >
                Francais:{" "}
                <Text style={{ fontSize: 11 }}>langue maternelle</Text>
              </Text>
              <Text
                style={{
                  paddingHorizontal: 5,
                  fontSize: 13,
                  paddingVertical: 10,
                }}
              >
                Anglais:{" "}
                <Text style={{ fontSize: 11 }}>
                  bon niveau, manque de pratique
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default CVPDF;
