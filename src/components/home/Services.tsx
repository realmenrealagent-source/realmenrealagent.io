import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  MdDesignServices,
  MdVideoLibrary,
  MdLanguage,
  MdAutoAwesome,
  MdElectricBolt,
  MdDeveloperMode,
} from "react-icons/md";

const Services = () => {
  const { ref, inView } = useScrollAnimation();

  const services = [
    {
      icon: MdAutoAwesome,
      title: "AI Agents",
      description:
        "Intelligent automation powered by advanced AI to streamline your workflows",
      color: "from-blue-500/20 to-blue-600/20",
      badge: "Smart",
      badgeColor: "bg-primary/20 text-primary",
    },
    {
      icon: MdElectricBolt,
      title: "Automation",
      description: "Smart processes that save time and eliminate manual tasks",
      color: "from-yellow-500/20 to-yellow-600/20",
      badge: "Fast",
      badgeColor: "bg-accent/20 text-accent",
    },
    {
      icon: MdDesignServices,
      title: "Graphic Design",
      description:
        "Stunning visuals that capture attention and communicate your brand",
      color: "from-pink-500/20 to-pink-600/20",
      badge: "Creative",
      badgeColor: "bg-secondary/20 text-secondary",
    },
    {
      icon: MdVideoLibrary,
      title: "Video Editing",
      description:
        "Professional video production for marketing and storytelling",
      color: "from-purple-500/20 to-purple-600/20",
      badge: "Cinematic",
      badgeColor: "bg-vibrant/15 text-vibrant",
    },
    {
      icon: MdLanguage,
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technology",
      color: "from-teal-500/20 to-teal-600/20",
      badge: "Reliable",
      badgeColor: "bg-neon/15 text-neon",
    },
    {
      icon: MdDeveloperMode,
      title: "Full-Stack Solutions",
      description: "Complete end-to-end digital solutions for your business",
      color: "from-green-500/20 to-green-600/20",
      badge: "End-to-End",
      badgeColor: "bg-primary/20 text-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative py-20 bg-dark text-light"
      aria-label="Services"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-light/70">
            Comprehensive digital solutions to elevate your brand and business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-6 sm:p-8 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition cursor-pointer`}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide ${service.badgeColor} opacity-80 group-hover:opacity-100 transition`}
                >
                  {service.badge}
                </span>
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-secondary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="relative inline-flex">
                    <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition" />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-secondary opacity-70" />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 animate-ping" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-light/75 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/5 to-secondary/5" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
