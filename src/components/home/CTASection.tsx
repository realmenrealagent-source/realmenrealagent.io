import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

const CTASection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      className="relative py-20 bg-dark text-light overflow-hidden"
      aria-label="Call to Action"
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.2),transparent)]"></div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-light/80 max-w-2xl mx-auto">
              Let our AI agents and creative team bring your vision to life. Get
              started today with a free consultation.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-8 py-4 text-sm font-semibold text-dark transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FiArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.button
              className="inline-flex items-center gap-2 rounded-full border border-light/40 px-8 py-4 text-sm font-semibold text-light hover:border-secondary hover:text-secondary transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMessageCircle className="w-4 h-4" />
              Chat With Us
            </motion.button>
          </motion.div>

          <motion.div
            className="pt-8 text-light/60 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              No credit card required • Free consultation • Instant response
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default CTASection;
