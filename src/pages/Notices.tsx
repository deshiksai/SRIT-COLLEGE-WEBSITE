import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, AlertCircle, Info, CheckCircle, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { Input } from "@/components/ui/input";

const notices = [
  {
    id: 1,
    title: "Semester Examination Schedule Released",
    date: "Jan 28, 2026",
    category: "Academic",
    priority: "high",
    content: "The schedule for end-semester examinations has been released. Students are advised to check the examination portal for their individual timetables.",
  },
  {
    id: 2,
    title: "Campus Recruitment Drive - February 2026",
    date: "Jan 27, 2026",
    category: "Placement",
    priority: "high",
    content: "Multiple companies including Google, Microsoft, and Amazon will be visiting campus for recruitment. Eligible students should register by Feb 10.",
  },
  {
    id: 3,
    title: "Library Extended Hours During Exams",
    date: "Jan 26, 2026",
    category: "General",
    priority: "medium",
    content: "The central library will remain open until 11 PM during the examination period. Students are encouraged to utilize these extended hours.",
  },
  {
    id: 4,
    title: "Fee Payment Deadline Extension",
    date: "Jan 25, 2026",
    category: "Finance",
    priority: "high",
    content: "The deadline for semester fee payment has been extended to February 5, 2026. Late fees will apply after this date.",
  },
  {
    id: 5,
    title: "Tech Fest 2026 Registration Open",
    date: "Jan 24, 2026",
    category: "Events",
    priority: "medium",
    content: "Registration for Tech Fest 2026 is now open. Early bird discounts available until Feb 1. Register at the student portal.",
  },
  {
    id: 6,
    title: "Holiday Notice - Republic Day",
    date: "Jan 23, 2026",
    category: "General",
    priority: "low",
    content: "The college will remain closed on January 26, 2026 on account of Republic Day. Regular classes will resume on January 27.",
  },
  {
    id: 7,
    title: "Workshop on AI & Machine Learning",
    date: "Jan 22, 2026",
    category: "Academic",
    priority: "medium",
    content: "A three-day workshop on AI and Machine Learning will be conducted from Feb 10-12. Limited seats available.",
  },
  {
    id: 8,
    title: "Sports Day Participation Form",
    date: "Jan 21, 2026",
    category: "Sports",
    priority: "low",
    content: "Students interested in participating in Annual Sports Day should submit their forms to the Sports Department by Feb 15.",
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

const Notices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(notices.map((n) => n.category))];

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="gradient-bg py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Bell className="w-4 h-4 inline mr-1" />
                Announcements
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Notices & Circulars
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay informed with the latest announcements, updates, and important 
                circulars from the administration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search notices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notices List */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredNotices.map((notice) => (
                <motion.div
                  key={notice.id}
                  variants={itemVariants}
                  layout
                  className="bg-card rounded-xl p-5 border shadow-card hover:shadow-card-hover transition-shadow"
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
                <p className="text-muted-foreground">No notices found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Notices;
