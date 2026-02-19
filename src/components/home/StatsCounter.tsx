import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const StatsCounter = () => {
  const { ref, inView } = useScrollAnimation();

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      description: "Delivered across various industries",
      progress: 92,
      tooltip: "500+ launches across SaaS, retail, and creative brands",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
      progress: 98,
      tooltip: "Repeat clients and high NPS across long-term engagements",
    },
    {
      value: "50+",
      label: "Happy Clients",
      description: "From startups to enterprises",
      progress: 84,
      tooltip: "Global partners spanning startups, agencies, and SMEs",
    },
    {
      value: "24/7",
      label: "AI-Powered Support",
      description: "Always available when you need us",
      progress: 100,
      tooltip: "Always-on monitoring and rapid response workflows",
    },
  ];

  const logos = [
    "NovaLabs",
    "PixelForge",
    "Atlas",
    "Brightly",
    "Northwind",
    "Quantum",
  ];

  const badges = [
    { title: "Top Rated", detail: "5.0 avg reviews" },
    { title: "Fast Delivery", detail: "2-4 week sprints" },
    { title: "Trusted", detail: "50+ partners" },
    { title: "Secure", detail: "Best practices" },
  ];

  const Counter = ({ target }: { target: string }) => {
    const numericValue = parseInt(target);
    const suffix = target.replace(/\d/g, "");

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl font-bold text-accent"
        >
          {inView && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {numericValue}
              {suffix}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-20 bg-primary/10" aria-label="Statistics">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark mb-4">
            Our Impact
          </h2>
          <p className="max-w-2xl mx-auto text-dark/70">
            Proven track record of excellence and innovation
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:bg-white/70 hover:border-secondary/50 transition cursor-pointer sm:p-8"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              title={stat.tooltip}
            >
              <Counter target={stat.value} />
              <h3 className="font-heading text-base font-semibold text-dark mt-4 mb-2 sm:text-lg">
                {stat.label}
              </h3>
              <p className="text-dark/60 text-xs sm:text-sm">
                {stat.description}
              </p>
              <div className="mt-4 h-2 w-full rounded-full bg-dark/5">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={inView ? { width: `${stat.progress}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 marquee">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="rounded-full bg-white/70 px-4 py-2 text-[11px] font-semibold text-dark/70 shadow-sm sm:text-xs"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-2xl border border-primary/10 bg-white/70 p-3 text-center shadow-sm"
            >
              <p className="text-xs font-semibold text-dark sm:text-sm">
                {badge.title}
              </p>
              <p className="mt-1 text-[11px] text-dark/60 sm:text-xs">
                {badge.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
