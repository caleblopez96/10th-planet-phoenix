const classDescription = [
  {
    className: "No-Gi Jiu-Jitsu",
    video1: "https://www.youtube.com/watch?v=PqZiShzsvCM",
    video2: "video-url-2",
    description1:
      "Jiu jitsu is a highly effective martial art that offers many benefits. One of the main benefits is that it is a great way to stay active and maintain a healthy lifestyle. The constant movement and physical activity required during training helps you improve your cardiovascular health, increase strength and flexibility, and maintain a healthy weight. Additionally, jiu jitsu training requires a high level of focus and concentration, which can help you improve your cognitive abilities and overall mental well-being. The discipline and hard work required to master the techniques of jiu jitsu can help adults develop a sense of accomplishment and pride in themselves, leading to improved social skills, stronger relationships, and a greater sense of self-worth. Learning jiu jitsu can also help teach you how to set and achieve goals, work hard towards a common objective, and persevere in the face of adversity. These skills can be beneficial in many areas of life, from work and personal relationships to financial management and personal growth. And of course, jiu jitsu is a great way to develop important self-defense skills.",
    description2:
      "The techniques taught in jiu jitsu are designed to neutralize an attacker, rather than cause harm, giving you the confidence and ability to protect yourself in potentially dangerous situations. 10th Planet Jiu Jitsu Costa Mesa offers classes for both kids and adults. Our academy is known for its focus on the 10th Planet Jiu Jitsu system formed by Eddie Bravo, which is a no-gi form of jiu jitsu that emphasizes the use of leverage and technique. The academy's experienced instructors are dedicated to helping students of all levels improve their jiu jitsu skills and reach their full potential. One of the key benefits of training at 10th Planet Costa Mesa is the sense of community. The academy encourages a supportive and friendly environment where students can interact with each other, share their experiences, and learn from one another. This can be a great way for our students to make friends and develop a sense of belonging.",
  },
];

export default function ClassDescription() {
  return (
    <section
      id="nogi-jiu-jitsu"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10"
    >
      <h2 className="text-2xl lg:text-3xl text-center mb-8">
        Kids No-Gi Grappling
      </h2>

      {classDescription.map((classItem, index) => (
        <div key={index} className="container mx-auto px-4">
          {/* first row */}
          <div className="flex flex-col md:flex-row mb-8 gap-6">
            {/* vid */}
            <div className="w-full md:w-1/2">
              <div className="bg-black p-1">
                <iframe
                  className="w-full h-[50vh]"
                  src="https://www.youtube.com/embed/PqZiShzsvCM?si=v0camAQ4kLcEJ_SQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4">
                {classItem.className}
              </h3>
              <p className="mb-4">{classItem.description1}</p>
            </div>
          </div>
          <div key={index} className="container mx-auto px-4"></div>
        </div>
      ))}
    </section>
  );
}
