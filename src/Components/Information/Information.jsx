import eddieB from "../../assets/HERO SM/20211025_200740.jpg";
import Button from "../Buttons/Button";

const Information = () => {
  return (
    <div className="py-8 ">
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="mb-8 relative">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-light">
            Where other systems cease to grow, 10th Planet's entire focus is to
            continue its own growth.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          <div className="lg:block relative overflow-hidden rounded-lg shadow-xl group">
            <div className="h-full w-full p-4 flex items-center justify-center grayscale">
              <img
                src={eddieB}
                alt="Eddie Bravo rolling with student"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="card p-8 rounded-lg shadow-xl">
            <p id="info" className="leading-relaxed mb-8">
              10th Planet Jiu Jitsu was created by Eddie Bravo under the
              tutelage of Jean Jacques Machado. It is a unique style of no gi
              Brazilian Jiu Jitsu which was made to work both inside the cage
              and on the sporting mats.
            </p>
            <p className="leading-relaxed mb-8">
              The intentionality behind the creation was to have an unorthodox
              style which could keep an opponent under constant control and in
              the threat of danger. The 10th Planet system was put to the test
              in Abu Dhabi 2003, and it succeeded masterfully by facilitating
              Eddie Bravo's victory over long time reigning champion Royler
              Gracie. Immediately following that victory, Eddie opened his own
              school to further the system.
            </p>

            <div className="flex gap-4 flex-col">
              <Button
                content="Learn More"
                backgroundColor="bg-gray-300"
                hover="hover:bg-gray-600"
                color="text-black"
                className="flex-1 w-full"
              />
              <Button
                content="Start Training"
                backgroundColor="bg-red-600"
                hover="hover:bg-red-700"
                color="text-white"
                className="flex-1 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
