import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";

const achievements = [
  {
    id: 1,
    title: "National Innovation Award 2024",
    category: "Innovation",
    description: "Recognized for outstanding contributions to technical innovation and research.",
    icon: Trophy,
    date: "December 2024",
    highlight: true,
  },
  {
    id: 2,
    title: "Best Engineering College - State Level",
    category: "Excellence",
    description: "Awarded for academic excellence and infrastructure development.",
    icon: Award,
    date: "November 2024",
    highlight: true,
  },
  {
    id: 3,
    title: "Smart India Hackathon Winners",
    category: "Competition",
    description: "Our students secured first place in the national-level hackathon.",
    icon: Medal,
    date: "October 2024",
    highlight: false,
  },
  {
    id: 4,
    title: "NAAC A+ Accreditation",
    category: "Accreditation",
    description: "Highest grade accreditation for quality education standards.",
    icon: Star,
    date: "September 2024",
    highlight: true,
  },
  {
    id: 5,
    title: "Research Grant - ₹50 Lakhs",
    category: "Research",
    description: "Government research grant for AI and renewable energy projects.",
    icon: Trophy,
    date: "August 2024",
    highlight: false,
  },
  {
    id: 6,
    title: "Best Placement Record",
    category: "Placements",
    description: "95% placement rate with highest package of 12 LPA.",
    icon: Award,
    date: "July 2024",
    highlight: false,
  },
];

const studentAchievements = [
  {
    name: "Rahul Sharma",
    achievement: "Google Summer of Code",
    department: "Computer Science",
    year: "2024",
  },
  {
    name: "Priya Patel",
    achievement: "National Robotics Champion",
    department: "Electronics",
    year: "2024",
  },
  {
    name: "Amit Kumar",
    achievement: "Microsoft Research Intern",
    department: "Data Science",
    year: "2024",
  },
  {
    name: "Sneha Reddy",
    achievement: "ACM ICPC Finalist",
    department: "Computer Science",
    year: "2024",
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

const Achievements = () => {
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
                Pride of Horizon
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Achievements
              </h1>
              <p className="text-lg text-muted-foreground">
                Celebrating excellence and recognizing the outstanding accomplishments 
                of our institution, faculty, and students.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Achievements */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Institutional Excellence"
              subtitle="Awards and recognitions that define our success"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`bg-card rounded-2xl p-6 border shadow-card ${
                    achievement.highlight ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {achievement.highlight && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded mb-3">
                      Featured
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                    {achievement.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Student Stars"
              subtitle="Celebrating our exceptional students"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {studentAchievements.map((student, index) => (
                <motion.div
                  key={student.name}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-6 border shadow-card text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="font-semibold mb-1">{student.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {student.achievement}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {student.department} • {student.year}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { value: "50+", label: "National Awards" },
                { value: "100+", label: "Research Papers" },
                { value: "25+", label: "Patents Filed" },
                { value: "15+", label: "International Recognitions" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Achievements;
