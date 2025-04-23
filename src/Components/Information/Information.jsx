import eddieB from "../../assets/HERO SM/20211025_200740.jpg";
import Button from "../Buttons/Button";

const Information = () => {
  return (
    <section id="information" className="my-12">
      <div className="container px-4 mb-6">
        <h2 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          10th Planet's entire focus:
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Grow the Sport of
          <span className="text-red-600"> Jiu Jitsu</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        <div className="lg:block relative overflow-hidden rounded-lg shadow-xl group">
          <div className="h-full w-full p-4 flex items-center justify-center grayscale card">
            <img
              src={eddieB}
              alt="Eddie Bravo rolling with student"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        <div className="card p-8 rounded-lg shadow-xl">
          <h3 className="pb-8">Mastering the System</h3>
          <p id="info" className="leading-relaxed mb-8">
            10th Planet Jiu Jitsu was created by Eddie Bravo under the tutelage
            of Jean Jacques Machado. It is a unique style of no gi Brazilian Jiu
            Jitsu which was made to work both inside the cage and on the
            sporting mats.
          </p>
          <p className="leading-relaxed mb-8">
            The intentionality behind the creation was to have an unorthodox
            style which could keep an opponent under constant control and in the
            threat of danger. The 10th Planet system was put to the test in Abu
            Dhabi 2003, and it succeeded masterfully by facilitating Eddie
            Bravo's victory over long time reigning champion Royler Gracie.
            Immediately following that victory, Eddie opened his own school to
            further the system.
          </p>

          <div className="flex gap-4 flex-col">
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
    </section>
  );
};

export default Information;
