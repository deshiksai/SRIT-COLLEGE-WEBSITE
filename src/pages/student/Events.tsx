import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2026",
    date: "Feb 15-17, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Main Campus",
    category: "Festival",
    description: "Three days of innovation, competition, and celebration.",
    attendees: 5000,
  },
  {
    id: 2,
    title: "Campus Recruitment Drive",
    date: "Feb 20, 2026",
    time: "10:00 AM",
    location: "Placement Cell",
    category: "Placement",
    description: "Major IT companies visiting for on-campus recruitment.",
    attendees: 500,
  },
  {
    id: 3,
    title: "Research Symposium 2026",
    date: "Mar 5, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Auditorium",
    category: "Academic",
    description: "Presenting cutting-edge research from faculty and students.",
    attendees: 300,
  },
  {
    id: 4,
    title: "Alumni Meet 2026",
    date: "Mar 15, 2026",
    time: "4:00 PM",
    location: "Convention Hall",
    category: "Social",
    description: "Annual gathering of our esteemed alumni.",
    attendees: 1000,
  },
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

const StudentEvents = () => {
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
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="text-muted-foreground">Upcoming campus events and activities</p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl overflow-hidden border shadow-card group"
            >
              <div className="h-24 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary/50" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees.toLocaleString()} expected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default StudentEvents;
