import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 College Road, Academic City,\nState 12345, Country",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (234) 567-8900\n+1 (234) 567-8901",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@sritcollege.edu\nadmissions@sritcollege.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 9 AM - 5 PM\nSaturday: 9 AM - 1 PM",
  },
];

const departments = [
  { name: "Admissions Office", email: "admissions@sritcollege.edu" },
  { name: "Placement Cell", email: "placements@sritcollege.edu" },
  { name: "Examination Department", email: "exams@sritcollege.edu" },
  { name: "Student Affairs", email: "studentaffairs@sritcollege.edu" },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Reach out to us 
                through any of the channels below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="bg-card rounded-xl p-5 border shadow-card"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">Department Contacts</h3>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div
                      key={dept.name}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    >
                      <span className="font-medium">{dept.name}</span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 border shadow-card">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn-primary rounded-full h-12">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-80 bg-card border shadow-card flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-primary/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Campus Location</h3>
                <p className="text-muted-foreground">
                  123 College Road, Academic City
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
