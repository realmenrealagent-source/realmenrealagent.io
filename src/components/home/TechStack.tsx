import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  FaReact,
  FaNode,
  FaDocker,
  FaPython,
  FaFigma,
  FaVideo,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiKubernetes } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const TechStack = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const technologies = [
    { icon: FaPython, name: "Python", category: "AI & Automation" },
    { icon: FaNode, name: "Node.js", category: "Backend" },
    { icon: FaReact, name: "React", category: "Frontend" },
    { icon: SiTypescript, name: "TypeScript", category: "Development" },
    { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
    { icon: FaVideo, name: "Video Editing", category: "Video" },
    { icon: MdDesignServices, name: "Design Tools", category: "Design" },
    { icon: FaFigma, name: "Figma", category: "Design" },
    { icon: FaDocker, name: "Docker", category: "DevOps" },
    { icon: SiKubernetes, name: "Kubernetes", category: "DevOps" },
  ];

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(technologies.map((tech) => tech.category)),
    );
    return ["All", ...unique];
  }, [technologies]);

  const filteredTech = useMemo(() => {
    if (activeCategory === "All") return technologies;
    return technologies.filter((tech) => tech.category === activeCategory);
  }, [activeCategory, technologies]);

  const stats = [
    { label: "Tools", value: "10" },
    { label: "Categories", value: String(categories.length - 1) },
    { label: "Updates", value: "Monthly" },
  ];

  const highlights = [
    { title: "AI + Automation", detail: "Workflow agents and smart triggers" },
    { title: "Modern Web", detail: "React stacks with fast deployment" },
    { title: "Creative Suite", detail: "Design + video production tools" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      className="relative py-20 bg-dark text-light"
      aria-label="Tech Stack"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Technology Stack
          </h2>
          <p className="max-w-2xl mx-auto text-light/70">
            Powered by industry-leading tools and frameworks
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full bg-secondary px-4 py-2 text-[11px] font-semibold text-dark"
                  : "rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold text-light/70 hover:text-light"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center"
        >
          {filteredTech.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer w-full"
                whileHover={{ y: -8 }}
                title={`${tech.name} • ${tech.category}`}
              >
                <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition">
                  <Icon className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition sm:w-12 sm:h-12" />
                  <h3 className="font-heading text-sm font-semibold text-center">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-light/50 text-center mt-1">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <p className="text-xs font-semibold text-light">{stat.value}</p>
              <p className="text-[10px] text-light/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <p className="text-xs font-semibold text-light">{item.title}</p>
              <p className="mt-1 text-[11px] text-light/60">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 hidden items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:flex">
          <div>
            <p className="text-sm font-semibold text-light">
              Want the full stack breakdown?
            </p>
            <p className="text-xs text-light/60">
              We will tailor the tooling to your roadmap.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2 text-xs font-semibold text-dark transition hover:shadow-lg"
          >
            Get Stack Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
