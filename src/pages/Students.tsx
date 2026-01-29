import { motion } from "framer-motion";
import { Users, Trophy, Music, Zap, BookOpen, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";

const Students = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/college%20images/SRIT-CAMPUS-IMAGE-1.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-2.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-3.jpg",
    "/college%20images/SRIT-FEST-IMAGE-1.jpg",
    "/college%20images/SRIT-HOSTEL-IMAGE-1.avif",
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Ensure page starts at top when opened
  useEffect(() => {
    try {
      window.scrollTo({ top: 0 });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const activities = [
    {
      icon: Trophy,
      title: "Sports & Athletics",
      description: "Cricket, football, basketball, tennis, badminton, and more. Participate in inter-college tournaments.",
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "Annual tech fests, cultural nights, and celebrations. Express your creativity and talents.",
    },
    {
      icon: Zap,
      title: "Technical Clubs",
      description: "Coding clubs, robotics, data science, and AI groups. Learn beyond the curriculum.",
    },
    {
      icon: Users,
      title: "Student Organizations",
      description: "NSS, IEEE, clubs for various interests. Develop leadership and teamwork skills.",
    },
    {
      icon: BookOpen,
      title: "Academics",
      description: "Project exhibitions, paper presentations, and research opportunities for innovation.",
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Yoga, meditation, counseling services, and health support for holistic development.",
    },
  ];

  const facilities = [
    { emoji: "📚", name: "Library", details: "24/7 access to digital resources" },
    { emoji: "🖥️", name: "Computer Labs", details: "State-of-the-art equipment" },
    { emoji: "🏃", name: "Gym", details: "Modern fitness equipment" },
    { emoji: "🎓", name: "Study Zones", details: "Quiet areas for focus" },
    { emoji: "🍽️", name: "Cafeteria", details: "Nutritious meals daily" },
    { emoji: "⚡", name: "Wi-Fi", details: "Campus-wide internet" },
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section with Large Image Carousel */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Large Background Carousel */}
          <div className="absolute inset-0 w-full h-full">
            {carouselImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`SRIT Campus ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            {/* Dark overlay for text visibility */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Content Overlay */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur">
                  🎓 Student Portal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                  Campus Life at SRIT
                </h1>
                <p className="text-lg text-white/95 drop-shadow">
                  Experience vibrant student culture, clubs, and world-class facilities
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Campus Life Carousel - Removed, Hero carousel replaces this */}

        {/* Student Activities */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Get Involved"
              subtitle="Diverse opportunities for growth and engagement"
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Campus Facilities"
              subtitle="Everything you need for a comfortable student life"
              centered={true}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {facilities.map((facility, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card rounded-xl p-4 text-center border"
                >
                  <div className="text-3xl mb-2">{facility.emoji}</div>
                  <h4 className="font-semibold text-sm mb-1">{facility.name}</h4>
                  <p className="text-xs text-muted-foreground">{facility.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Calendar (Demo) */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Mark your calendar for exciting campus activities (Demo Content)"
              centered={true}
            />

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { month: "Feb", date: 15, event: "Annual Tech Fest 2026", type: "Festival" },
                { month: "Feb", date: 20, event: "Campus Recruitment Drive", type: "Placement" },
                { month: "Mar", date: 5, event: "Research Symposium", type: "Academic" },
                { month: "Mar", date: 15, event: "Inter-College Sports Meet", type: "Sports" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-xl p-4 border flex items-center gap-4"
                >
                  <div className="bg-primary/10 rounded-lg p-3 text-center min-w-fit">
                    <div className="text-xs font-semibold text-primary">{item.month}</div>
                    <div className="text-2xl font-bold text-foreground">{item.date}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{item.event}</h4>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonial (Demo) */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Student Voices"
              subtitle="What students say about their SRIT experience"
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Deshik Sai",
                  dept: "CSE, 3rd Year",
                  quote: "SRIT provided me with excellent technical education and industry exposure.",
                },
                {
                  name: "Priya Patel",
                  dept: "ECE, 2nd Year",
                  quote: "The campus life is vibrant with clubs, fests, and great facilities.",
                },
                {
                  name: "Rahul Kumar",
                  dept: "Mechanical, Final Year",
                  quote: "Strong placement support and amazing peer network at SRIT.",
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background/10 rounded-xl p-6"
                >
                  <p className="text-background/80 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-background/70">{testimonial.dept}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Students;
