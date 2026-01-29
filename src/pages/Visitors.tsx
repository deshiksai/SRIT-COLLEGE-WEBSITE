import { motion } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";

const Visitors = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/college%20images/SRIT-CAMPUS-IMAGE-1.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-2.jpg",
    "/college%20images/SRIT-CAMPUS-IMAGE-3.jpg",
    "/college%20images/SRIT-HOSTEL-IMAGE-1.avif",
    "/college%20images/SRIT-FEST-IMAGE-1.jpg",
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

  const faqItems = [
    {
      question: "What are the admission requirements?",
      answer: "Applicants must have completed 12th standard or equivalent with relevant qualifying exams (JEE for Engineering programs).",
    },
    {
      question: "Does SRIT offer scholarships?",
      answer: "Yes, SRIT offers merit-based scholarships and need-based financial aid. Visit the Admissions office for details.",
    },
    {
      question: "What is the placement record?",
      answer: "SRIT maintains a 95% placement rate with average packages of 6-8 LPA across all branches.",
    },
    {
      question: "Are there hostel facilities?",
      answer: "Yes, SRIT provides separate hostel facilities for boys and girls with 24/7 security and amenities.",
    },
    {
      question: "How can I schedule a campus tour?",
      answer: "Contact the Admissions Office at admissions@srit.edu.in or call +91-XXXX-XXX-XXX to book a tour.",
    },
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur">
                👋 Visitor Portal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to SRIT
              </h1>
              <p className="text-lg text-white/95 drop-shadow">
                Discover excellence in education
              </p>
            </motion.div>
          </div>
        </section>

        {/* Campus Carousel - Removed, Hero carousel replaces this */}

        {/* About SRIT Section */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="About SRIT"
              subtitle="Committed to excellence in technical education since 2008"
              centered={true}
            />

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border shadow-card"
              >
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Srinivasa Ramanujan Institute of Technology (SRIT) is an autonomous institution dedicated to providing world-class technical education. Our commitment to excellence is reflected in our state-of-the-art infrastructure, experienced faculty, and strong industry partnerships.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong emphasis on innovation, research, and practical learning, SRIT prepares students to become industry-ready professionals capable of addressing global challenges. Our graduates are placed at leading companies and continue to make significant contributions to their fields.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick answers to common visitor inquiries"
              centered={true}
            />

            <div className="max-w-2xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border cursor-pointer hover:shadow-card transition-shadow"
                >
                  <summary className="flex items-center gap-3 font-semibold text-foreground">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item.question}
                  </summary>
                  <p className="text-muted-foreground mt-4 ml-8">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Overview Cards */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Campus Features"
              subtitle="Modern facilities designed for student success"
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "📚", title: "Library", desc: "Digital library with 100,000+ resources" },
                { icon: "🏥", title: "Medical Center", desc: "24/7 healthcare support" },
                { icon: "🏋️", title: "Sports", desc: "Multi-sport facilities and grounds" },
                { icon: "🍽️", title: "Cafeteria", desc: "Hygienic dining with diverse cuisines" },
                { icon: "🛏️", title: "Hostels", desc: "Comfortable accommodation with Wi-Fi" },
                { icon: "🔬", title: "Labs", desc: "25+ advanced research laboratories" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center border"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Get in Touch"
              subtitle="Plan your visit or request more information"
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-background/70 text-sm">
                  Rotarypuram Village, B.K. Samudram Mandal,
                  Ananthapuramu, AP - 515701
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-background/70 text-sm">+91-XXXX-XXX-XXX</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-background/70 text-sm">admissions@srit.edu.in</p>
              </motion.div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Visitors;
