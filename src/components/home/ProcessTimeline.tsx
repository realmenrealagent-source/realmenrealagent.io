import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  FiMessageSquare,
  FiEdit,
  FiCode,
  FiCheck,
  FiSend,
} from "react-icons/fi";

const ProcessTimeline = () => {
  const { ref, inView } = useScrollAnimation();

  const steps = [
    {
      icon: FiMessageSquare,
      title: "Consultation",
      description:
        "We listen to your goals and understand your vision completely",
      duration: "1-2 days",
      deliverables: ["Discovery call", "Goals & scope", "Success criteria"],
    },
    {
      icon: FiEdit,
      title: "Planning & Design",
      description: "Strategic planning and beautiful design mockups",
      duration: "3-5 days",
      deliverables: ["Wireframes", "Visual direction", "Design system"],
    },
    {
      icon: FiCode,
      title: "Development",
      description:
        "Building scalable, efficient solutions with cutting-edge tech",
      duration: "1-3 weeks",
      deliverables: ["Core build", "Integrations", "Optimizations"],
    },
    {
      icon: FiCheck,
      title: "Testing & QA",
      description: "Rigorous testing to ensure excellence and reliability",
      duration: "2-4 days",
      deliverables: ["QA checklist", "Bug fixes", "Performance pass"],
    },
    {
      icon: FiSend,
      title: "Launch & Support",
      description: "Seamless deployment with ongoing support and optimization",
      duration: "Ongoing",
      deliverables: ["Launch day", "Monitoring", "Improvements"],
    },
  ];

  return (
    <section className="relative py-20 bg-light" aria-label="Our Process">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark mb-4">
            Our Process
          </h2>
          <p className="max-w-2xl mx-auto text-dark/70">
            A proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-dark/10 rounded-full"></div>
          <motion.div
            className="hidden lg:block absolute top-1/3 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.2 }}
          />
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-1 bg-dark/10 rounded-full"></div>
          <motion.div
            className="lg:hidden absolute left-6 top-6 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.2 }}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Circle node */}
                  <div className="flex flex-col items-center text-center sm:text-left sm:items-start lg:items-center lg:text-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 relative z-10 sm:w-16 sm:h-16 sm:mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center sm:text-left lg:text-center">
                      <span className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-[10px] font-semibold uppercase text-secondary sm:text-xs">
                        {step.duration}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-dark mt-3 mb-2 sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="text-dark/60 text-xs leading-relaxed sm:text-sm">
                        {step.description}
                      </p>
                      <ul className="mt-3 hidden grid gap-2 text-xs text-dark/60 sm:grid">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connector arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-1 w-8 h-0.5 bg-accent/30"></div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 hidden items-center justify-between gap-6 rounded-3xl border border-primary/10 bg-white/80 p-6 shadow-sm sm:flex">
            <div>
              <p className="text-sm font-semibold text-dark">
                Ready to start your project?
              </p>
              <p className="text-xs text-dark/60">
                Get a tailored timeline within 24 hours.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-dark transition hover:shadow-lg"
            >
              Request a Timeline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
