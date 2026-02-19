type Project = {
  id: number;
  title: string;
  category: "web" | "design";
  image: string;
  description: string;
  technologies?: string[];
  tools?: string[];
  client: string;
  date: string;
  link?: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
  onSelect: () => void;
};

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const tags = (project.technologies ?? project.tools ?? []).slice(0, 3);

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative overflow-hidden rounded-2xl border border-gray bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-40 overflow-hidden sm:h-48">
        {project.featured && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary/90 px-3 py-1 text-[10px] font-semibold text-dark">
            Featured
          </span>
        )}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-dark/60 opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full bg-light px-4 py-2 text-[11px] font-semibold text-dark sm:text-xs">
            View Project
          </span>
        </div>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <span className="inline-flex rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
          {project.category === "web" ? "Web" : "Design"}
        </span>
        <h3 className="font-heading text-lg font-semibold text-dark">
          {project.title}
        </h3>
        <p className="text-sm text-dark/70">{project.description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`rounded-full bg-gray px-2 py-1 text-[10px] font-medium text-dark/70 sm:px-3 sm:text-xs ${
                  index > 1 ? "hidden sm:inline-flex" : "inline-flex"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default ProjectCard;
