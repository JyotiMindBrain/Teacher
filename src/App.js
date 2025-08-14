import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MaterialUpload from "./components/classroom/MaterialUpload";
import ViewMaterials from "./components/classroom/ViewMaterials";
import Assignment from "./components/classroom/Assignment/Assignment";
import AssignmentDashboard from "./components/classroom/Assignment/AssignmentDashboard";
import AssignmentSubmission from "./components/classroom/Assignment/AssignmentSubmission";
import Attendance from "./components/classroom/Attendance/Attendance";
import AttendanceRecords from "./components/classroom/Attendance/AttendanceRecords";
import Syllabus from "./components/Mysyllabus/Syllabus";
import PerformanceAnalytics from "./components/Performance/PerformanceAnalytics";
import PerformanceAnalyticsChart from "./components/Performance/PerformanceAnalyticsChart";
import Communication from "./components/Communication/Communication";
import DiscussionForum from "./components/Communication/DiscussionForum";
import CreateTestQuiz from "./components/TestQuiz/CreateTestQuiz";
import ViewTest from "./components/TestQuiz/ViewTest";
import StudentReport from "./components/TestQuiz/StudentReport";
import LeaveRequestTable from "./components/classroom/Attendance/LeaveRequestTable";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <Router>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/classroom/materials" element={<MaterialUpload />} />
            <Route path="/materials/view" element={<ViewMaterials />} />
            <Route path="/classroom/assignments" element={<Assignment />} />
            <Route path="/classroom/assignments_view" element={<AssignmentDashboard />} />
            <Route path="/classroom/assignments_submission" element={<AssignmentSubmission />} />
            <Route path="/classroom/attendance" element={<Attendance />} />
            <Route path="/classroom/record" element={<AttendanceRecords />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/analytics" element={<PerformanceAnalytics />} />
            <Route path="/analytics/chart" element={<PerformanceAnalyticsChart />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/discussion" element={<DiscussionForum />} />
            <Route path="/tests" element={<CreateTestQuiz />} />
            <Route path="/test_view" element={<ViewTest />} />
            <Route path="/text_report" element={<StudentReport />} />
            <Route path="/classroom/leave" element={<LeaveRequestTable />} />
            {/* <Route path="/classes" element={<Classes />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}
export default App;
