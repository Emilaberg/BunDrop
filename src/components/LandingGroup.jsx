import video from "../assets/videos/drone_banner_full.mp4";
import CTA_button from "./CTA_button";
function LandingGroup() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* video background */}
      <video
        className="w-full "
        src={video}
        muted
        loop
      ></video>
      <div className="absolute top-0 bg-gradient-to-br from-bgblue from-0% to-orange to-90% h-full w-full opacity-50"></div>
      {/* video background */}

      {/* Bun drop landing */}
      <div className="absolute text-center top-1/4 left-1/2 -translate-x-1/2">
        <h1 className="text-darkblue text-8xl font-extrabold">
          Bun <span className="text-orange">Drop</span>
        </h1>

        <h3 className="text-white text-2xl font-light pt-2">Food by Drone</h3>

        <div className="pt-12 flex justify-between">
          <CTA_button
            text={"läs mer"}
            borderColor={"orange"}
            w={150}
            h={42}
          />
          <CTA_button
            text="Beställ"
            bgColor="orange"
            w={150}
            h={42}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingGroup;
