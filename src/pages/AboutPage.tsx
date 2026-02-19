import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FiAward,
  FiTarget,
  FiUsers,
  FiHeart,
  FiTrendingUp,
  FiZap,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const { ref, inView } = useScrollAnimation();
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0,
  });

  // Counter animation
  useEffect(() => {
    if (inView) {
      const targets = {
        projects: 150,
        clients: 80,
        satisfaction: 99,
        experience: 5,
      };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          experience: Math.floor(targets.experience * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const values = [
    {
      icon: FiTarget,
      title: "Mission-Driven",
      description:
        "We're committed to delivering exceptional digital solutions that transform businesses",
    },
    {
      icon: FiAward,
      title: "Excellence",
      description:
        "Every project receives our highest level of attention and craftsmanship",
    },
    {
      icon: FiUsers,
      title: "Collaboration",
      description:
        "We work closely with our clients as true partners in their success",
    },
    {
      icon: FiHeart,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and approaches to solve problems better",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark text-light overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="font-extrabold text-primary">RMR agents</span>
            </h1>
            <p className="text-xl text-light/80">
              Pioneering AI-driven solutions that blend intelligence with
              creativity to transform digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div ref={ref} className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-dark mb-6">
                Our Story
              </h2>
              <p className="text-dark/70 text-lg mb-4 leading-relaxed">
                RMR agents was founded on a simple belief: that intelligent
                automation and creative excellence should work together, not
                separately.
              </p>
              <p className="text-dark/70 text-lg mb-4 leading-relaxed">
                Our journey began with a vision to bridge the gap between
                AI-powered automation and human creativity. We recognized that
                the most powerful solutions come from combining intelligent
                systems with artistic vision.
              </p>
              <p className="text-dark/70 text-lg leading-relaxed">
                Today, we're a team of passionate experts dedicated to
                delivering transformative digital solutions that drive real
                business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div className="mt-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <p className="text-dark text-center text-lg font-heading italic">
                  "We believe that the future belongs to those who can
                  seamlessly blend artificial intelligence with human
                  creativity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div ref={ref} className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dark/60">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {[
              {
                label: "Projects Completed",
                value: counters.projects,
                suffix: "+",
              },
              { label: "Happy Clients", value: counters.clients, suffix: "+" },
              {
                label: "Satisfaction Rate",
                value: counters.satisfaction,
                suffix: "%",
              },
              {
                label: "Years Experience",
                value: counters.experience,
                suffix: "+",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                year: "2021",
                title: "Foundation",
                description:
                  "Started with a vision to merge AI automation with creative excellence",
              },
              {
                year: "2022",
                title: "First 50 Projects",
                description:
                  "Delivered transformative solutions across web development and design",
              },
              {
                year: "2023",
                title: "Agent Evolution",
                description:
                  "Enhanced our AI agents with advanced automation and creative capabilities",
              },
              {
                year: "2024",
                title: "100+ Clients",
                description:
                  "Expanded our reach and built lasting partnerships globally",
              },
              {
                year: "2025",
                title: "Innovation Leader",
                description:
                  "Recognized as pioneers in AI-driven creative solutions",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading text-xl font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-light p-6 rounded-xl">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-dark/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Agents Section */}
      <section className="py-20 bg-dark text-light">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-center mb-6"
          >
            The AI Agent Advantage
          </motion.h2>
          <p className="text-light/70 text-center text-lg mb-16 max-w-3xl mx-auto">
            Discover why our AI-powered approach delivers superior results
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FiZap,
                title: "Lightning Fast",
                description:
                  "AI-powered automation accelerates project delivery without compromising quality",
              },
              {
                icon: FiTrendingUp,
                title: "Scalable Solutions",
                description:
                  "From small projects to enterprise systems, we scale effortlessly",
              },
              {
                icon: FiCheckCircle,
                title: "Consistent Quality",
                description:
                  "AI ensures adherence to best practices and brand guidelines every time",
              },
              {
                icon: FiClock,
                title: "24/7 Availability",
                description:
                  "Our agents work around the clock to meet your deadlines",
              },
              {
                icon: FiAward,
                title: "Specialized Expertise",
                description:
                  "Each agent is trained specifically in their domain for unmatched proficiency",
              },
              {
                icon: FiUsers,
                title: "Human Touch",
                description:
                  "AI efficiency combined with human creativity and strategic thinking",
              },
            ].map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-light/5 rounded-xl border border-light/10 hover:border-accent transition"
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-light/70">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-light border-y border-dark/5">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-heading text-2xl font-bold text-dark mb-2">
              Trusted By Leading Brands
            </h3>
            <p className="text-dark/60">
              We've partnered with innovative companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechFlow",
              "Creative Studio",
              "Orbit Commerce",
              "Wave Agency",
              "GreenPath",
              "BluePeak Capital",
              "MetricsPro",
              "Nova Labs",
              "Urban Wellness",
              "Fashion Retailer",
              "Digital Ventures",
              "Smart Solutions",
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center font-heading font-bold text-dark/40 hover:text-dark/80 transition text-sm"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-light">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Powered By Cutting-Edge Technology
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Web Agent Stack
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "GraphQL",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-light rounded-lg text-center text-dark/80 font-medium text-sm hover:shadow-md transition"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
                Design Agent Stack
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Figma",
                  "Photoshop",
                  "Illustrator",
                  "After Effects",
                  "Premiere Pro",
                  "InDesign",
                  "Blender",
                  "XD",
                  "Sketch",
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-light rounded-lg text-center text-dark/80 font-medium text-sm hover:shadow-md transition"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Awards & Recognition
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: "2025",
                title: "Best AI Integration",
                org: "Tech Innovation Awards",
              },
              {
                year: "2024",
                title: "Top Creative Agency",
                org: "Design Excellence",
              },
              {
                year: "2024",
                title: "Client Satisfaction Leader",
                org: "Industry Review",
              },
              {
                year: "2023",
                title: "Rising Star Agency",
                org: "Digital Awards",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 text-center hover:shadow-lg transition"
              >
                <FiAward className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-sm text-primary font-semibold mb-2">
                  {award.year}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-dark/60">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Meet Our Specialized Agents
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              Two expert AI agents working in perfect harmony to deliver
              exceptional results
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {[
              {
                name: "Web Development Agent",
                role: "Full-Stack Development & AI Automation",
                image:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop&q=80",
                skills: [
                  "React & Next.js Development",
                  "Backend API Design",
                  "Database Architecture",
                  "AI-Powered Automation",
                  "Cloud Infrastructure",
                  "Performance Optimization",
                ],
                stats: { projects: "80+", rating: "4.9/5", clients: "45+" },
              },
              {
                name: "Graphic Design Agent",
                role: "Creative Design & Visual Production",
                image:
                  "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&h=600&fit=crop&q=80",
                skills: [
                  "Brand Identity Design",
                  "UI/UX Design",
                  "Video Editing & Motion Graphics",
                  "Social Media Content",
                  "Print Design",
                  "3D Visualization",
                ],
                stats: { projects: "70+", rating: "5.0/5", clients: "35+" },
              },
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-light rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-2xl font-bold mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-accent text-lg font-semibold">
                      {agent.role}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-heading text-lg font-semibold text-dark mb-4">
                    Core Expertise
                  </h4>
                  <div className="space-y-3 mb-6">
                    {agent.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FiCheckCircle
                          className="text-accent flex-shrink-0"
                          size={18}
                        />
                        <p className="text-dark/70">{skill}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dark/10">
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-primary">
                        {agent.stats.projects}
                      </div>
                      <div className="text-xs text-dark/60">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-secondary">
                        {agent.stats.rating}
                      </div>
                      <div className="text-xs text-dark/60">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-accent">
                        {agent.stats.clients}
                      </div>
                      <div className="text-xs text-dark/60">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how our AI agents can help you achieve your goals
              faster and better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition"
              >
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
