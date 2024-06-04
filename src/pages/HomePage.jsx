// COMPONENTS
import LandingGroup from "../components/LandingGroup";
import Partners from "../components/Partners";
import CTA_container from "../components/CTA_container";

function HomePage() {
  return (
    <div className="bg-midnightblack">
      <LandingGroup />
      <div className="min-h-screen pt-32 text-center bg-[url(../src/assets/images/backgrounds/shadows_blobs_1.svg)] bg-no-repeat bg-cover bg-center">
        <Partners />

        <CTA_container />
      </div>
    </div>
  );
}

export default HomePage;
