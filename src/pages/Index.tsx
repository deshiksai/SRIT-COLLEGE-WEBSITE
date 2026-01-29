import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Briefcase, Calendar, BookOpen, Trophy, Building, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useState, useEffect } from "react";

const highlights = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Students",
    description: "Enrolled across all programs",
  },
  {
    icon: Briefcase,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Graduates placed in top companies",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Awards",
    description: "Excellence in education",
  },
  {
    icon: Trophy,
    value: 35,
    suffix: "+",
    label: "Years",
    description: "Of academic excellence",
  },
];

const departments = [
  { name: "Computer Science", icon: "💻", students: 800 },
  { name: "Electronics", icon: "🔌", students: 600 },
  { name: "Mechanical", icon: "⚙️", students: 550 },
  { name: "Civil Engineering", icon: "🏗️", students: 450 },
  { name: "Business Admin", icon: "📊", students: 700 },
  { name: "Biotechnology", icon: "🧬", students: 350 },
];

const upcomingEvents = [
  {
    title: "Annual Tech Fest 2026",
    date: "Feb 15-17, 2026",
    type: "Festival",
  },
  {
    title: "Campus Recruitment Drive",
    date: "Feb 20, 2026",
    type: "Placement",
  },
  {
    title: "Research Symposium",
    date: "Mar 5, 2026",
    type: "Academic",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/college%20images/SRIT-CAMPUS-IMAGE-1.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-2.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-3.jpg",
    "/college%20images/SRIT-FEST-IMAGE-1.jpg",
    "/college%20images/SRIT-HOSTEL-IMAGE-1.avif",
  ];

  // Auto-advance carousel every ~6.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

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
            {/* Dark overlay for text visibility (~45% for readability) */}
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

          {/* Arrows only (dots removed for minimal visual noise) */}

          {/* Content Overlay */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-relaxed text-[#F3F4F6] max-w-4xl text-center">
                    Srinivasa Ramanujan Institute of Technology
                  </h1>

                  <p className="text-lg md:text-xl text-[#CBD5E1] font-normal">
                    Autonomous Institution | AICTE Approved | NAAC Accredited
                  </p>

                  <p className="text-base md:text-lg text-[#CBD5E1] font-normal">
                    Ananthapuramu, Andhra Pradesh
                  </p>

                  <p className="text-2xl md:text-3xl text-[#A1A1AA] tracking-wide mt-2 font-medium">
                    Empowering Knowledge
                  </p>

                  <div className="flex gap-4 justify-center mt-8">
                    <Link to="/about">
                      <Button size="md" className="btn-primary rounded-full px-6 h-11 text-sm font-semibold">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button
                        size="md"
                        variant="outline"
                        className="rounded-full px-6 h-11 text-sm font-semibold border-2 border-slate-300 text-slate-100 bg-transparent hover:bg-white/5"
                      >
                        Explore Campus
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative animated shapes removed for a cleaner hero */}
        </section>

        {/* Credibility Highlights Strip */}
        <section className="py-12 bg-[#F8F9FB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {
                  [
                    { icon: "🎓", title: "18+ Years", subtitle: "of Excellence" },
                    { icon: "🏛️", title: "Autonomous", subtitle: "Institution" },
                    { icon: "👥", title: "10,000+", subtitle: "Alumni Network" },
                    { icon: "🔬", title: "Advanced", subtitle: "Labs & Research" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center text-[#1F2937]"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-[#F97316] text-lg">
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-lg md:text-xl font-bold">{item.title}</div>
                      <div className="text-sm text-[#6B7280]">{item.subtitle}</div>
                    </motion.div>
                  ))
                }
            </div>
          </div>
        </section>

        {/* Role-Based Navigation */}
        <section className="section-padding bg-white relative z-20 -mt-16 pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Explore As
                </h2>
                <p className="text-muted-foreground">
                  Select your role to view relevant information
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6"
              >
                {/* Visitor Portal */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <Link to="/visitors">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-transparent hover:border-blue-400 transition-all cursor-pointer h-full shadow-md hover:shadow-xl">
                      <div className="flex flex-col items-center text-center h-full justify-between">
                        <div>
                          <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                          <h3 className="text-2xl font-bold text-blue-900 mb-2">
                            For Visitors
                          </h3>
                          <p className="text-blue-700 text-sm">
                            Parents & prospective students exploring SRIT
                          </p>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Student Portal */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <Link to="/students">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-transparent hover:border-green-400 transition-all cursor-pointer h-full shadow-md hover:shadow-xl">
                      <div className="flex flex-col items-center text-center h-full justify-between">
                        <div>
                          <div className="text-5xl mb-4">🎓</div>
                          <h3 className="text-2xl font-bold text-green-900 mb-2">
                            For Students
                          </h3>
                          <p className="text-green-700 text-sm">
                            Campus life, activities & academic resources
                          </p>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Faculty Portal */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <Link to="/faculty">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-transparent hover:border-purple-400 transition-all cursor-pointer h-full shadow-md hover:shadow-xl">
                      <div className="flex flex-col items-center text-center h-full justify-between">
                        <div>
                          <div className="text-5xl mb-4">👨‍🏫</div>
                          <h3 className="text-2xl font-bold text-purple-900 mb-2">
                            For Faculty
                          </h3>
                          <p className="text-purple-700 text-sm">
                            Resources, recruitment & professional development
                          </p>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Institutional Highlights (identity badges) */}
        <section className="py-8 bg-[#FFF7F2]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { title: "Established", value: "2008" },
                  { title: "Programs Offered", value: "UG & PG" },
                  { title: "Accreditation", value: "AICTE Approved" },
                  { title: "Placements", value: "Active Industry Collaborations" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-card rounded-2xl p-4 flex flex-col items-center text-center border">
                    <div className="text-sm text-muted-foreground mb-2">{item.title}</div>
                    <div className="text-lg font-semibold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F8F9FB] rounded-2xl p-6 md:p-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {highlights.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm border"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#F97316]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-[#6B7280] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#9CA3AF]">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Preview */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Departments"
              subtitle="Explore diverse academic programs designed to prepare you for success"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            >
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-2xl p-6 card-hover shadow-card border cursor-pointer group"
                >
                  <div className="text-3xl mb-3">{dept.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {dept.students} students
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link to="/departments">
                <Button variant="outline" className="rounded-full px-6">
                  View All Departments
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Events Preview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="Upcoming Events"
                  subtitle="Stay connected with campus activities and opportunities"
                  centered={false}
                />

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.title}
                      variants={itemVariants}
                      className="bg-card rounded-xl p-4 border card-hover flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {event.date}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        {event.type}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6">
                  <Link to="/events">
                    <Button className="btn-primary rounded-full px-6">
                      View All Events
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="aspect-square rounded-3xl bg-white p-8">
                  <div className="w-full h-full rounded-2xl bg-card shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Tech Fest 2026
                      </h3>
                      <p className="text-muted-foreground">Coming Soon!</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of students who have transformed their lives through 
                quality education at SRIT College.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10 rounded-full px-8 text-black"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
