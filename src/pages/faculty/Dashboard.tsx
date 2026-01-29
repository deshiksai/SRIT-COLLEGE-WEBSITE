import { motion } from "framer-motion";
import { Users, BookOpen, Calendar, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const facultyInfo = {
  name: "Dr. Sarah Johnson",
  department: "Computer Science & Engineering",
  designation: "Associate Professor",
};

const stats = [
  { title: "Classes Today", value: 4, icon: BookOpen, color: "from-primary/20 to-primary/5" },
  { title: "Total Students", value: 180, icon: Users, color: "from-blue-500/20 to-blue-500/5" },
  { title: "Attendance Marked", value: 3, icon: CheckCircle, color: "from-green-500/20 to-green-500/5" },
  { title: "Pending Tasks", value: 2, icon: Calendar, color: "from-yellow-500/20 to-yellow-500/5" },
];

const FacultyDashboard = () => {
  return (
    <DashboardLayout userType="faculty">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome, {facultyInfo.name}! 👋</h1>
          <p className="text-muted-foreground">{facultyInfo.designation} • {facultyInfo.department}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div key={stat.title} whileHover={{ y: -5 }} className="bg-card rounded-2xl p-5 border shadow-card">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold"><AnimatedCounter end={stat.value} /></div>
              <div className="text-sm text-muted-foreground">{stat.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
