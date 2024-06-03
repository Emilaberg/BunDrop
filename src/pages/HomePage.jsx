import video from "../assets/videos/drone_banner_full.mp4";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <video
        src={video}
        autoPlay={true}
        muted
      ></video>
    </div>
  );
}

export default HomePage;
