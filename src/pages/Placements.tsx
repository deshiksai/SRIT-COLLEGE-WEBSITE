import { motion } from "framer-motion";
import { TrendingUp, Building, Users, DollarSign, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: DollarSign, value: 12, suffix: " LPA", label: "Highest Package" },
  { icon: Building, value: 200, suffix: "+", label: "Recruiting Companies" },
  { icon: Users, value: 850, suffix: "+", label: "Students Placed (2024)" },
];

const topRecruiters = [
  { name: "Google", logo: "🔵" },
  { name: "Microsoft", logo: "🟦" },
  { name: "Amazon", logo: "🟠" },
  { name: "TCS", logo: "🔴" },
  { name: "Infosys", logo: "🟢" },
  { name: "Wipro", logo: "🟣" },
  { name: "Accenture", logo: "🟡" },
  { name: "Deloitte", logo: "🟤" },
  { name: "IBM", logo: "⚫" },
  { name: "Capgemini", logo: "🔵" },
  { name: "Cognizant", logo: "🟦" },
  { name: "HCL", logo: "🟠" },
];

const placementStats = [
  { year: "2024", placed: 850, percentage: 95 },
  { year: "2023", placed: 820, percentage: 93 },
  { year: "2022", placed: 780, percentage: 91 },
  { year: "2021", placed: 750, percentage: 89 },
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

const Placements = () => {
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
                Placements
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Launch Your Career
              </h1>
              <p className="text-lg text-muted-foreground">
                Our dedicated placement cell ensures every student gets the opportunity 
                to secure their dream job with top companies across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-6 text-center border shadow-card card-hover"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Top Recruiters"
              subtitle="Leading companies that trust our talent"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
            >
              {topRecruiters.map((company) => (
                <motion.div
                  key={company.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-4 text-center border shadow-card"
                >
                  <div className="text-3xl mb-2">{company.logo}</div>
                  <div className="text-sm font-medium">{company.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Placement Trends */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Placement Trends"
              subtitle="Consistent growth in placement statistics over the years"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {placementStats.map((year, index) => (
                <motion.div
                  key={year.year}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-6 border shadow-card"
                >
                  <div className="text-4xl font-bold text-primary mb-4">
                    {year.year}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Students Placed</span>
                        <span className="font-semibold">{year.placed}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(year.placed / 900) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Placement Rate</span>
                        <span className="font-semibold">{year.percentage}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${year.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-accent-foreground rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Placement Process
              </h2>
              <p className="text-background/70 max-w-2xl mx-auto">
                A structured approach to help you land your dream job
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { step: 1, title: "Resume Building", desc: "Expert guidance on creating impactful resumes" },
                { step: 2, title: "Skill Development", desc: "Training in technical and soft skills" },
                { step: 3, title: "Mock Interviews", desc: "Practice sessions with industry experts" },
                { step: 4, title: "Campus Drives", desc: "Direct recruitment by top companies" },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-background/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-background/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Placements;
