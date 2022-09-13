import GlobalLayout from "../components/Layout";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeHeader from "../components/Home/Header";
import HomeSection1 from "../components/Home/Section1";
import HomeSection2 from "../components/Home/Section2";
import HomeSection3 from "../components/Home/Section3";
import HomeSection4 from "../components/Home/Section4";
import FAQ from "../components/Home/FAQ";

export default function Home() {
  return (
    <div>
      <GlobalLayout>
        <HomeHeader>
          <Navbar />
        </HomeHeader>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <FAQ />
        <Footer />
      </GlobalLayout>
    </div>
  );
}
