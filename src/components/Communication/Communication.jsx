import React, { useRef, useState } from "react";
import { FaPaperclip, FaPlus, FaUpload } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Communication = () => {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        subject: "",
        chapter: "",
        title: "",
        dueDate: "",
        description: "",
        guidelines: "",
        file: null,
    });
    const messages = [
        { initials: "JD", name: "John Doe", time: "12m", text: "Question about tomorrow's assignment deadline" },
        { initials: "PS", name: "Parent - Sarah Johnson", time: "24m", text: "Meeting request about student progress" },
        { initials: "AM", name: "Admin - principle", time: "Yesterday", text: "Staff meeting reminder for friday" },
        { initials: "ES", name: "Class-10 Group", time: "2 days ago", text: "Clarification needed on chapter 5 exercises" }
    ];

    const handleAttachmentClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const fileInputRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Communication</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <AiOutlineHome className="text-gray-600" />
                    <span>/</span>
                    <span>Communication</span>
                    <span>/</span>
                    <span className="text-blue-700 font-semibold">Communication</span>
                </div>
            </div>
            <div className="flex gap-2 mb-6">
                <Link to="/communication">
                    <button className="bg-blue-700 text-white border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900 hover:text-white">
                        Messages
                    </button>
                </Link>

                <Link to="/discussion" className="bg-white text-gray-700 border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900  hover:text-white">
                    Discussion Forum
                </Link>
            </div>
            <div className="flex h-screen font-sans bg-[#f9f9fb]">
                <div className="w-[300px] bg-white border-r shadow-md">
                    <div className="px-6 py-2 border-b">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded-full text-base shadow hover:bg-blue-900 transition duration-200"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="px-4 mt-2">
                        <input
                            type="text"
                            placeholder="Search messages"
                            className="w-full px-3 py-2 mb-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />
                        {messages.map((msg, idx) => (
                            <div key={idx} className="flex gap-3 px-3 py-3 rounded-md cursor-pointer hover:bg-blue-100">
                                <div className="w-9 h-9 rounded-full bg-blue-300 text-[#21005D] flex items-center justify-center font-semibold">
                                    {msg.initials}
                                </div>
                                <div className="flex flex-col text-sm">
                                    <div className="font-medium text-[#1C1B1F]">{msg.name}</div>
                                    <div className="text-gray-500 text-xs">{msg.text}</div>
                                </div>
                                <div className="ml-auto text-xs text-gray-400">{msg.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 bg-white p-6">
                    <div className="mb-6">
                        <div className="flex items-center gap-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-10 h-10 rounded-full" />
                            <div>
                                <div className="text-lg font-semibold text-[#1C1B1F]">John Doe - Math 101</div>
                                <div className="text-sm text-gray-500">Student</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-[#1C1B1F] leading-6">
                        <p className="text-gray-500 mb-2">Today, 10:15 AM</p>
                        <p>Hello Professor Smith,</p>
                        <p className="mt-2">
                            I was reviewing the assignment for tomorrow and had a question about problem. The instructions mention using the quadratic formula, but I'm not sure how to apply it to this specific scenario.
                        </p>
                        <p className="mt-2">Could you please clarify the approach for this problem?</p>
                        <p className="mt-2">Thank you,</p>
                        <p>John</p>

                        <div className="flex items-center gap-2 mt-4 w-max bg-blue-100 text-[#1D192B] px-3 py-2 rounded-full">
                            <FaPaperclip />
                            <span className="text-sm font-medium">assignment_question.pdf</span>
                        </div>
                    </div>

                    <div className="mt-5 border-t pt-4">
                        <p className="text-sm text-gray-600 mb-2">Reply to John</p>
                        <div className="flex items-center gap-3">
                            <button onClick={handleAttachmentClick} className="text-[#1C1B1F] hover:text-blue-700">
                                <FaPaperclip size={18} />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={(e) => console.log("Attached file:", e.target.files[0])}
                            />
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Type a message here..."
                                    className="w-full pl-4 pr-10 py-3 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700">
                                    <IoMdSend size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-[90%] sm:w-[500px] max-w-full p-4 sm:p-6 max-h-screen overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">New Message</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">To</label>
                                <select className="w-full border rounded-md px-3 py-2 mt-1">
                                    <option>Select recipient...</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Subject..."
                                    className="w-full border rounded-md px-3 py-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    placeholder="Message"
                                    className="w-full border rounded-md px-3 py-2 h-24 mt-1"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Attachments</label>
                                <div className="border border-dashed border-gray-400 p-4 rounded flex items-center justify-center text-center text-gray-500 cursor-pointer hover:bg-gray-100">
                                    <label className="w-full h-full flex flex-col items-center justify-center">
                                        <input type="file" onChange={handleFileChange} className="hidden" />
                                        <FaUpload className="text-blue-700 text-xl mb-1" />
                                        <p>Drag & drop files here or click to browse</p>
                                        <small className="text-gray-400">Supports PDF, DOCX, PPTX, MP4, JPG</small>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                className="bg-red-100 text-red-500 border border-red-500 px-4 py-2 rounded-md"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Communication;