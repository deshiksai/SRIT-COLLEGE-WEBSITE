import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Placements from "./pages/Placements";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StudentLogin from "./pages/auth/StudentLogin";
import FacultyLogin from "./pages/auth/FacultyLogin";
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentNotices from "./pages/student/Notices";
import StudentEvents from "./pages/student/Events";
import StudentAcademics from "./pages/student/Academics";
import FacultyDashboard from "./pages/faculty/Dashboard";
import AssignAttendance from "./pages/faculty/Attendance";
import AttendanceRecords from "./pages/faculty/Records";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/faculty" element={<FacultyLogin />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/notices" element={<StudentNotices />} />
          <Route path="/student/events" element={<StudentEvents />} />
          <Route path="/student/academics" element={<StudentAcademics />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/attendance" element={<AssignAttendance />} />
          <Route path="/faculty/records" element={<AttendanceRecords />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
