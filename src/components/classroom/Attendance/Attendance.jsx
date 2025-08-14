import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Attendance = () => {
    const students = Array(8).fill({ rollNo: 1, name: "John Doe" });
    const [attendance, setAttendance] = useState(
        students.map(() => "Present")
    );

    const toggleAttendance = (index, status) => {
        const updated = [...attendance];
        updated[index] = status;
        setAttendance(updated);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Attendance</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <AiOutlineHome className="text-gray-600" />
                    <span>/</span>
                    <span>Attendance</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Attendance</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
                <Link to="/classroom/attendance">
                    <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 hover:text-white">
                        Mark Attendance
                    </button>
                </Link>
                <Link to="/classroom/record">
                    <button className="px-5 py-2 bg-white text-white-700 border border-gray-300 rounded-lg shadow hover:bg-blue-800 hover:text-white">
                        View Records
                    </button>
                </Link>
            </div>

            {/* Unified Layout Card */}
            <div className="bg-white shadow rounded-lg p-4 md:p-6">
                {/* Filters */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Mark Attendance
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <input
                            type="date"
                            className="p-3 border border-gray-300 rounded-lg text-gray-600 w-full md:w-auto flex-1"
                            placeholder="dd-mm-yyyy"
                        />
                        <select className="p-3 border border-gray-300 rounded-lg text-gray-600 w-full md:w-auto flex-1">
                            <option>Class - 10</option>
                        </select>
                        <select className="p-3 border border-gray-300 rounded-lg text-gray-600 w-full md:w-auto flex-1">
                            <option>Section - A</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-700 text-white text-sm">
                                <th className="py-3 px-6 font-semibold text-left w-1/6">ROLL NO.</th>
                                <th className="py-3 px-6 font-semibold text-center w-2/6">STUDENT NAME</th>
                                <th className="py-3 px-6 font-semibold">
                                    <div className="flex justify-end pr-16">STATUS</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    {/* Roll No - Left */}
                                    <td className="py-3 px-6 text-sm text-gray-700 text-left">
                                        {student.rollNo}
                                    </td>

                                    {/* Student Name - Center */}
                                    <td className="py-3 px-6 text-sm text-gray-700 text-center">
                                        {student.name}
                                    </td>

                                    {/* Status - Right */}
                                    <td className="py-3 px-6 text-sm text-gray-700 text-right">
                                        <div className="flex justify-end gap-4">
                                            <button
                                                onClick={() => toggleAttendance(idx, "Present")}
                                                className={`flex items-center px-4 py-2 rounded-md border text-sm font-medium transition ${attendance[idx] === "Present"
                                                    ? "bg-green-50 border-green-500 text-green-600"
                                                    : "bg-white border-gray-300 text-gray-600"
                                                    }`}
                                            >
                                                <AiOutlineCheck className="mr-1" /> Present
                                            </button>
                                            <button
                                                onClick={() => toggleAttendance(idx, "Absent")}
                                                className={`flex items-center px-4 py-2 rounded-md border text-sm font-medium transition ${attendance[idx] === "Absent"
                                                    ? "bg-red-50 border-red-500 text-red-600"
                                                    : "bg-white border-gray-300 text-gray-600"
                                                    }`}
                                            >
                                                <AiOutlineClose className="mr-1" /> Absent
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800">
                        Submit Attendance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
