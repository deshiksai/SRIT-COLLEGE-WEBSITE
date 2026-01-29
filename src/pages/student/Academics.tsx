import { motion } from "framer-motion";
import { BookOpen, Award, TrendingUp, Clock } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const courses = [
  { code: "CS601", name: "Machine Learning", credits: 4, grade: "A", attendance: 92 },
  { code: "CS602", name: "Cloud Computing", credits: 3, grade: "A-", attendance: 88 },
  { code: "CS603", name: "Data Mining", credits: 3, grade: "B+", attendance: 85 },
  { code: "CS604", name: "Cybersecurity", credits: 4, grade: "A", attendance: 90 },
  { code: "CS605", name: "Software Engineering", credits: 3, grade: "A-", attendance: 87 },
  { code: "CS606", name: "Project Work", credits: 4, grade: "IP", attendance: 100 },
];

const semesterResults = [
  { semester: "Sem 1", sgpa: 8.2, credits: 21 },
  { semester: "Sem 2", sgpa: 8.4, credits: 22 },
  { semester: "Sem 3", sgpa: 8.6, credits: 21 },
  { semester: "Sem 4", sgpa: 8.8, credits: 22 },
  { semester: "Sem 5", sgpa: 8.5, credits: 21 },
];

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

const StudentAcademics = () => {
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
          <h1 className="text-2xl font-bold">Academic Overview</h1>
          <p className="text-muted-foreground">Your academic progress and performance</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Current CGPA", value: "8.5", icon: Award, color: "text-primary" },
            { label: "Total Credits", value: "107/120", icon: BookOpen, color: "text-green-500" },
            { label: "Avg Attendance", value: "89%", icon: Clock, color: "text-blue-500" },
            { label: "Backlogs", value: "0", icon: TrendingUp, color: "text-emerald-500" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-card rounded-2xl p-5 border shadow-card"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Semester Courses */}
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-2xl p-6 border shadow-card"
        >
          <h2 className="text-lg font-semibold mb-4">Current Semester Courses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b">
                  <th className="pb-3 font-medium">Course Code</th>
                  <th className="pb-3 font-medium">Course Name</th>
                  <th className="pb-3 font-medium">Credits</th>
                  <th className="pb-3 font-medium">Grade</th>
                  <th className="pb-3 font-medium">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.code} className="border-b last:border-0">
                    <td className="py-3 font-medium">{course.code}</td>
                    <td className="py-3">{course.name}</td>
                    <td className="py-3">{course.credits}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        course.grade === "IP" 
                          ? "bg-yellow-500/20 text-yellow-600" 
                          : "bg-accent text-accent-foreground"
                      }`}>
                        {course.grade}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${course.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm">{course.attendance}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Semester Progress */}
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-2xl p-6 border shadow-card"
        >
          <h2 className="text-lg font-semibold mb-4">Semester Performance</h2>
          <div className="grid sm:grid-cols-5 gap-4">
            {semesterResults.map((sem, index) => (
              <div
                key={sem.semester}
                className="text-center p-4 rounded-xl bg-muted/50"
              >
                <div className="text-sm text-muted-foreground mb-2">{sem.semester}</div>
                <div className="text-2xl font-bold text-primary mb-1">{sem.sgpa}</div>
                <div className="text-xs text-muted-foreground">{sem.credits} credits</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentAcademics;
