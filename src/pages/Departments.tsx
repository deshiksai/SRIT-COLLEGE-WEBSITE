import { motion } from "framer-motion";
import { Users, BookOpen, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: 1,
    name: "Computer Science & Engineering",
    code: "CSE",
    icon: "💻",
    description: "Cutting-edge curriculum covering AI, ML, cybersecurity, and software development.",
    students: 800,
    faculty: 45,
    labs: 8,
    highlights: ["AI & Machine Learning", "Cybersecurity", "Cloud Computing"],
  },
  {
    id: 2,
    name: "Electronics & Communication",
    code: "ECE",
    icon: "🔌",
    description: "Focus on embedded systems, VLSI design, and communication technologies.",
    students: 600,
    faculty: 38,
    labs: 6,
    highlights: ["VLSI Design", "IoT", "5G Technologies"],
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    code: "ME",
    icon: "⚙️",
    description: "Comprehensive program covering manufacturing, thermal sciences, and robotics.",
    students: 550,
    faculty: 35,
    labs: 7,
    highlights: ["Robotics", "CAD/CAM", "Thermal Engineering"],
  },
  {
    id: 4,
    name: "Civil Engineering",
    code: "CE",
    icon: "🏗️",
    description: "Training in structural design, construction management, and sustainable development.",
    students: 450,
    faculty: 30,
    labs: 5,
    highlights: ["Structural Design", "Green Building", "Smart Cities"],
  },
  {
    id: 5,
    name: "Business Administration",
    code: "MBA",
    icon: "📊",
    description: "Developing future business leaders with strategic management and entrepreneurship skills.",
    students: 700,
    faculty: 40,
    labs: 3,
    highlights: ["Finance", "Marketing", "Entrepreneurship"],
  },
  {
    id: 6,
    name: "Biotechnology",
    code: "BT",
    icon: "🧬",
    description: "Research-focused program in genetic engineering and pharmaceutical sciences.",
    students: 350,
    faculty: 25,
    labs: 6,
    highlights: ["Genetic Engineering", "Pharma R&D", "Bioinformatics"],
  },
  {
    id: 7,
    name: "Data Science",
    code: "DS",
    icon: "📈",
    description: "Analytics-driven curriculum covering big data, statistics, and visualization.",
    students: 400,
    faculty: 28,
    labs: 4,
    highlights: ["Big Data", "Statistical Analysis", "Data Visualization"],
  },
  {
    id: 8,
    name: "Electrical Engineering",
    code: "EE",
    icon: "⚡",
    description: "Power systems, renewable energy, and electrical machine design.",
    students: 500,
    faculty: 32,
    labs: 5,
    highlights: ["Power Systems", "Renewable Energy", "Control Systems"],
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

const Departments = () => {
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
                Academics
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Departments
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our diverse academic programs designed to prepare you for 
                success in your chosen field with cutting-edge curriculum and 
                industry-relevant skills.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {departments.map((dept) => (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 border shadow-card group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{dept.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {dept.name}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded">
                          {dept.code}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {dept.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="font-semibold">{dept.students}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="font-semibold">{dept.faculty}</div>
                      <div className="text-xs text-muted-foreground">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="font-semibold">{dept.labs}</div>
                      <div className="text-xs text-muted-foreground">Labs</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dept.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-muted-foreground mb-6">
                Take the first step towards your future career. Apply now to 
                become part of our vibrant academic community.
              </p>
              <Button className="btn-primary rounded-full px-8">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Departments;
