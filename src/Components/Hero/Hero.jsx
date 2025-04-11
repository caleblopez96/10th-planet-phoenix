import Button from "../Buttons/Button";
import video from "../../assets/headervideo.mp4";
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-gray-300 text-center overflow-hidden mt-0 pt-16">
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
      <div className="p-8 rounded-lg z-10 relative max-w-2xl lg:max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-10xl font-bold text-pretty drop-shadow-2xl leading-15 md:leading-20 lg:leading-26">
          10TH PLANET
          <br /> JIU-JITSU PHOENIX
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6 w-full max-w-md mx-auto">
          <div className="inline-flex flex-col lg:flex-row gap-4 justify-center w-full">
            <Button
              route={"/info"}
              content="Learn More"
              backgroundColor="bg-gray-300"
              hover="hover:bg-red-700"
              color="text-black"
              className="h-12 text-lg px-6 w-full"
            />

            <Button
              content="Start Training"
              backgroundColor="bg-red-600"
              hover="hover:bg-red-700"
              color="text-white"
              className="h-12 text-lg px-6 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
