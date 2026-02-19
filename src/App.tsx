import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BackToTop from "./components/common/BackToTop";
import CookieConsent from "./components/common/CookieConsent";
import Hero from "./components/home/Hero";
import AgentCards from "./components/home/AgentCards";
import Services from "./components/home/Services";
import StatsCounter from "./components/home/StatsCounter";
import TechStack from "./components/home/TechStack";
import ProcessTimeline from "./components/home/ProcessTimeline";
import FeaturesGrid from "./components/home/FeaturesGrid";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import ContactSection from "./components/contact/ContactSection";
import CTASection from "./components/home/CTASection";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RMR agents",
  slogan: "Intelligent Creativity at Scale",
  description:
    "Transform your digital presence with AI-driven automation, stunning visual design, professional video production, and modern web solutions.",
  areaServed: "Worldwide",
  knowsAbout: [
    "AI Automation",
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Branding",
    "UI/UX",
  ],
};

const HomePage = () => (
  <>
    <Helmet>
      <title>RMR agents - AI Automation, Web & Design Solutions</title>
      <meta
        name="description"
        content="Transform your digital presence with AI automation, web development, graphic design, and video editing services from RMR agents."
      />
      <meta
        property="og:title"
        content="RMR agents - Intelligent Creativity at Scale"
      />
      <meta
        property="og:description"
        content="AI-driven automation, stunning design, professional video, and modern web solutions combined."
      />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
    <main className="bg-light">
      <Hero />
      <Services />
      <AgentCards />
      <StatsCounter />
      <ProcessTimeline />
      <FeaturesGrid />
      <PortfolioSection />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  </>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
      <Toaster position="bottom-center" />
      <BackToTop />
      <CookieConsent />
    </Layout>
  );
};

export default App;
