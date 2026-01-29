import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, AlertCircle, Info, CheckCircle, Search } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";

const notices = [
  {
    id: 1,
    title: "Semester Examination Schedule Released",
    date: "Jan 28, 2026",
    category: "Academic",
    priority: "high",
    content: "The schedule for end-semester examinations has been released. Students are advised to check the examination portal.",
    isRead: false,
  },
  {
    id: 2,
    title: "Campus Recruitment Drive - February 2026",
    date: "Jan 27, 2026",
    category: "Placement",
    priority: "high",
    content: "Multiple companies including Google, Microsoft, and Amazon will be visiting campus for recruitment.",
    isRead: false,
  },
  {
    id: 3,
    title: "Library Extended Hours During Exams",
    date: "Jan 26, 2026",
    category: "General",
    priority: "medium",
    content: "The central library will remain open until 11 PM during the examination period.",
    isRead: true,
  },
  {
    id: 4,
    title: "Fee Payment Deadline Extension",
    date: "Jan 25, 2026",
    category: "Finance",
    priority: "high",
    content: "The deadline for semester fee payment has been extended to February 5, 2026.",
    isRead: true,
  },
  {
    id: 5,
    title: "Tech Fest 2026 Registration Open",
    date: "Jan 24, 2026",
    category: "Events",
    priority: "medium",
    content: "Registration for Tech Fest 2026 is now open. Early bird discounts available until Feb 1.",
    isRead: true,
  },
];

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high":
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    case "medium":
      return <Info className="w-5 h-5 text-primary" />;
    default:
      return <CheckCircle className="w-5 h-5 text-muted-foreground" />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const StudentNotices = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout userType="student">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Notices</h1>
            <p className="text-muted-foreground">Stay updated with important announcements</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </motion.div>

        {/* Notices List */}
        <motion.div variants={containerVariants} className="space-y-3">
          {filteredNotices.map((notice) => (
            <motion.div
              key={notice.id}
              variants={itemVariants}
              className={`bg-card rounded-xl p-5 border shadow-card hover:shadow-card-hover transition-shadow ${
                !notice.isRead ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getPriorityIcon(notice.priority)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded">
                      {notice.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {notice.date}
                    </span>
                    {!notice.isRead && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">{notice.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">No notices found</p>
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentNotices;
