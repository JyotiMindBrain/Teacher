import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const AssignmentDashboard = () => {
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const assignments = [
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
        // duplicate entries for demo
        {
            title: "Research Paper on Climate Change",
            description: "Write a 5-page research paper on the impact...",
            dueDate: "Jul 30, 2025, 03:15 PM",
            class: "10",
            section: "Section A",
            subject: "Research Paper on Climate Change",
            chapter: "Chapter - 5",
            assessment: "Write a 5-page research paper on the impact..",
            descriptionFull: "Use APA format. Include at least 5 scholarly references.",
            guidelines: "submission guidelines",
            fileName: "Quadratic Equations Notes.pdf",
            fileSize: "2.5MB",
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Assignment</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <AiOutlineHome className="text-gray-600" />
                    <span>/</span>
                    <span>Assignment</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Assignment</span>
                </div>
            </div>

            {/* Progress Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700">
                        MATH301-Linear Algebra
                    </h3>
                    <p className="text-xs text-green-600 font-medium mb-2">
                        Due in 5 days
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-gray-600 text-sm">Submissions 13/20</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700">
                        MATH301-Linear Algebra
                    </h3>
                    <p className="text-xs text-red-600 font-medium mb-2">
                        Due in 2 days
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <p className="text-gray-600 text-sm">Submissions 8/20</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700">
                        MATH301-Linear Algebra
                    </h3>
                    <p className="text-xs text-green-600 font-medium mb-2">
                        Due in 5 days
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-gray-600 text-sm">Submissions 13/20</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
                <Link to="/classroom/assignments">
                    <button className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">
                        Create Assignment
                    </button>
                </Link>
                <Link to="/classroom/assignments_view">
                    <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-700">
                        View Assignments
                    </button>
                </Link>
                <Link to="/classroom/assignments_submission">
                    <button className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">
                        Student Submissions
                    </button>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="bg-white shadow rounded-md p-1 flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search assignments..."
                    className="flex-1 p-2 rounded-lg outline-none text-sm"
                />
                <button className="ml-2 p-3 bg-blue-700 text-white rounded-lg hover:bg-indigo-700">
                    <FaSearch />
                </button>
            </div>

            {/* Assignment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments.map((assignment, index) => (
                    <div
                        key={index}
                        className="bg-white shadow rounded-lg p-5 hover:shadow-lg transition-shadow"
                    >
                        <h4 className="text-base font-semibold text-gray-800 mb-2">
                            {assignment.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">{assignment.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <FaCalendarAlt className="mr-2 text-gray-400" />
                            <span>Due: {assignment.dueDate}</span>
                        </div>
                        <button
                            onClick={() => setSelectedAssignment(assignment)}
                            className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-indigo-700"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedAssignment && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                            {selectedAssignment.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Class</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.class}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Class Section</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.section}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.subject}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Chapter</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.chapter}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Assessment Title</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.assessment}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Due date</label>
                                <input
                                    type="text"
                                    value={selectedAssignment.dueDate}
                                    readOnly
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    readOnly
                                    value={selectedAssignment.descriptionFull}
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg h-20 text-sm"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Submission guidelines
                                </label>
                                <textarea
                                    readOnly
                                    value={selectedAssignment.guidelines}
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg h-16 text-sm"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Upload File</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center mt-1">
                                    <FaFilePdf className="text-red-500 text-3xl mb-2" />
                                    <p className="text-gray-700 text-sm">{selectedAssignment.fileName}</p>
                                    <p className="text-xs text-gray-500">{selectedAssignment.fileSize}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
                            <Link
                                to="/classroom/assignments_submission"
                            >
                                <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 w-full md:w-auto">
                                    View Submissions
                                </button>
                            </Link>
                            <button
                                onClick={() => setSelectedAssignment(null)}
                                className="px-5 py-2 bg-white border border-red-400 text-red-500 rounded-lg shadow hover:bg-red-100 w-full md:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AssignmentDashboard;
