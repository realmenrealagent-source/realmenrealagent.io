import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  const { ref, inView } = useScrollAnimation();

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email Us",
      info: "realmenrealagent@gmail.com",
      description: "Send us an email anytime",
      link: "mailto:realmenrealagent@gmail.com",
      color: "primary",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "+233 053 234 4630",
      description: "Chat with us instantly",
      link: "https://wa.me/2330532344630",
      color: "accent",
    },
    {
      icon: FaTelegramPlane,
      title: "Telegram",
      info: "@realmenrealagents",
      description: "Fast and secure messaging",
      link: "#",
      color: "secondary",
    },
    {
      icon: FiPhone,
      title: "Phone",
      info: "+233 053 234 4630",
      description: "Call us during business hours",
      link: "tel:+2330532344630",
      color: "primary",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      link: "#",
      color: "#0A66C2",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      link: "#",
      color: "#E4405F",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      link: "#",
      color: "#181717",
    },
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      link: "#",
      color: "#26A5E4",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM GMT" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM GMT" },
    { day: "Sunday", hours: "Closed" },
  ];

  const quickResponses = [
    {
      icon: FiSend,
      title: "Quick Response",
      description: "We typically respond within 24 hours",
    },
    {
      icon: FiMessageCircle,
      title: "Live Chat",
      description: "Available during business hours",
    },
    {
      icon: FiClock,
      title: "24/7 Emergency",
      description: "Contact via WhatsApp for urgent matters",
    },
  ];

  const officeLocations = [
    {
      city: "Accra",
      country: "Ghana",
      address: "Digital Hub, East Legon, Accra",
      timezone: "GMT (UTC+0)",
    },
  ];

  const faqs = [
    {
      q: "What's the best way to reach you?",
      a: "For urgent matters, WhatsApp is fastest. For detailed inquiries, email works best. For general questions, use the contact form below.",
    },
    {
      q: "How quickly do you respond?",
      a: "We typically respond within 24 hours on business days. WhatsApp messages during business hours get instant replies.",
    },
    {
      q: "Can I schedule a call?",
      a: "Yes! Mention your preferred time in the contact form or WhatsApp message, and we'll coordinate a call.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Absolutely! We offer a free 30-minute consultation to discuss your project needs and how we can help.",
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
              Get In Touch
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto">
              Ready to start your project? We're here to help. Choose your
              preferred way to connect with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20">
        <div ref={ref} className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Contact Methods
            </h2>
            <p className="text-dark/70 text-lg">
              Choose the best way to reach us
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-dark/10 hover:border-primary hover:shadow-xl transition text-center group"
                >
                  <div
                    className={`w-16 h-16 bg-${method.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}
                  >
                    <Icon className={`w-8 h-8 text-${method.color}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-2">
                    {method.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {method.info}
                  </p>
                  <p className="text-sm text-dark/60">{method.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {quickResponses.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-dark mb-6">
                  Our Location
                </h3>
                {officeLocations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-light p-6 rounded-2xl border border-dark/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-dark mb-2">
                          {location.city}, {location.country}
                        </h4>
                        <p className="text-dark/70 mb-2">{location.address}</p>
                        <p className="text-sm text-dark/60">
                          {location.timezone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-dark mb-6">
                  Business Hours
                </h3>
                <div className="bg-light p-6 rounded-2xl border border-dark/10 space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-4 border-b border-dark/10 last:border-0 last:pb-0"
                    >
                      <span className="font-semibold text-dark">
                        {schedule.day}
                      </span>
                      <span className="text-dark/70">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-dark mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 bg-light rounded-full flex items-center justify-center border border-dark/10 hover:border-primary hover:shadow-lg transition group"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-dark/60 group-hover:text-primary transition" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-light">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Find Us on the Map
            </h2>
            <p className="text-dark/70 text-lg">
              Visit us in person or connect virtually
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl h-[400px] border border-dark/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8032619859774!2d-0.1474256!3d5.615195699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RMR AGENTS Location"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold text-dark text-center mb-16"
          >
            Contact FAQs
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-light rounded-2xl p-8 border border-dark/10"
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

      {/* Emergency Contact Banner */}
      <section className="py-16 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaWhatsapp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Need Urgent Support?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              For time-sensitive matters, reach us directly on WhatsApp
            </p>
            <a
              href="https://wa.me/2330532344630"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-dark transition shadow-xl"
            >
              <FaWhatsapp className="w-6 h-6" />
              Chat on WhatsApp Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
