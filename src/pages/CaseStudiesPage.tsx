import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

const CaseStudiesPage = () => {
  const { ref, inView } = useScrollAnimation();

  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "Fashion Retailer",
      category: "Web Development",
      problem: "Outdated website, poor user experience, high bounce rate",
      solution:
        "Redesigned entire platform with AI-powered recommendations and automation",
      results: {
        traffic: "+250%",
        conversion: "+180%",
        speed: "3x faster",
        revenue: "+$2.5M annually",
      },
      image: "project-1",
    },
    {
      title: "Automated Marketing Campaign Suite",
      client: "SaaS Startup",
      category: "AI Automation",
      problem: "Manual marketing processes, low efficiency, scaling challenges",
      solution:
        "Built AI-powered automation system for campaign management and optimization",
      results: {
        efficiency: "+400%",
        leads: "+320%",
        cost: "-45% reduction",
        time: "80% time saved",
      },
      image: "project-2",
    },
    {
      title: "Brand Identity & Visual Design",
      client: "Tech Startup",
      category: "Graphic Design",
      problem:
        "No cohesive brand identity, unprofessional appearance, low brand recognition",
      solution:
        "Created comprehensive brand system, design guidelines, and marketing materials",
      results: {
        recognition: "+500%",
        pitch: "Won major investor backing",
        engagement: "+450%",
        consistency: "100% brand aligned",
      },
      image: "project-3",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark text-light overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable growth and
              transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div ref={ref} className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-20"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid gap-12 items-center ${
                  index % 2 === 0
                    ? "md:grid-cols-[1fr_1fr]"
                    : "md:grid-cols-[1fr_1fr] md:[direction:rtl]"
                }`}
              >
                {/* Content */}
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {study.category}
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-2">
                    {study.title}
                  </h2>
                  <p className="text-accent text-lg font-semibold mb-6">
                    {study.client}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-heading font-semibold text-dark mb-2">
                        The Challenge
                      </h3>
                      <p className="text-dark/70">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-dark mb-2">
                        Our Solution
                      </h3>
                      <p className="text-dark/70">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="font-heading font-semibold text-dark mb-6">
                      Results
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-3xl font-bold text-primary">
                            {value}
                          </div>
                          <p className="text-dark/60 text-sm capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <motion.div
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl aspect-square flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <FiTrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-dark/60 font-medium">
                      Success Story {index + 1}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Average ROI", value: "350%" },
              { label: "Client Retention", value: "95%" },
              { label: "Industries Served", value: "30+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-dark/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-6">
              Let's Create Your Success Story
            </h2>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Start Your Project
              <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
