import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Briefcase, Calendar, BookOpen, Trophy, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

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
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center gradient-bg overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-36 h-36 md:w-44 md:h-44 bg-white rounded p-2 shadow-md flex items-center justify-center">
                    <img src="/images/srit-logo.png" alt="SRIT logo" className="max-w-full max-h-full object-contain" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
                    Srinivasa Ramanujan Institute of Technology
                  </h1>

                  <p className="text-sm text-muted-foreground mt-1">
                    Autonomous Institution | Affiliated to JNTUA | Approved by AICTE
                  </p>

                  <p className="text-sm text-muted-foreground mt-1">Ananthapuramu, Andhra Pradesh</p>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
                    Empowering Knowledge at SRIT — Shaping Engineers for a Better Tomorrow.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center mt-6">
                    <Link to="/about">
                      <Button size="lg" className="btn-primary rounded-full px-8 h-12 text-base">
                        Apply Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full px-8 h-12 text-base border-2 text-foreground hover:bg-accent"
                        >
                          Learn More
                        </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated shapes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 top-1/3 hidden lg:block"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl rotate-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-32 bottom-1/4 hidden lg:block"
          >
            <div className="w-12 h-12 bg-primary/30 rounded-full" />
          </motion.div>
        </section>

        {/* Institutional Highlights (identity badges) */}
        <section className="py-8 bg-background/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
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
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="bg-card rounded-2xl p-6 text-center card-hover shadow-card border"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
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
