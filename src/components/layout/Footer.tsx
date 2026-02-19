import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../common/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="block hover:opacity-80 transition">
            <Logo variant="full" size="sm" animated={false} />
          </Link>
          {/* Slogan */}
          <p className="text-base font-heading italic text-secondary">
            "Two Agents, One Mission"
          </p>
          {/* Tagline */}
          <p className="text-sm text-primary/80">
            Web Development • Graphic Design • AI-Powered
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading text-base font-semibold">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-light/80">
            <Link to="/pricing" className="hover:text-secondary transition">
              Pricing Plans
            </Link>
            <Link
              to="/case-studies"
              className="hover:text-secondary transition"
            >
              Case Studies
            </Link>
            <Link to="/about" className="hover:text-secondary transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-secondary transition">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading text-base font-semibold">Resources</h4>
          <div className="flex flex-col gap-2 text-sm text-light/80">
            <Link to="/faq" className="hover:text-secondary transition">
              FAQ
            </Link>
            <Link to="/privacy" className="hover:text-secondary transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-secondary transition">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading text-base font-semibold">Connect</h4>
          <div className="flex items-center gap-4">
            <a
              aria-label="LinkedIn"
              href="#"
              className="text-light/70 transition hover:rotate-3 hover:text-secondary"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              aria-label="GitHub"
              href="#"
              className="text-light/70 transition hover:rotate-3 hover:text-secondary"
            >
              <FaGithub size={18} />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="text-light/70 transition hover:rotate-3 hover:text-secondary"
            >
              <FaInstagram size={18} />
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/2330532344630"
              className="text-light/70 transition hover:rotate-3 hover:text-secondary"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              aria-label="Telegram"
              href="#"
              className="text-light/70 transition hover:rotate-3 hover:text-secondary"
            >
              <FaTelegramPlane size={18} />
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-light/60">Quick signup</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:realmenrealagent@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-light/20 px-3 py-2 text-[11px] font-semibold text-light/80 transition hover:border-secondary hover:text-secondary"
              >
                <FaEnvelope size={12} />
                Email updates
              </a>
              <a
                href="https://wa.me/2330532344630"
                className="inline-flex items-center gap-2 rounded-full border border-light/20 px-3 py-2 text-[11px] font-semibold text-light/80 transition hover:border-secondary hover:text-secondary"
              >
                <FaWhatsapp size={12} />
                WhatsApp alerts
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-light/20 px-3 py-2 text-[11px] font-semibold text-light/80 transition hover:border-secondary hover:text-secondary"
              >
                <FaTelegramPlane size={12} />
                Telegram bot
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-light/10 px-6 py-6 text-xs text-light/60 gap-4 text-center md:text-left">
        <span>
          © {year}{" "}
          <span className="font-extrabold text-primary">RMR agents</span>. All
          rights reserved.
        </span>
        <a
          href="#home"
          className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-dark hover:bg-accent transition"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
