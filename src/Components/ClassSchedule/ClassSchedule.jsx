import { useState } from "react";

const schedules = {
  Monday: [
    {
      time: "10:00-11:00 AM",
      class: "10th Planet Jiu-Jitsu",
      instructor: "John Botello",
    },
    {
      time: "6:00-7:00 PM",
      class: "Fundamentals",
      instructor: "Erik Anderson",
    },
    {
      time: "7:00-8:30 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello",
    },
  ],
  Tuesday: [
    {
      time: "5:30-6:30 AM",
      class: "10th Planet Jiu-Jitsu",
      instructor: "Billy Phillips",
    },
    {
      time: "5:00-6:00 PM",
      class: "Kids Little Lobos Jiu-Jitsu",
      instructor: "John Botello",
    },
    {
      time: "6:00-7:00 PM",
      class: "Jiu Jitsu 101 (Teens/Adults)",
      instructor: "John Botello",
    },
    {
      time: "7:00-8:30 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello",
    },
  ],
  Wednesday: [
    {
      time: "10:00-11:00 AM",
      class: "10th Planet Jiu-Jitsu",
      instructor: "John Botello",
    },
    {
      time: "6:00-7:00 PM",
      class: "Fundamentals",
      instructor: "Erik Anderson",
    },
    {
      time: "7:00-8:30 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello",
    },
  ],
  Thursday: [
    {
      time: "5:30 - 6:30 AM",
      class: "10th Planet Jiu-Jitsu",
      instructor: "Billy Phillips",
    },
    {
      time: "5:00 - 6:00 PM",
      class: "Kids Little Lobos Jiu-Jitsu",
      instructor: "John Botello",
    },
    {
      time: "6:00 - 7:00 PM",
      class: "Jiu Jitsu 101 (Teens/Adults)",
      instructor: "John Botello",
    },
    {
      time: "7:00 - 8:30 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello",
    },
  ],
  Friday: [
    {
      time: "6:00 - 7:00 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello (Availability Subject to Change)",
    },
  ],
  Saturday: [
    {
      time: "10:00 - 11:00 AM",
      class: "Kids Little Lobos Jiu-Jitsu",
      instructor: "John Botello",
    },
    { time: "11:00 AM - 1:00 PM", class: "Open Mat", instructor: "N/A" },
  ],
  Sunday: [{ time: "Closed", class: "" }],
};

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div id="schedule" className="w-full my-12">
      <div className="my-6 px-4">
        <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          10th Planet Phoenix
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Class Schedule
        </h2>
      </div>

      {/* day tabs */}
      <div className="block lg:hidden w-full overflow-x-auto px-0.5">
        <ul className="flex gap-4 whitespace-nowrap w-max m-4">
          {Object.keys(schedules).map((day) => (
            <li
              key={day}
              className={`cursor-pointer px-4 py-2 rounded ${
                selectedDay === day
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
      {/* spaced evenly on lg*/}
      <div className="hidden lg:block w-full">
        <ul className="flex w-full px-2">
          {Object.keys(schedules).map((day) => (
            <li
              key={day}
              className={`hover:bg-red-600 hover:text-white cursor-pointer flex-1 text-center px-2 py-2 mx-1 rounded ${
                selectedDay === day
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>

      <div className=" p-4 min-h-[450px]">
        <h2 className="text-lg font-semibold">{selectedDay}</h2>
        <ul className="mt-2 space-y-2">
          {schedules[selectedDay].map((session, index) => (
            <li key={index} className="text-lg p-6 shadow-2xl rounded card">
              <p className=" font-semibold">{session.time}</p>
              <p className="">{session.class}</p>
              {session.instructor && (
                <p className="text-sm">Instructor: {session.instructor}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
