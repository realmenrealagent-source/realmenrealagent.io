import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQPage = () => {
  const { ref, inView } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Services",
      questions: [
        {
          q: "What services do you offer?",
          a: "We provide comprehensive digital solutions including AI automation, web development, graphic design, video editing, and complete branding services. All services can be tailored to your specific needs.",
        },
        {
          q: "Can you work with my existing team?",
          a: "Absolutely! We work seamlessly with existing teams and integrate into your workflows. We can provide consulting, augment your team, or handle projects independently.",
        },
        {
          q: "Do you handle revisions?",
          a: "Yes, all our plans include revision rounds. Starter includes 1 round, Professional includes 3 rounds, and Enterprise offers unlimited revisions.",
        },
        {
          q: "What's your typical project timeline?",
          a: "Timelines vary based on project scope. A typical website takes 4-8 weeks, branding packages take 2-4 weeks, and video production depends on length and complexity.",
        },
      ],
    },
    {
      category: "AI & Automation",
      questions: [
        {
          q: "What exactly is AI automation?",
          a: "AI automation uses intelligent software agents to handle repetitive tasks automatically. This can include customer service, data processing, content creation, scheduling, and much more.",
        },
        {
          q: "Will AI replace my team?",
          a: "No. AI is designed to enhance your team by handling time-consuming tasks, freeing them up for strategic work. It's about augmentation, not replacement.",
        },
        {
          q: "How long does AI implementation take?",
          a: "Implementation varies. Simple automations can be live in 1-2 weeks, while complex systems may take 4-8 weeks depending on integration needs.",
        },
        {
          q: "Is my data safe with AI systems?",
          a: "Yes. We implement enterprise-grade security, data encryption, and compliance with regulations like GDPR. Your data remains private and secure.",
        },
      ],
    },
    {
      category: "Process & Support",
      questions: [
        {
          q: "How does your project process work?",
          a: "We follow a proven 5-step process: 1) Consultation to understand goals, 2) Planning & Design for strategy, 3) Development for execution, 4) Testing & QA for quality, 5) Launch & Support.",
        },
        {
          q: "What support do you provide after launch?",
          a: "All plans include ongoing support. Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support.",
        },
        {
          q: "Can you help with performance optimization?",
          a: "Yes! We provide performance optimization, analytics setup, SEO implementation, and continuous improvement strategies to maximize your investment.",
        },
        {
          q: "Do you provide training for my team?",
          a: "Absolutely. We provide comprehensive training and documentation so your team can manage the systems independently if needed.",
        },
      ],
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          q: "What payment terms do you offer?",
          a: "We offer flexible payment options including monthly subscriptions, quarterly billing, annual plans (with 15% discount), and custom enterprise arrangements.",
        },
        {
          q: "Can I scale my plan up or down?",
          a: "Yes, you can change your plan anytime. Upgrades take effect immediately, while downgrades apply on your next billing cycle.",
        },
        {
          q: "Do you offer payment plans for large projects?",
          a: "Yes. For enterprise projects, we offer custom payment schedules. Contact us to discuss payment arrangements.",
        },
        {
          q: "Is there a contract lock-in period?",
          a: "No. We believe in month-to-month flexibility. You can cancel anytime, though we're confident you'll want to stay!",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What technologies do you use?",
          a: "We work with the latest tech stack including React, Node.js, Python, TypeScript, Tailwind CSS, Docker, Kubernetes, and industry-leading design tools.",
        },
        {
          q: "Do you provide ongoing maintenance?",
          a: "Yes. All plans include security updates and maintenance. Professional and Enterprise plans include proactive monitoring and optimization.",
        },
        {
          q: "Can you migrate my existing systems?",
          a: "Yes, we specialize in migrations. We ensure zero downtime and data integrity throughout the migration process.",
        },
        {
          q: "Do you build for mobile devices?",
          a: "Absolutely. All our web solutions are fully responsive and optimized for mobile, tablet, and desktop experiences.",
        },
      ],
    },
  ];

  const FAQAccordion = ({
    item,
    parentIndex,
  }: {
    item: (typeof faqs)[0]["questions"][0];
    parentIndex: number;
    itemIndex: number;
  }) => {
    const globalIndex = parentIndex * 100 + itemIndex;
    const isExpanded = expandedIndex === globalIndex;

    return (
      <motion.div
        className="border border-dark/10 rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
          className="w-full text-left p-6 bg-white hover:bg-primary/5 transition flex justify-between items-center"
          whileHover={{ backgroundColor: "rgba(79,89,102,0.05)" }}
        >
          <h3 className="font-heading font-semibold text-dark pr-6">
            {item.q}
          </h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
          </motion.div>
        </motion.button>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-primary/2"
        >
          <p className="p-6 text-dark/70">{item.a}</p>
        </motion.div>
      </motion.div>
    );
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and
              pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div ref={ref} className="mx-auto max-w-4xl px-6">
          <div className="space-y-16">
            {faqs.map((faqGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <h2 className="font-heading text-3xl font-bold text-dark mb-8">
                  {faqGroup.category}
                </h2>
                <div className="space-y-4">
                  {faqGroup.questions.map((faq, itemIndex) => (
                    <FAQAccordion
                      key={itemIndex}
                      item={faq}
                      parentIndex={groupIndex}
                      itemIndex={itemIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-dark mb-4">
              Still have questions?
            </h2>
            <p className="text-dark/70 text-lg mb-8">
              Our team is here to help. Reach out and we'll provide detailed
              answers to your specific needs.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
