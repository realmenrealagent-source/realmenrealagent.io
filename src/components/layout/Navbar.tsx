import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiDollarSign,
  FiBriefcase,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import Logo from "../common/Logo";
import "./NavbarGlass.css";

const navItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Case Studies", path: "/case-studies" },
  { id: 3, label: "Pricing", path: "/pricing" },
  { id: 4, label: "Contact", path: "/contact" },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      // Optionally add solid background on scroll
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar-glass w-full z-50 top-0 left-0">
      <nav
        className="navbar-content flex items-center justify-between w-full"
        aria-label="Main navigation"
      >
        {/* Desktop: logo + brand + links */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className="navbar-logo flex items-center gap-2"
            aria-label="Home"
          >
            <Logo variant="icon" size="sm" animated={true} />
            <span className="navbar-brand font-extrabold text-lg tracking-tight text-gray-900 uppercase">
              RMR AGENTS
            </span>
          </Link>
        </div>
        <ul
          className="navbar-links hidden md:flex items-center gap-5"
          role="menubar"
        >
          <li role="none">
            <Link
              to="/"
              className={classNames(
                "navbar-link flex items-center gap-1",
                location.pathname === "/" && "active",
              )}
              role="menuitem"
            >
              <FiHome className="text-xl" />
              <span>Home</span>
              <span className="navbar-underline" />
            </Link>
          </li>
          <li role="none">
            <Link
              to="/case-studies"
              className={classNames(
                "navbar-link flex items-center gap-1",
                location.pathname === "/case-studies" && "active",
              )}
              role="menuitem"
            >
              <FiBriefcase className="text-xl" />
              <span>Case Studies</span>
              <span className="navbar-underline" />
            </Link>
          </li>
          <li role="none">
            <Link
              to="/pricing"
              className={classNames(
                "navbar-link flex items-center gap-1",
                location.pathname === "/pricing" && "active",
              )}
              role="menuitem"
            >
              <FiDollarSign className="text-xl" />
              <span>Pricing</span>
              <span className="navbar-underline" />
            </Link>
          </li>
          <li role="none">
            <Link
              to="/contact"
              className={classNames(
                "navbar-link flex items-center gap-1",
                location.pathname === "/contact" && "active",
              )}
              role="menuitem"
            >
              <FiMail className="text-xl" />
              <span>Contact</span>
              <span className="navbar-underline" />
            </Link>
          </li>
          {/* Resources Dropdown */}
          <li className="relative flex-1 flex justify-end" role="none">
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className="navbar-link flex items-center gap-1 px-3 py-2"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              role="menuitem"
            >
              Resources
              <FiChevronDown
                className={classNames(
                  "transition",
                  isDropdownOpen && "rotate-180",
                )}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white/90 shadow-lg ring-1 ring-black/10 z-50">
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/privacy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>
            )}
          </li>
        </ul>
        {/* Mobile: logo, text, hamburger */}
        <div className="flex items-center w-full md:hidden justify-between">
          <div className="flex items-center gap-2">
            <Logo variant="icon" size="sm" animated={true} />
            <span className="font-extrabold text-base tracking-tight text-gray-900 uppercase">
              RMR AGENTS
            </span>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded-md border border-gray-300 bg-white p-2 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile sidebar */}
      <div
        className={classNames(
          "mobile-sidebar md:hidden text-light transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex items-center justify-start px-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 ml-0"
            onClick={() => setIsOpen(false)}
          >
            <Logo variant="icon" size="sm" animated={true} />
            <span className="font-extrabold text-base tracking-tight text-gray-100 uppercase inline-block align-middle">
              RMR AGENTS
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-light/20 p-2 text-light shadow-[0_0_16px_rgba(236,72,153,0.45)] transition hover:border-secondary hover:text-secondary ml-auto"
          >
            <FiX size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3 px-6 pt-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={classNames(
                "rounded-lg px-3 py-2 text-sm font-medium transition",
                location.pathname === item.path
                  ? "bg-secondary text-dark"
                  : "hover:bg-light/10",
              )}
            >
              {item.label}
            </Link>
          ))}
          {/* Resources in Mobile */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-light/10 transition flex items-center justify-between"
          >
            Resources
            <FiChevronDown
              size={16}
              className={classNames(
                "transition",
                isDropdownOpen ? "rotate-180" : "",
              )}
            />
          </button>
          {isDropdownOpen && (
            <div className="pl-4 space-y-2">
              <Link
                to="/faq"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="block py-2 text-sm text-light/80 hover:text-secondary transition"
              >
                FAQ
              </Link>
              <Link
                to="/privacy"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="block py-2 text-sm text-light/80 hover:text-secondary transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="block py-2 text-sm text-light/80 hover:text-secondary transition"
              >
                Terms of Service
              </Link>
            </div>
          )}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-dark shadow-[0_0_24px_rgba(236,72,153,0.55)] transition hover:bg-accent"
          >
            <FiMessageCircle
              size={16}
              className="transition group-hover:scale-110"
            />
            Quick Chat
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
