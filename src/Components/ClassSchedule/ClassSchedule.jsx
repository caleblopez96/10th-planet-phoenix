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
  Friday: [
    {
      time: "6:00-7:00 PM",
      class: "All Levels Jiu-Jitsu",
      instructor: "John Botello (Availability Subject to Change)",
    },
  ],
  Saturday: [
    {
      time: "10:00-11:00 AM",
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
    <div id="schedule" className="w-full">
      {/* day tabs */}
      <div className="block lg:hidden w-full overflow-x-auto px-0.5">
        <ul className="flex gap-4 whitespace-nowrap w-max m-4">
          {Object.keys(schedules).map((day) => (
            <li
              key={day}
              className={`cursor-pointer px-4 py-2 rounded ${
                selectedDay === day ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>

      {/* spaced evenly on lg*/}
      <div className="hidden lg:block w-full py-6">
        <ul className="flex w-full px-2">
          {Object.keys(schedules).map((day) => (
            <li
              key={day}
              className={`hover:bg-gray-800 hover:text-white cursor-pointer flex-1 text-center px-2 py-2 mx-1 rounded ${
                selectedDay === day ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-semibold">{selectedDay}</h2>
        <ul className="mt-2 space-y-2">
          {schedules[selectedDay].map((session, index) => (
            <li key={index} className="p-2 bg-white shadow rounded">
              <p className="text-sm font-semibold">{session.time}</p>
              <p className="text-sm">{session.class}</p>
              {session.instructor && (
                <p className="text-sm text-gray-600">
                  Instructor: {session.instructor}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
