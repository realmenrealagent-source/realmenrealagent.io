type ProjectCategory = "all" | "web" | "design";

type ProjectFilterProps = {
  activeFilter: ProjectCategory;
  onChange: (filter: ProjectCategory) => void;
};

const ProjectFilter = ({ activeFilter, onChange }: ProjectFilterProps) => {
  const filters: { label: string; value: ProjectCategory }[] = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Graphic Design", value: "design" },
  ];

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={
            activeFilter === filter.value
              ? "rounded-full bg-accent px-5 py-2 text-xs font-semibold text-dark"
              : "rounded-full border border-gray px-5 py-2 text-xs font-semibold text-dark/70"
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
