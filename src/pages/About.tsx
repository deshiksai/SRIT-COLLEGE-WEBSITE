import { motion } from "framer-motion";
import { Target, Eye, Award, Users, BookOpen, Heart, Building, GraduationCap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Pursuing the highest standards in education and research",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding honesty and ethical conduct in all endeavors",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Fostering teamwork and community engagement",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing creativity and forward-thinking approaches",
  },
];

const stats = [
  { value: 18, suffix: "", label: "Years of Excellence" },
  { value: 3, suffix: "", label: "National Recognitions" },
  { value: 18, suffix: "", label: "Research Papers" },
  { value: 5, suffix: "", label: "Patents Filed" },
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

const About = () => {
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
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-white rounded p-2 shadow-sm flex items-center justify-center">
                  <img src="/images/srit-logo.png" alt="SRIT logo" className="max-w-full max-h-full object-contain" />
                </div>

                <div className="text-center md:text-left">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    About SRIT
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Srinivasa Ramanujan Institute of Technology
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    <strong>Location:</strong> Ananthapuramu, Andhra Pradesh • <strong>Tagline:</strong> "Empowering Knowledge"
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 max-w-xl">
                    Srinivasa Ramanujan Institution of Technology (SRIT) is a premier institution committed to delivering quality technical education and fostering innovation, research, and professional excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    To provide quality education through well-designed curricula and effective teaching methodologies.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    To promote innovation and research through real-world problem solving.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    To strengthen industry interaction and practical exposure.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    To instill ethical values, leadership qualities, and social responsibility.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To emerge as a center of excellence in technical education by nurturing innovative, ethical, and competent professionals capable of addressing global challenges and contributing to societal development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-muted/50">
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
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide everything we do"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 border shadow-card text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* History */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GraduationCap className="w-16 h-16 mx-auto text-primary mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Affiliation & Approvals
                </h2>
                <div className="space-y-3 text-background/70 leading-relaxed">
                  <p><strong className="text-background">Affiliated to:</strong> Jawaharlal Nehru Technological University, Anantapur (JNTUA)</p>
                  <p><strong className="text-background">Approved by:</strong> AICTE (All India Council for Technical Education)</p>
                  <p><strong className="text-background">Recognized by:</strong> UGC (University Grants Commission)</p>
                  <p><strong className="text-background">Accreditation:</strong> NAAC (A Grade), NBA (Selected Undergraduate Programs)</p>
                  <p className="text-sm italic mt-4">📌 <em>Details shown are for prototype representation.</em></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Campus Facilities */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Choose SRIT?"
              subtitle="Excellence in technical education and innovation"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: "🏆", title: "NAAC Accredited", desc: "A Grade accreditation for quality standards" },
                { icon: "🎓", title: "NBA Accredited Programs", desc: "Outcome-based engineering education" },
                { icon: "🔬", title: "Research Excellence", desc: "18 research papers published" },
                { icon: "🤝", title: "Industry Partnerships", desc: "Strong industry collaboration" },
                { icon: "💡", title: "Innovation Focus", desc: "5 patents filed for research innovation" },
                { icon: "🌍", title: "Global Recognition", desc: "EduSkills Summit 2025 recognition" },
              ].map((facility) => (
                <motion.div
                  key={facility.title}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 border card-hover"
                >
                  <div className="text-3xl mb-3">{facility.icon}</div>
                  <h3 className="font-semibold mb-1">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
