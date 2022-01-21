import { useEffect, useState } from "react";
import { pdf, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import * as htmlToImage from "html-to-image";
import CVPDF from "../components/CV/PDF";

const CV = () => {
  const [isClient, setIsClient] = useState(false);
  const [url, setUrl] = useState();

  const skills = [
    { name: "Javascript", percent: 100 },
    { name: "React.js", percent: 100 },
    { name: "Next.js", percent: 95 },
    { name: "Typescript", percent: 80 },
    { name: "Node.js", percent: 90 },
    { name: "API Rest", percent: 100 },
    { name: "TDD", percent: 50 },
    { name: "Redux", percent: 85 },
    { name: "AWS", percent: 50 },
    { name: "MongoDB", percent: 90 },
    { name: "HTML 5", percent: 98 },
    { name: "CSS 3", percent: 98 },
    { name: "Bootstrap v5", percent: 95 },
    { name: "Github", percent: 90 },
    { name: "Wordpress", percent: 90 },
    { name: "Photoshop", percent: 80 },
  ];

  const getUrl = () => {
    htmlToImage
      .toBlob(document.getElementById("progress-section"))
      .then(function (blob) {
        const urlBlob = URL.createObjectURL(blob);
        setUrl(urlBlob);
      });
  };
  const getProgressBars = () => {
    return (
      <div id={`progress-section`} style={{ width: "15%" }}>
        {skills.map((item, id) => {
          return (
            <div key={id} className="pdf-card px-2 py-2 ">
              <p className="mb-0">{item.name}</p>
              <div className="progress bg-secondary">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  aria-valuenow={item.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${item.percent}%`, height: 15 }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  useEffect(() => {
    getUrl();
    setIsClient(true);
  }, []);

  return (
    <div>
      {getProgressBars()}
      {url && isClient && (
        <PDFViewer
          showToolbar={true}
          width={"100%"}
          style={{ minHeight: "100vh" }}
        >
          <CVPDF url={url} />
        </PDFViewer>
      )}
    </div>
  );
};
export default CV;
