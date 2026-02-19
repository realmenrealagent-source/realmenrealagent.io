import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FiCheck,
  FiArrowRight,
  FiDollarSign,
  FiLock,
  FiShield,
  FiZap,
  FiClock,
  FiAward,
} from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const { ref, inView } = useScrollAnimation();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and prototypes",
      monthlyPrice: 999,
      annualPrice: 849,
      features: [
        "Basic web development",
        "Logo & brand design",
        "Social media graphics",
        "Email support",
        "1 revision round",
        "Standard delivery",
        "Up to 5 pages/designs",
        "Monthly analytics report",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 2499,
      annualPrice: 2124,
      features: [
        "Full-stack web development",
        "Complete branding package",
        "Graphic design suite",
        "Video editing & production",
        "Priority support",
        "3 revision rounds",
        "Faster delivery",
        "Performance optimization",
        "Up to 20 pages/designs",
        "Weekly analytics report",
        "SEO optimization",
        "Mobile app development",
      ],
      cta: "Most Popular",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Complete digital transformation",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Custom AI solutions",
        "Advanced automation",
        "Full design suite",
        "4K video production",
        "24/7 dedicated support",
        "Unlimited revisions",
        "SLA guarantee",
        "Strategic consulting",
        "Unlimited pages/designs",
        "Daily analytics report",
        "Multi-platform development",
        "White-label solutions",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  const addOns = [
    {
      name: "Rush Delivery",
      description: "Get your project delivered 2x faster",
      price: "+$500",
      icon: FiZap,
    },
    {
      name: "Extra Revisions",
      description: "5 additional revision rounds",
      price: "+$300",
      icon: FiClock,
    },
    {
      name: "Premium Support",
      description: "24/7 priority support & dedicated manager",
      price: "+$400",
      icon: FiShield,
    },
    {
      name: "Training Session",
      description: "2-hour onboarding & training for your team",
      price: "+$250",
      icon: FiAward,
    },
  ];

  const guarantees = [
    {
      title: "100% Satisfaction",
      description: "Love it or get a full refund within 30 days",
      icon: FiShield,
    },
    {
      title: "Secure Payment",
      description: "Bank-level encryption & secure transactions",
      icon: FiLock,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges",
      icon: FiDollarSign,
    },
  ];

  const faqs = [
    {
      q: "Can I change my plan anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
    },
    {
      q: "What payment options do you accept?",
      a: "We accept all major credit cards, bank transfers, and PayPal for your convenience.",
    },
    {
      q: "Do you offer discounts for annual billing?",
      a: "Yes! Annual plans come with 15% discount. Contact us for more details.",
    },
    {
      q: "What's included in custom enterprise packages?",
      a: "Enterprise packages are fully customized based on your specific needs. We'll discuss your requirements and create a tailored solution.",
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
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto mb-10">
              Choose the perfect plan for your business. No hidden fees, cancel
              anytime.
            </p>

            {/* Monthly/Annual Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-lg ${!isAnnual ? "text-white font-semibold" : "text-light/60"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-light/20 rounded-full transition"
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-accent rounded-full"
                  animate={{ left: isAnnual ? "30px" : "4px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`text-lg ${isAnnual ? "text-white font-semibold" : "text-light/60"}`}
              >
                Annual
              </span>
              <span className="px-3 py-1 bg-accent text-dark text-sm font-semibold rounded-full">
                Save 15%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-light border-b border-dark/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-dark/60">
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div ref={ref} className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => {
              const price = plan.monthlyPrice
                ? isAnnual
                  ? plan.annualPrice
                  : plan.monthlyPrice
                : null;
              const displayPrice = price ? `$${price}` : "Custom";
              const period = price
                ? isAnnual
                  ? "/year"
                  : "/month"
                : "pricing";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 transition ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl transform scale-105"
                      : "bg-white border border-dark/10 hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-dark px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  )}

                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p
                    className={
                      plan.highlighted ? "text-white/80" : "text-dark/60"
                    }
                  >
                    {plan.description}
                  </p>

                  <div className="my-8">
                    <div className="font-heading text-4xl font-bold">
                      {displayPrice}
                    </div>
                    <div
                      className={
                        plan.highlighted ? "text-white/70" : "text-dark/60"
                      }
                    >
                      {period}
                    </div>
                    {isAnnual && plan.monthlyPrice && (
                      <div className="mt-2 text-sm">
                        <span
                          className={
                            plan.highlighted
                              ? "text-white/60 line-through"
                              : "text-dark/40 line-through"
                          }
                        >
                          ${plan.monthlyPrice * 12}
                        </span>
                        <span
                          className={
                            plan.highlighted
                              ? "text-accent ml-2 font-semibold"
                              : "text-accent ml-2 font-semibold"
                          }
                        >
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}
                        </span>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/#contact"
                    className={`block w-full py-3 rounded-full font-semibold mb-8 transition text-center ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-accent hover:text-dark"
                        : "bg-primary text-white hover:bg-secondary"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <FiCheck
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.highlighted ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span
                          className={
                            plan.highlighted ? "text-white/90" : "text-dark/70"
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Powerful Add-Ons
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              Enhance any plan with these premium features
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-light p-6 rounded-xl border border-dark/10 hover:border-primary/30 hover:shadow-lg transition text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-dark/60 mb-4">
                    {addon.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {addon.price}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-light">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Compare Plans
            </h2>
            <p className="text-dark/70 text-lg">
              Find the perfect fit for your business needs
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-left p-6 font-heading">Features</th>
                  <th className="text-center p-6 font-heading">Starter</th>
                  <th className="text-center p-6 font-heading bg-primary">
                    Professional
                  </th>
                  <th className="text-center p-6 font-heading">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Web Development",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Graphic Design",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Video Editing",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "AI Automation",
                    starter: false,
                    pro: false,
                    enterprise: true,
                  },
                  {
                    feature: "Mobile App Dev",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "SEO Optimization",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Pages/Designs",
                    starter: "Up to 5",
                    pro: "Up to 20",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Revision Rounds",
                    starter: "1",
                    pro: "3",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Support",
                    starter: "Email",
                    pro: "Priority",
                    enterprise: "24/7 Dedicated",
                  },
                  {
                    feature: "Delivery Time",
                    starter: "Standard",
                    pro: "Fast",
                    enterprise: "Custom SLA",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-light/50" : ""}
                  >
                    <td className="p-4 font-medium text-dark">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <FiCheck className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-dark/30">—</span>
                        )
                      ) : (
                        <span className="text-dark/70">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <FiCheck className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-dark/30">—</span>
                        )
                      ) : (
                        <span className="text-dark/70 font-semibold">
                          {row.pro}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <FiCheck className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-dark/30">—</span>
                        )
                      ) : (
                        <span className="text-dark/70">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white border-y border-dark/5">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-dark mb-6">
              Secure Payment Methods We Accept
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[
                "Visa",
                "Mastercard",
                "PayPal",
                "Stripe",
                "Bank Transfer",
                "Crypto",
              ].map((method, index) => (
                <div
                  key={index}
                  className="font-heading font-bold text-dark/50 text-lg"
                >
                  {method}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-dark/70 text-lg">
              Real feedback from businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Ahmed Mohamed",
                company: "TechFlow",
                plan: "Professional",
                quote:
                  "The Professional plan has everything we need. ROI was visible within the first month!",
                rating: 5,
              },
              {
                name: "Sara Khan",
                company: "Creative Studio",
                plan: "Starter",
                quote:
                  "Perfect for our startup. Great value, exceptional quality, and amazing support.",
                rating: 5,
              },
              {
                name: "David Lin",
                company: "Orbit Commerce",
                plan: "Enterprise",
                quote:
                  "Custom enterprise solution transformed our entire digital presence. Worth every penny.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-dark/80 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-dark/10 pt-4">
                  <div>
                    <div className="font-heading font-semibold text-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-dark/60">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {testimonial.plan}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-dark/10"
              >
                <h3 className="font-heading text-lg font-bold text-dark mb-3">
                  {faq.q}
                </h3>
                <p className="text-dark/70">{faq.a}</p>
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
              Join 80+ businesses already growing with RMR AGENTS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-dark transition"
              >
                Start Your Project
                <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/2330532344630"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-2">30 Days</div>
                <div className="text-white/80">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-white/80">Annual Discount</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
