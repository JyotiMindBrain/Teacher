import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPaperclip } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const AssignmentSubmission = () => {
  const submissions = Array(5).fill({
    title: "Research Paper on Climate Change",
    name: "John Doe",
    date: "Jul 21, 2025, 12:31 PM",
    grade: "42/50",
    dueDate: "Jul 30, 2025, 03:15 PM",
    fileName: "Climate Change Paper.docx",
    fileSize: "341.8 KB",
    comments: "I focused on the impact on coral reefs as discussed in class.",
  });

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const totalRows = 97;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 space-y-2 md:space-y-0">
        <h1 className="text-lg md:text-xl font-bold text-gray-500">Assignment</h1>
        <div className="flex items-center text-xs md:text-sm text-gray-600 space-x-2">
          <AiOutlineHome className="text-gray-600" />
          <span>/</span>
          <span>Assignment</span>
          <span>/</span>
          <span className="text-purple-600 font-semibold">Assignment</span>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700">
              MATH301-Linear Algebra
            </h3>
            <p className={`text-xs font-medium mb-2 ${index === 1 ? "text-red-600" : "text-green-600"}`}>
              {index === 1 ? "Due in 2 days" : "Due in 5 days"}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`${index === 1 ? "bg-red-500" : "bg-green-500"} h-2 rounded-full`}
                style={{ width: index === 1 ? "40%" : "65%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm">
              Submissions {index === 1 ? "8/20" : "13/20"}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Link to="/classroom/assignments">
          <button className="w-full md:w-auto px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">
            Create Assignment
          </button>
        </Link>
        <Link to="/classroom/assignments_view">
          <button className="w-full md:w-auto px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">
            View Assignments
          </button>
        </Link>
        <Link to="/classroom/assignments_submission">
          <button className="w-full md:w-auto px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800">
            Student Submissions
          </button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg text-gray-600">
          <option>Research Paper on Climate Change</option>
        </select>
        <select className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg text-gray-600">
          <option>All Statuses</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white text-left text-xs md:text-sm">
              <th className="py-3 px-2 md:px-4 font-semibold">TITLE</th>
              <th className="py-3 px-2 md:px-4 font-semibold">SUBMITTED NAME</th>
              <th className="py-3 px-2 md:px-4 font-semibold">SUBMITTED DATE</th>
              <th className="py-3 px-2 md:px-4 font-semibold">GRADE</th>
              <th className="py-3 px-2 md:px-4 font-semibold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-3 px-2 md:px-4 text-xs md:text-sm text-gray-700">
                  {submission.title}
                </td>
                <td className="py-3 px-2 md:px-4 text-xs md:text-sm text-gray-700">
                  {submission.name}
                </td>
                <td className="py-3 px-2 md:px-4 text-xs md:text-sm text-gray-700">
                  {submission.date}
                </td>
                <td className="py-3 px-2 md:px-4 text-xs md:text-sm text-gray-700">
                  {submission.grade}
                </td>
                <td className="py-3 px-2 md:px-4">
                  <button
                    onClick={() => setSelectedSubmission(submission)}
                    className="w-full md:w-auto px-4 py-1 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 text-xs md:text-sm text-gray-600">
        <p>1-05 of {totalRows}</p>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value={5}>05</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`p-2 rounded-full ${currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-purple-600 hover:bg-purple-100"
                }`}
            >
              <FaChevronLeft />
            </button>
            <span>{currentPage}/{totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`p-2 rounded-full ${currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-purple-600 hover:bg-purple-100"
                }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={() => setSelectedSubmission(null)} // close on overlay click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl mx-4 p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
          >
            {/* Title */}
            <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {selectedSubmission.title} - {selectedSubmission.name}
            </h2>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Submitted On</p>
                <p className="text-gray-600 text-sm">{selectedSubmission.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Assignment Due Date</p>
                <p className="text-gray-600 text-sm">{selectedSubmission.dueDate}</p>
              </div>
            </div>

            {/* Submitted Files */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Submitted Files</p>
              <div className="flex flex-wrap items-center p-2 border rounded-lg text-blue-600 hover:underline cursor-pointer">
                <FaPaperclip className="mr-2 text-gray-600" />
                <span className="truncate">{selectedSubmission.fileName}</span>
                <span className="ml-2 text-gray-500 text-xs">({selectedSubmission.fileSize})</span>
              </div>
            </div>

            {/* Student Comments */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Student Comments</p>
              <textarea
                readOnly
                value={selectedSubmission.comments}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-gray-50 resize-none"
              ></textarea>
            </div>

            {/* Grade */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Grade</p>
              <select className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-700">
                <option>Select grade</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            {/* Feedback */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Feedback</p>
              <textarea
                placeholder="Please write a feedback"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-700 resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
              <button className="w-full md:w-auto px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800">
                Send Feedback
              </button>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="w-full md:w-auto px-5 py-2 bg-white border border-red-400 text-red-500 rounded-lg shadow hover:bg-red-100"
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

export default AssignmentSubmission;
