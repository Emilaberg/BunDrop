// COMPONENTS
import LandingGroup from "../components/LandingGroup";
import Partners from "../components/Partners";
import CTA_container from "../components/CTA_container";
import Trending from "../components/Trending";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="bg-midnightblack">
        <LandingGroup />

        <div className="min-h-screen pt-32 pb-96 bg-[url(../src/assets/images/backgrounds/shadows_blobs_1.svg)] bg-no-repeat bg-cover bg-center">
          <Partners />

          <CTA_container />

          <Trending />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
