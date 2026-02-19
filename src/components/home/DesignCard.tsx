const DesignCard = () => {
  const skills = ["Branding", "UI/UX", "Photoshop", "Illustrator", "Figma"];
  const scrollSkills = [...skills, ...skills];
  return (
    <article
      id="design-agent"
      className="group rounded-3xl border border-gray bg-white p-3 shadow-sm transition hover:scale-[1.02] hover:border-secondary hover:shadow-xl sm:p-8"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-6 sm:gap-3">
        <div className="text-2xl sm:text-4xl">🎨</div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-semibold text-secondary sm:px-3 sm:py-1 sm:text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            </span>
            Available
          </span>
          <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-semibold text-secondary sm:px-3 sm:py-1 sm:text-xs">
            Design Agent
          </span>
        </div>
      </div>
      <h3 className="font-heading text-base font-semibold text-dark sm:text-2xl">
        Brand & UI Visionary
      </h3>
      <p className="mt-1.5 text-[11px] text-dark/70 sm:mt-2 sm:text-sm">
        Visual systems that capture attention, elevate brands, and guide users.
      </p>
      <details className="mt-2.5 hidden sm:block sm:mt-4">
        <summary className="cursor-pointer text-[10px] font-semibold uppercase text-secondary sm:text-xs">
          More about this agent
        </summary>
        <p className="mt-2 text-[11px] text-dark/70 sm:text-sm">
          Builds cohesive brand identities and UI kits that translate perfectly
          into production.
        </p>
      </details>
      <div className="mt-3 hidden marquee sm:block sm:mt-5">
        <div className="marquee-track">
          {scrollSkills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="rounded-full bg-gray px-2 py-0.5 text-[10px] font-medium text-dark/70 sm:px-3 sm:py-1 sm:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 hidden rounded-2xl border border-gray/70 bg-gray/40 p-2.5 text-[11px] text-dark/70 sm:block sm:mt-6 sm:p-4 sm:text-sm">
        <p className="font-semibold text-dark">Highlights</p>
        <ul className="mt-2 grid gap-2">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Brand systems for teams and startups
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            UI kits ready for dev handoff
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Motion-ready assets for marketing
          </li>
        </ul>
      </div>
      <div className="mt-4 hidden grid-cols-1 gap-2 text-[11px] sm:grid sm:mt-6 sm:grid-cols-2 sm:gap-4 sm:text-sm">
        <div>
          <p className="text-dark/60">Projects</p>
          <p className="font-semibold text-dark">90+</p>
        </div>
        <div>
          <p className="text-dark/60">Years</p>
          <p className="font-semibold text-dark">5+</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
        <a
          href="#portfolio"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent px-3 py-1.5 text-[11px] font-semibold text-accent transition group-hover:bg-accent group-hover:text-dark sm:w-auto sm:px-5 sm:py-2 sm:text-sm"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-secondary/60 px-3 py-1.5 text-[11px] font-semibold text-secondary transition group-hover:border-secondary group-hover:text-dark group-hover:bg-secondary sm:w-auto sm:px-5 sm:py-2 sm:text-sm"
        >
          Book a Call
        </a>
      </div>
      <div className="mt-2.5 hidden flex-wrap gap-2 text-[10px] sm:flex sm:mt-4 sm:gap-3 sm:text-xs">
        <a
          href="mailto:realmenrealagent@gmail.com"
          className="w-full rounded-full border border-dark/10 px-4 py-2 text-center font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary sm:w-auto"
        >
          Email
        </a>
        <a
          href="#contact"
          className="w-full rounded-full border border-dark/10 px-4 py-2 text-center font-semibold text-dark/70 transition hover:border-secondary hover:text-secondary sm:w-auto"
        >
          Quick Chat
        </a>
      </div>
    </article>
  );
};

export default DesignCard;
