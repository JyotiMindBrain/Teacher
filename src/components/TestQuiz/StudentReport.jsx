import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const StudentReport = () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correct: "Paris",
            studentAnswer: "Paris",
        },
        {
            question: "What is 5 × 7?",
            options: ["25", "36", "12", "42"],
            correct: "36",
            studentAnswer: "25",
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correct: "Madrid",
            studentAnswer: "Paris",
        },
        {
            question: "What is 5 × 7?",
            options: ["25", "36", "12", "42"],
            correct: "36",
            studentAnswer: "36",
        },
    ];
    const [startPage, setStartPage] = useState(1);
    const totalPages = 10; // total pages you have

    const visiblePages = [startPage, startPage + 1, startPage + 2, startPage + 3].filter(
        (page) => page <= totalPages
    );

    const handleNext = () => {
        if (startPage < totalPages) {
            setStartPage(startPage + 1);
        }
    };

    const handlePrev = () => {
        if (startPage > 1) {
            setStartPage(startPage - 1);
        }
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Test/Quizzes</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <AiOutlineHome className="text-gray-600" />
                    <span>/</span>
                    <span>Test/Quizzes</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Test/Quizzes</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                <Link to="/tests">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                        Creating Test/Quizzes
                    </button>
                </Link>
                <Link to="/test_view">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                        View Test/Quizzes
                    </button>
                </Link>
            </div>
            {/* Student Info */}
            <div className="bg-white rounded-lg shadow p-4">
                <p className="text-lg font-semibold">Student: John Doe</p>
                <p className="text-gray-500">
                    Grade 10 - A | Submitted: Oct 15, 2023 10:45 AM
                </p>
            </div>

            {/* Questions & Answers */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-lg">Questions & Answers</h2>
                    <p className="text-sm text-gray-500">
                        Question 1 of 10 | Points: 5/5
                    </p>
                </div>

                {questions.map((q, idx) => (
                    <div
                        key={idx}
                        className={`border rounded-lg p-4 mb-4 ${q.correct === q.studentAnswer
                            ? "bg-green-50 border-green-300"
                            : "bg-red-50 border-red-300"
                            }`}
                    >
                        <p className="font-medium mb-3">{q.question}</p>
                        <div className="flex flex-wrap gap-4 mb-2">
                            {q.options.map((opt, i) => {
                                const isCorrect = opt === q.correct;
                                const isStudentAns = opt === q.studentAnswer;

                                let optionStyle =
                                    "px-3 py-2 border rounded-md min-w-[100px] text-center";
                                if (isCorrect) optionStyle += " border-green-500 bg-green-50";
                                if (isStudentAns && !isCorrect)
                                    optionStyle += " border-red-500 bg-red-50";
                                if (!isCorrect && !isStudentAns)
                                    optionStyle += " border-gray-300 bg-gray-50";

                                return (
                                    <div key={i} className={optionStyle}>
                                        {String.fromCharCode(65 + i)}) {opt}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 text-green-600">
                                <FaCheck /> Correct
                            </span>
                            <span className="flex items-center gap-1 text-red-500">
                                <FaTimes /> Incorrect
                            </span>
                        </div>

                        {/* Correct answer text */}
                        <p className="mt-2 text-sm text-green-600 font-medium">
                            Correct answer
                        </p>
                        {q.correct !== q.studentAnswer && (
                            <p className="text-sm text-red-500">
                                Student’s incorrect answer
                            </p>
                        )}
                    </div>
                ))}

                {/* Pagination */}
                <div className="flex justify-end items-center gap-2 mt-4">
                    <button
                        onClick={handlePrev}
                        // disabled={startPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {visiblePages.map((n, idx) => (
                        <button
                            key={idx}
                            className={`hover:bg-blue-800 hover:text-white px-3 py-1 rounded ${n === startPage
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 hover:bg-blue-800 hover:text-white"
                                }`}
                        >
                            {n}
                        </button>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={startPage >= totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Bottom Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Grade Summary */}
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="font-semibold mb-2">Grade Summary</p>
                    <p className="text-gray-500">85 out of 100 points</p>
                    <div className="flex items-center justify-between mt-2 mb-1 text-sm">
                        <span className="text-green-600">Correct</span>
                        <span className="text-red-500">Incorrect</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: "80%" }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                        <span>8</span>
                        <span>2</span>
                    </div>
                </div>

                {/* Overall Feedback */}
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="font-semibold mb-2">Overall Feedback</p>
                    <p className="text-sm text-gray-500 mb-2">General Comments</p>
                    <textarea
                        className="w-full border rounded-lg p-2 text-sm text-gray-600 mb-4"
                        rows="4"
                        defaultValue="Good work overall, but you could improve on the algebraic expressions section. Pay attention to the order of operations in your calculations."
                    ></textarea>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                        Send Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentReport;
