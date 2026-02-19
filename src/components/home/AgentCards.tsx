import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import WebDevCard from "./WebDevCard";
import DesignCard from "./DesignCard";

const AgentCards = () => {
  const { ref, inView } = useScrollAnimation();
  const [showCompare, setShowCompare] = useState(false);

  const compareRows = [
    {
      label: "Focus",
      web: "Product builds, automation, APIs",
      design: "Brand systems, UI/UX, content",
    },
    {
      label: "Ideal For",
      web: "SaaS, dashboards, marketplaces",
      design: "Startups, agencies, rebrands",
    },
    {
      label: "Delivery",
      web: "MVPs in 2-4 weeks",
      design: "Brand kits in 1-3 weeks",
    },
    {
      label: "Outputs",
      web: "Web apps, APIs, integrations",
      design: "Design systems, assets, UI kits",
    },
  ];

  return (
    <section className="bg-light py-12 sm:py-20" aria-label="Agents">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col gap-2 text-center md:text-left sm:mb-10 sm:gap-3"
        >
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <h2 className="font-heading text-xl font-semibold text-dark sm:text-3xl">
              Meet the Agents
            </h2>
            <button
              type="button"
              onClick={() => setShowCompare((prev) => !prev)}
              className="hidden w-full rounded-full border border-dark/10 bg-white px-3 py-1.5 text-[10px] font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary sm:block sm:w-auto sm:px-4 sm:py-2 sm:text-xs"
            >
              {showCompare ? "Hide Comparison" : "Compare Agents"}
            </button>
          </div>
          <p className="max-w-2xl text-[11px] text-dark/70 sm:text-sm">
            Two specialized AI agents aligned on one mission: build exceptional
            digital experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3 sm:gap-6 md:grid-cols-2"
        >
          <WebDevCard />
          <DesignCard />
        </motion.div>
        {showCompare && (
          <div className="mt-6 rounded-3xl border border-gray bg-white p-3 text-left shadow-sm sm:mt-8 sm:p-6">
            <div className="hidden text-xs font-semibold uppercase text-dark/50 md:grid md:grid-cols-[0.9fr_1fr_1fr]">
              <span>Category</span>
              <span>Web Dev Agent</span>
              <span>Design Agent</span>
            </div>
            <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4">
              {compareRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl bg-gray/40 p-3 text-[11px] sm:p-4 sm:text-sm md:grid md:grid-cols-[0.9fr_1fr_1fr] md:items-center"
                >
                  <div className="font-semibold text-dark">{row.label}</div>
                  <div className="mt-2 text-dark/70 md:mt-0">
                    <span className="block text-xs font-semibold uppercase text-dark/50 md:hidden">
                      Web Dev Agent
                    </span>
                    {row.web}
                  </div>
                  <div className="mt-2 text-dark/70 md:mt-0">
                    <span className="block text-xs font-semibold uppercase text-dark/50 md:hidden">
                      Design Agent
                    </span>
                    {row.design}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentCards;
