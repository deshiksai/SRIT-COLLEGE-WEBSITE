import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2025",
    date: "Feb 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Main Campus",
    category: "Festival",
    description: "Three days of innovation, competition, and celebration featuring robotics, coding challenges, and more.",
    attendees: 5000,
    upcoming: true,
  },
  {
    id: 2,
    title: "Campus Recruitment Drive",
    date: "Feb 20, 2025",
    time: "10:00 AM",
    location: "Placement Cell",
    category: "Placement",
    description: "Major IT companies visiting for on-campus recruitment. Prepare your resumes!",
    attendees: 500,
    upcoming: true,
  },
  {
    id: 3,
    title: "Research Symposium 2025",
    date: "Mar 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Auditorium",
    category: "Academic",
    description: "Presenting cutting-edge research from faculty and students across departments.",
    attendees: 300,
    upcoming: true,
  },
  {
    id: 4,
    title: "Alumni Meet 2025",
    date: "Mar 15, 2025",
    time: "4:00 PM",
    location: "Convention Hall",
    category: "Social",
    description: "Annual gathering of our esteemed alumni. Networking and memories!",
    attendees: 1000,
    upcoming: true,
  },
  {
    id: 5,
    title: "Sports Day",
    date: "Apr 1, 2025",
    time: "8:00 AM",
    location: "Sports Complex",
    category: "Sports",
    description: "Annual sports competition featuring athletics, team sports, and more.",
    attendees: 2000,
    upcoming: true,
  },
  {
    id: 6,
    title: "Cultural Night",
    date: "Apr 10, 2025",
    time: "6:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    description: "Celebrating diversity through music, dance, and theatrical performances.",
    attendees: 3000,
    upcoming: true,
  },
];

const categories = ["All", "Festival", "Academic", "Placement", "Sports", "Cultural", "Social"];

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

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter((event) => event.category === selectedCategory);

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
                Campus Life
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Events & Activities
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with all the exciting events happening on campus. 
                From tech fests to cultural nights, there's always something happening!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
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
        </section>

        {/* Events Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl overflow-hidden border shadow-card group"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded">
                        {event.category}
                      </span>
                      {event.upcoming && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
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

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Events;
