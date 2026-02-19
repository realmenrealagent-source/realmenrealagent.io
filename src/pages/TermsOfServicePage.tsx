import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on RMR agents's website for personal, non-commercial transitory viewing only.",
      subsections: [
        {
          content:
            "This is the grant of a license, not a transfer of title, and under this license you may not:",
          items: [
            "Modifying or copying the materials",
            "Using the materials for any commercial purpose or for any public display",
            "Attempting to reverse engineer any software contained on the website",
            "Removing any copyright or other proprietary notations from the materials",
            "Transferring the materials to another person or 'mirroring' the materials on any other server",
          ],
        },
      ],
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on RMR agents's website are provided on an 'as is' basis. RMR agents makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall RMR agents or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RMR agents's website, even if RMR agents or an authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "5. Accuracy of Materials",
      content:
        "The materials appearing on RMR agents's website could include technical, typographical, or photographic errors. RMR agents does not warrant that any of the materials on its website are accurate, complete, or current. RMR agents may make changes to the materials contained on its website at any time without notice.",
    },
    {
      title: "6. Materials on Website",
      content:
        "RMR agents has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RMR agents of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: "7. Modifications",
      content:
        "RMR agents may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which RMR agents is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    },
    {
      title: "9. Contact Information",
      content:
        "If you have any questions about these Terms and Conditions, please contact us at realmenrealagent@gmail.com",
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
              Terms of Service
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
                      {subsection.content && (
                        <p className="text-dark/70">{subsection.content}</p>
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

export default TermsOfServicePage;
