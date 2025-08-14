import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const Syllabus = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    "Chapter 1: Introduction to Programming",
    "Chapter 2: Object-Oriented Programming",
    "Chapter 3: Web Development Basics",
    "Chapter 4: Advanced Java Concepts",
  ];

  const chapterDetails = [
    {
      title: "Introduction to programming",
      semester: "Semester 1 • First Semester • August – December 2023",
      topics: ["Programming basics", "Variables and data types", "Control structures"],
      schedule: {
        label: "Seam Dates",
        date: "January 10 – August 14, 2023",
      },
      assignments: [
        "Read Chapter 1 and write 1-page reflection",
        "Complete student information survey",
        "Watch introductory video and post response",
      ],
      tests: ["Chapter – 2", "Chapter – 3", "Chapter – 4"],
    },
    {
      title: "Object-Oriented Programming",
      semester: "Semester 1 • Second Semester • January – May 2024",
      topics: ["Classes and Objects", "Inheritance", "Polymorphism", "Encapsulation"],
      schedule: {
        label: "Course Timeline",
        date: "January 15 – May 30, 2024",
      },
      assignments: [
        "Design a class diagram for a real-world application",
        "Implement inheritance in Java",
        "Create a small OOP-based project",
      ],
      tests: ["Chapter – 1", "Chapter – 3", "Chapter – 4"],
    },
    {
      title: "Web Development Basics",
      semester: "Semester 2 • First Half • June – August 2024",
      topics: ["HTML & CSS", "JavaScript Basics", "Responsive Design", "DOM Manipulation"],
      schedule: {
        label: "Bootcamp Dates",
        date: "June 1 – August 15, 2024",
      },
      assignments: [
        "Create a personal portfolio website",
        "Implement a responsive layout",
        "Build an interactive form",
      ],
      tests: ["Chapter – 1", "Chapter – 2", "Chapter – 4"],
    },
    {
      title: "Advanced Java Concepts",
      semester: "Semester 2 • Second Half • September – December 2024",
      topics: ["Multithreading", "Collections Framework", "JDBC", "Lambda Expressions"],
      schedule: {
        label: "Session Period",
        date: "September 5 – December 20, 2024",
      },
      assignments: [
        "Write a multithreaded file processor",
        "Build a database app using JDBC",
        "Use streams to process collections",
      ],
      tests: ["Chapter – 1", "Chapter – 2", "Chapter – 3"],
    },
  ];

  const current = chapterDetails[activeChapter];

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-500">My Syllabus</h1>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <AiOutlineHome className="text-gray-600" />
          <span>/</span>
          <span>My Syllabus</span>
          <span>/</span>
          <span className="text-blue-700 font-semibold">My Syllabus</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white border-r">
          <div className="p-4 border-b text-xl font-semibold">Syllabus</div>
          {chapters.map((chapter, index) => (
            <div
              key={index}
              onClick={() => setActiveChapter(index)}
              className={`cursor-pointer px-4 py-3 text-sm font-medium ${
                activeChapter === index
                  ? "bg-gray-100 border-l-4 border-indigo-500 text-indigo-700"
                  : "hover:bg-gray-50"
              }`}
            >
              {chapter}
            </div>
          ))}
        </div>

        {/* Chapter Details */}
        <div className="w-full md:w-3/4 p-6">
          <h2 className="text-2xl font-semibold mb-2">{current.title}</h2>
          <p className="text-gray-600 mb-6">{current.semester}</p>

          <div className="mb-6">
            <h3 className="text-purple-700 font-semibold mb-2">Topics</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {current.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-blue-600 font-semibold mb-2">Schedule</h3>
            <p>
              <strong>{current.schedule.label}</strong> <br />
              {current.schedule.date}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-purple-700 font-semibold mb-2">Assignments</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {current.assignments.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-blue-600 font-semibold mb-2">Test</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {current.tests.map((test, idx) => (
                <li key={idx}>{test}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
