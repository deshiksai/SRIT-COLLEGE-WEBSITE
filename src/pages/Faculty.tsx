import { motion } from "framer-motion";
import { Briefcase, Users, BookOpen, MessageSquare, Lightbulb, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";

const Faculty = () => {
  const sections = [
    {
      icon: Briefcase,
      title: "Faculty Recruitment",
      description: "Career opportunities and recruitment process for academic positions",
      content: "SRIT invites qualified candidates for various faculty positions. Interested applicants can submit their CVs to careers@srit.edu.in",
    },
    {
      icon: Users,
      title: "Staff Details",
      description: "Connect with faculty and administrative staff",
      content: "[Demo] Faculty Directory - Names, departments, and contact details would be displayed here for authorized users.",
    },
    {
      icon: BookOpen,
      title: "New Faculty Corner",
      description: "Resources and guidance for new faculty members",
      content: "[Demo] Orientation materials, campus guidelines, and onboarding resources for newly joined faculty.",
    },
    {
      icon: MessageSquare,
      title: "Channel-I Notice Board",
      description: "Official announcements and notifications",
      content: "[Demo] Important notices, circulars, and updates from the administration would appear here.",
    },
    {
      icon: Lightbulb,
      title: "Research & Fellowships",
      description: "Grants, scholarships, and research opportunities",
      content: "[Demo] Available research grants, fellowship programs, and collaboration opportunities listed here.",
    },
    {
      icon: Globe,
      title: "Conferences & Workshops",
      description: "Guidelines and information for academic events",
      content: "[Demo] Upcoming conferences, workshops, and training programs for faculty development.",
    },
  ];

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
                👨‍🏫 Faculty Portal – Demo View
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Faculty Resources & Information
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive portal for faculty recruitment, professional development, and institutional updates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Faculty Services</h2>
              <p className="text-muted-foreground">
                This is a prototype demo view. In production, this portal would include complete faculty management systems, authentication, and real-time data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border shadow-card hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground italic">{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Important Resources"
              subtitle="Quick access to faculty guidelines and policies"
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: "Academic Calendar",
                  items: ["Semester schedule", "Exam dates", "Holiday list"],
                },
                {
                  title: "Policies & Guidelines",
                  items: ["Faculty handbook", "Course guidelines", "Assessment policy"],
                },
                {
                  title: "Development Programs",
                  items: ["Training programs", "Certification courses", "Workshops"],
                },
                {
                  title: "Support Services",
                  items: ["IT support", "Library resources", "Administrative help"],
                },
              ].map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-xl p-6 border"
                >
                  <h4 className="font-semibold text-foreground mb-4">{resource.title}</h4>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Faculty Directory (Demo) */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Faculty Directory – Demo Sample"
              subtitle="(Demo Data - Not Real Records)"
              centered={true}
            />

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Dr. Prof. Name 1",
                    dept: "Computer Science & Engineering",
                    email: "[demo@srit.edu.in]",
                  },
                  {
                    name: "Dr. Prof. Name 2",
                    dept: "Electronics & Communication",
                    email: "[demo@srit.edu.in]",
                  },
                  {
                    name: "Dr. Prof. Name 3",
                    dept: "Mechanical Engineering",
                    email: "[demo@srit.edu.in]",
                  },
                  {
                    name: "Dr. Prof. Name 4",
                    dept: "Civil Engineering",
                    email: "[demo@srit.edu.in]",
                  },
                ].map((faculty, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card rounded-xl p-5 border"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent mb-3" />
                    <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{faculty.dept}</p>
                    <p className="text-xs text-primary">{faculty.email}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl"
              >
                <p className="text-sm text-blue-800">
                  <strong>📌 Demo Notice:</strong> This faculty directory shows sample placeholder data. In production, the real faculty directory with verified contact information, qualifications, and research interests would be accessible here with appropriate authentication.
                </p>
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
              <h2 className="text-3xl font-bold mb-4">Join the SRIT Faculty</h2>
              <p className="text-background/70 max-w-2xl mx-auto mb-6">
                We are looking for passionate educators and researchers to contribute to our academic community.
              </p>
              <p className="text-sm text-background/60">
                For recruitment inquiries: <strong>careers@srit.edu.in</strong>
              </p>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Faculty;
