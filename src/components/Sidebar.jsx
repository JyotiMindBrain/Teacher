import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import {
    FaBook,
    FaClipboardList,
    FaGraduationCap,
    FaCalendarAlt,
    FaChevronDown,
    FaChevronUp,
    FaTimes,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/mindvex.png";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [classroomOpen, setClassroomOpen] = useState(false);

    const menuItems = [
        { label: "Materials", to: "/classroom/materials" },
        { label: "Assignments", to: "/classroom/assignments" },
        { label: "Attendance", to: "/classroom/attendance" },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed md:static top-0 left-0 h-full bg-white border-r w-70 p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:translate-x-0 z-40`}
            >
                {/* Logo and close button */}
                <div className="flex items-center justify-between mb-19">
                    <img src={logo} alt="Mindvex LMS" className="w-40 h-12 object-contain" />
                    <button
                        className="md:hidden text-2xl text-gray-600 hover:text-red-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Sidebar menu */}
                <ul className="space-y-2 text-gray-600 mt-10">
                    <li>
                        <Link
                            to="/dashboard"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <MdDashboard size={20} /> Dashboard
                        </Link>
                    </li>

                    {/* Classroom dropdown */}
                    <li>
                        <div
                            className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-blue-50 hover:text-blue-700"
                            onClick={() => setClassroomOpen(!classroomOpen)}
                        >
                            <div className="flex items-center gap-2">
                                <FaBook size={20} />
                                <span>Classroom Management</span>
                            </div>
                            <div className="ml-2">
                                {classroomOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>

                        {classroomOpen && (
                            <ul>
                                {menuItems.map((item, index) => (
                                    <li key={item.to} className="ml-6 mt-2 border-l pl-5 space-y-4 text-sm relative">
                                        {/* Blue dot for active item */}
                                        {currentPath === item.to && (
                                            <span className="absolute left-[-11px] top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full z-10" />
                                        )}

                                        {/* Vertical connector lines */}
                                        {index !== menuItems.length - 1 && (
                                            <span className="absolute left-[-10px] top-1/2 h-full w-px bg-gray-200 translate-y-0 hover:bg-blue-50 hover:text-blue-700" />
                                        )}

                                        <Link
                                            to={item.to}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-2 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 ${currentPath === item.to
                                                    ? "text-blue-700 font-semibold"
                                                    : "text-gray-600 hover:text-blue-700"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        )}
                    </li>
                    {/* Other menu items */}
                    <li>
                        <Link
                            to="/tests"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaClipboardList size={20} /> Test/Quizzes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/communication"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaGraduationCap size={20} /> Communication
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/analytics"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaCalendarAlt size={20}/> Performance Analytics
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/syllabus"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaBookOpen size={20} title="Syllabus" /> My Syllabus
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
