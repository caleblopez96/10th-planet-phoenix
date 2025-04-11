import eddie from "../../assets/test.jpg";
import test from "../../assets/test2.jpg";

const classDescription = [
  {
    className: "Fundamentals",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being. The discipline and hard work required to master the techniques of jiu jitsu can help adults develop a sense of accomplishment and pride in themselves, leading to improved social skills, stronger relationships, and a greater sense of self-worth.",
    img: { eddie },
  },
  {
    className: "All Levels NoGi Jiu-Jitsu",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being.",
    img: { test },
  },
];

export default function ClassDescription() {
  return (
    <section id="nogi-jiu-jitsu" className="">
      <h2 className="text-2xl lg:text-3xl text-center mb-8">
        Class Descriptions
      </h2>

      {classDescription.map((classItem, index) => (
        <div key={index} className="container mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4">{classItem.className}</h3>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4 flex-1">{classItem.description1}</p>
            </div>
            <div className="flex-1">
              <img
                src={eddie}
                alt="Eddie Bravo rolling with student"
                className="flex-1 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
