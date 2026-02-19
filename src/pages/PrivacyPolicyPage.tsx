import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "REALMENREALAGENTS ('we', 'us', 'our', or 'Company') operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
    },
    {
      title: "Information Collection and Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our Service to you.",
      subsections: [
        {
          title: "Types of Data Collected",
          items: [
            "Personal Data: Name, email address, phone number, cookies, usage data",
            "Usage Data: Browser type, IP address, pages visited, time and date of visits",
            "Device Information: Device type, operating system, device identifiers",
          ],
        },
      ],
    },
    {
      title: "Use of Data",
      content:
        "REALMENREALAGENTS uses the collected data for various purposes:",
      subsections: [
        {
          items: [
            "To provide and maintain our Service",
            "To notify you about changes to our Service",
            "To allow you to participate in interactive features",
            "To provide customer support",
            "To gather analysis or valuable information so we can improve our Service",
            "To monitor the usage of our Service",
            "To detect, prevent and address technical issues",
          ],
        },
      ],
    },
    {
      title: "Security of Data",
      content:
        "The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at realmenrealagent@gmail.com",
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
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-light/80">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="font-heading text-3xl font-bold text-dark">
                  {section.title}
                </h2>
                <p className="text-dark/70 leading-relaxed">
                  {section.content}
                </p>
                {section.subsections &&
                  section.subsections.map((subsection, idx) => (
                    <div key={idx} className="ml-6 space-y-3">
                      {"title" in subsection && subsection.title && (
                        <h3 className="font-heading font-semibold text-dark">
                          {subsection.title}
                        </h3>
                      )}
                      {subsection.items && (
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex gap-3 text-dark/70"
                            >
                              <span className="text-primary font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
