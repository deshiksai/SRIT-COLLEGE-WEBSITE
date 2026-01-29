import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const studentProfile = {
  name: "Deshik sai",
  rollNumber: "244G1AO578",
  email: "244G1A0578@srit.ac.in",
  phone: "+91 1234567890",
  address: "123 Student Housing, Academic City",
  dob: "January 15, 2005",
  department: "Computer Science & Engineering",
  year: "3rd Year",
  semester: "6th Semester",
  batch: "2022-2026",
  bloodGroup: "B+",
  guardian: "Mr. Prasad",
  guardianPhone: "+91 234 567 8901",
};

const academicInfo = {
  cgpa: 8.5,
  totalCredits: 42,
  completedCourses: 24,
  backlogs: 0,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StudentProfile = () => {
  return (
    <DashboardLayout userType="student">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">View your personal information</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 bg-card rounded-2xl p-6 border shadow-card text-center"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-1">{studentProfile.name}</h2>
            <p className="text-muted-foreground text-sm mb-4">{studentProfile.rollNumber}</p>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {studentProfile.department}
            </div>
            <div className="mt-6 pt-6 border-t space-y-3 text-left">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="truncate">{studentProfile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{studentProfile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{studentProfile.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {/* Personal Info */}
            <div className="bg-card rounded-2xl p-6 border shadow-card">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", value: studentProfile.name },
                  { label: "Roll Number", value: studentProfile.rollNumber },
                  { label: "Date of Birth", value: studentProfile.dob },
                  { label: "Blood Group", value: studentProfile.bloodGroup },
                  { label: "Guardian Name", value: studentProfile.guardian },
                  { label: "Guardian Contact", value: studentProfile.guardianPhone },
                ].map((item) => (
                  <div key={item.label} className="p-3 bg-muted/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Info */}
            <div className="bg-card rounded-2xl p-6 border shadow-card">
              <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Department", value: studentProfile.department },
                  { label: "Current Year", value: studentProfile.year },
                  { label: "Semester", value: studentProfile.semester },
                  { label: "Batch", value: studentProfile.batch },
                ].map((item) => (
                  <div key={item.label} className="p-3 bg-muted/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-accent rounded-xl">
                  <Award className="w-6 h-6 mx-auto text-primary mb-2" />
                  <div className="text-xl font-bold">{academicInfo.cgpa}</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-xl">
                  <BookOpen className="w-6 h-6 mx-auto text-primary mb-2" />
                  <div className="text-xl font-bold">{academicInfo.totalCredits}</div>
                  <div className="text-xs text-muted-foreground">Credits</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-xl">
                  <Calendar className="w-6 h-6 mx-auto text-primary mb-2" />
                  <div className="text-xl font-bold">{academicInfo.completedCourses}</div>
                  <div className="text-xs text-muted-foreground">Courses</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-xl">
                  <User className="w-6 h-6 mx-auto text-primary mb-2" />
                  <div className="text-xl font-bold">{academicInfo.backlogs}</div>
                  <div className="text-xs text-muted-foreground">Backlogs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentProfile;
