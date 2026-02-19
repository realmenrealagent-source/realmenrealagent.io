import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 md:gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="font-heading text-3xl font-semibold text-dark">
            Let’s build together
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-semibold text-secondary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Taking new projects
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              Reply in 24h
            </span>
          </div>
          <p className="text-sm text-dark/70">
            Tell us about your next project and we will match the right agent to
            your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <a
              href="mailto:realmenrealagent@gmail.com"
              className="rounded-full border border-dark/10 px-4 py-2 text-xs font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary"
            >
              Email Us
            </a>
            <a
              href="#contact"
              className="rounded-full border border-dark/10 px-4 py-2 text-xs font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary"
            >
              Quick Chat
            </a>
            <a
              href="#contact"
              className="hidden rounded-full border border-dark/10 px-4 py-2 text-xs font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary sm:inline-flex"
            >
              Book a Call
            </a>
          </div>
          <div className="space-y-3 text-sm text-dark/70">
            <p>realmenrealagent@gmail.com</p>
            <p>Based in Ghana, serving worldwide</p>
            <p>Average response time: 24 hours</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center text-xs sm:grid-cols-3">
            <div className="rounded-2xl border border-gray bg-white px-3 py-2">
              <p className="font-semibold text-dark">120+</p>
              <p className="text-dark/60">Projects</p>
            </div>
            <div className="rounded-2xl border border-gray bg-white px-3 py-2">
              <p className="font-semibold text-dark">24h</p>
              <p className="text-dark/60">Response</p>
            </div>
            <div className="hidden rounded-2xl border border-gray bg-white px-3 py-2 sm:block">
              <p className="font-semibold text-dark">5.0</p>
              <p className="text-dark/60">Avg Rating</p>
            </div>
          </div>
          <div className="hidden rounded-3xl border border-gray bg-white p-5 text-left sm:block">
            <p className="text-xs font-semibold text-dark">Quick FAQs</p>
            <ul className="mt-3 space-y-2 text-xs text-dark/60">
              <li>Typical kickoff time: 48 hours</li>
              <li>Flexible plans: fixed scope or retainer</li>
              <li>Global delivery with async updates</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray bg-white p-6 text-left">
            <p className="text-sm text-dark/70">
              Preferred by brands that want fast delivery and clean,
              future-proof design systems.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
