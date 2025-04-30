import Button from "../Buttons/Button";
import video from "../../assets/headervideo.mp4";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-gray-300 text-center overflow-hidden mt-0 hero"
    >
      <div className="w-full z-0 overflow-hidden absolute inset-0 bg-black">
        <video
          className="w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* content */}
      <div className="px-8 rounded-lg z-10 relative max-w-2xl lg:max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-10xl font-bold text-pretty drop-shadow-2xl leading-15 md:leading-20 lg:leading-26">
          10TH PLANET
          <br /> JIU-JITSU PHOENIX
        </h1>
        <h2 className="text-sm uppercase tracking-widest mb-2">
          No Gi. All Day. World Wide.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6 w-full max-w-md mx-auto">
          <div className="inline-flex flex-col lg:flex-row gap-4 justify-center w-full">
            <Button
              route={"/info"}
              content="Learn More"
              backgroundColor="bg-gray-300"
              hover="hover:bg-red-600 hover:text-white"
              color="text-black"
              className="h-12 text-lg px-6 w-full text-center"
            />

            <Button
              content="Start Training"
              backgroundColor="bg-red-600"
              hover="hover:bg-gray-300 hover:text-black"
              color="text-white"
              className="h-12 text-lg px-6 w-full text-center"
              route={"/contact"}
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="red"
        className="absolute bottom-25 lg:bottom-30 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
      </svg>
    </section>
  );
};

export default Hero;
