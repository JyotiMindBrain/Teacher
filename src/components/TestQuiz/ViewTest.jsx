// import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function ViewTest() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Test/Quizzes</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <AiOutlineHome className="text-gray-600" />
                    <span>/</span>
                    <span>Test/Quizzes</span>
                    <span>/</span>
                    <span className="text-blue-700 font-semibold">Test/Quizzes</span>
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
        </div>
    );
}
export default ViewTest;
