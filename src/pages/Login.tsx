import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, User, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";

const loginOptions = [
  {
    id: "student",
    title: "Student Login",
    description: "Access your academic dashboard, attendance, and notices",
    icon: GraduationCap,
    href: "/login/student",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "faculty",
    title: "Faculty Login",
    description: "Manage attendance, view records, and access faculty portal",
    icon: User,
    href: "/login/faculty",
    color: "from-accent to-accent/50",
  },
];

const Login = () => {
  return (
    <Layout showFooter={false}>
      <PageTransition>
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center gradient-bg py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome Back
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Select your role to access the portal
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {loginOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={option.href}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-card rounded-2xl p-8 border shadow-card hover:shadow-card-hover transition-all cursor-pointer group h-full"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6`}>
                        <option.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {option.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-muted-foreground mt-8"
            >
              Need help? Contact the IT helpdesk at{" "}
              <a href="mailto:support@horizoncollege.edu" className="text-primary hover:underline">
                support@horizoncollege.edu
              </a>
            </motion.p>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Login;
