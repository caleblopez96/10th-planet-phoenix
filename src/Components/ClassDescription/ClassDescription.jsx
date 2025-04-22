import eddie from "../../assets/test.jpg";
import test from "../../assets/test2.jpg";
import kidsLittleLobos from "../../assets/kidsLittleLobos.jpg";

const classDescription = [
  {
    className: "Fundamentals",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being.",
    img: eddie,
  },
  {
    className: "All Levels NoGi Jiu-Jitsu",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being.",
    img: test,
  },
  {
    className: "Kids Little Lobos",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being.",
    img: kidsLittleLobos,
  },
  {
    className: "Open Mat",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being.",
    img: eddie,
  },
];

export default function ClassDescription() {
  return (
    <section id="descriptions">
      <div className="container px-4 mb-6">
        <h2 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Class Descriptions
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 lg:mb-20 relative z-10">
          Explore our
          <span className="text-red-600"> Classes</span>
        </h3>
      </div>

      {classDescription.map((classItem, index) => (
        <div key={index} className="container mx-auto px-4 mb-24">
          <div
            className={`flex flex-col lg:flex-row gap-6 lg:gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* text */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div className="h-full flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-4">
                  {classItem.className}
                </h3>
                <p className="flex-grow text-lg">{classItem.description1}</p>
              </div>
            </div>

            {/* img */}
            <div className="flex-1 h-full">
              <div className="h-full">
                <img
                  src={classItem.img}
                  alt={classItem.className}
                  className="w-full object-cover rounded-sm max-h-75 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
