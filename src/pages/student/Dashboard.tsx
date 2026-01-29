import { motion } from "framer-motion";
import { Calendar, Bell, BookOpen, User, TrendingUp, Clock } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const studentInfo = {
  name: "Deshik sai",
  rollNumber: "244G1A0578",
  department: "Computer Science & Engineering",
  semester: "6th Semester",
  year: "3rd Year",
};

const dashboardCards = [
  {
    title: "Attendance",
    value: 85,
    suffix: "%",
    description: "Current semester",
    icon: TrendingUp,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Pending Assignments",
    value: 3,
    suffix: "",
    description: "Due this week",
    icon: BookOpen,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Upcoming Events",
    value: 5,
    suffix: "",
    description: "This month",
    icon: Calendar,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Unread Notices",
    value: 8,
    suffix: "",
    description: "New announcements",
    icon: Bell,
    color: "from-yellow-500/20 to-yellow-500/5",
  },
];

const latestNotices = [
  { id: 1, title: "Semester Examination Schedule Released", date: "Jan 28, 2026", priority: "high" },
  { id: 2, title: "Campus Recruitment Drive - February", date: "Jan 27, 2026", priority: "high" },
  { id: 3, title: "Library Extended Hours During Exams", date: "Jan 26, 2026", priority: "medium" },
];

const upcomingEvents = [
  { id: 1, title: "Tech Fest 2026", date: "Feb 15-17", type: "Festival" },
  { id: 2, title: "Campus Recruitment", date: "Feb 20", type: "Placement" },
  { id: 3, title: "Research Symposium", date: "Mar 5", type: "Academic" },
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

const StudentDashboard = () => {
  return (
    <DashboardLayout userType="student">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Welcome Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Welcome back, {studentInfo.name}! 👋
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {studentInfo.rollNumber}
                </span>
                <span>{studentInfo.department}</span>
                <span>{studentInfo.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {dashboardCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-5 border shadow-card"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                <card.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="text-2xl font-bold mb-1">
                <AnimatedCounter end={card.value} suffix={card.suffix} />
              </div>
              <div className="text-sm font-medium text-foreground">{card.title}</div>
              <div className="text-xs text-muted-foreground">{card.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Latest Notices */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-6 border shadow-card"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Latest Notices</h2>
              <Bell className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              {latestNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      notice.priority === "high" ? "bg-destructive" : "bg-primary"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{notice.title}</p>
                    <p className="text-xs text-muted-foreground">{notice.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-6 border shadow-card"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Academic Overview */}
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-2xl p-6 border shadow-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Academic Overview</h2>
            <BookOpen className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-1">8.5</div>
              <div className="text-sm text-muted-foreground">Current CGPA</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-foreground mb-1">42</div>
              <div className="text-sm text-muted-foreground">Credits Completed</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-foreground mb-1">6</div>
              <div className="text-sm text-muted-foreground">Active Courses</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
