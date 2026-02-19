import { useEffect, useState } from "react";

const COOKIE_KEY = "rmr_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
    else setChoice(stored);
  }, []);

  const handleConsent = (value: string) => {
    localStorage.setItem(COOKIE_KEY, value);
    setChoice(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-3 bg-dark/95 px-4 py-4 text-light shadow-xl sm:flex-row sm:justify-between sm:px-8">
      <span className="text-sm">
        We use cookies to improve your experience. See our{" "}
        <a
          href="/privacy"
          className="underline text-secondary hover:text-accent"
        >
          Privacy Policy
        </a>
        .
      </span>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-secondary transition"
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </button>
        <button
          className="rounded-full border border-light/30 px-4 py-2 text-xs font-semibold text-light hover:border-secondary hover:text-secondary transition"
          onClick={() => handleConsent("rejected")}
        >
          Reject
        </button>
        <button
          className="rounded-full border border-light/30 px-4 py-2 text-xs font-semibold text-light hover:border-secondary hover:text-secondary transition"
          onClick={() => handleConsent("settings")}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
