import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FiCheck } from "react-icons/fi";

const FeaturesGrid = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      title: "AI-Driven Automation",
      description: "Intelligent systems that work smarter and faster",
      detail: "Automate ops, support, and reporting workflows.",
    },
    {
      title: "24/7 Availability",
      description: "Always-on support powered by AI agents",
      detail: "Round-the-clock monitoring and response.",
    },
    {
      title: "Custom Solutions",
      description: "Tailored to your specific business needs",
      detail: "Built to your stack, team, and goals.",
    },
    {
      title: "Scalable Architecture",
      description: "Grows with your business, no limits",
      detail: "Infrastructure that scales with demand.",
    },
    {
      title: "Data Security",
      description: "Enterprise-grade protection for your data",
      detail: "Best practices, backups, and access control.",
    },
    {
      title: "Real-time Analytics",
      description: "Deep insights into your projects and performance",
      detail: "Live dashboards and KPI tracking.",
    },
    {
      title: "Dedicated Support",
      description: "Expert team ready to assist you anytime",
      detail: "Human + AI support when it matters.",
    },
    {
      title: "Rapid Deployment",
      description: "Get online faster with optimized workflows",
      detail: "Ship faster with automated pipelines.",
    },
  ];

  const stats = [
    { label: "Avg. Launch", value: "21 days" },
    { label: "Client NPS", value: "+72" },
    { label: "Uptime", value: "99.9%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 bg-primary/5" aria-label="Features">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-dark/70">
            We stand out with innovation, reliability, and exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-primary/20 hover:border-secondary/50 hover:bg-white transition cursor-pointer sm:p-6"
              whileHover={{
                y: -5,
                boxShadow: "0 15px 35px rgba(236, 72, 153, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 group-hover:bg-accent/30 transition sm:w-10 sm:h-10">
                  <FiCheck className="w-5 h-5 text-accent sm:w-6 sm:h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-dark mb-1">
                  {feature.title}
                </h3>
                <p className="text-dark/60 text-xs sm:text-sm">
                  {feature.description}
                </p>
                {activeIndex === index && (
                  <p className="mt-2 text-[11px] text-dark/60 sm:text-xs">
                    {feature.detail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/10 bg-white/70 px-4 py-3 text-center shadow-sm"
            >
              <p className="text-xs font-semibold text-dark sm:text-sm">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] text-dark/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 hidden items-center justify-between gap-4 rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm sm:flex">
          <div>
            <p className="text-sm font-semibold text-dark">
              Ready to scale with AI?
            </p>
            <p className="text-xs text-dark/60">
              Get a plan tailored to your goals.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-dark transition hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
