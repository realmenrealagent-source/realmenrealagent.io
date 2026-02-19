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

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 px-4 py-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close project"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-dark/10 px-3 py-2 text-xs font-semibold text-dark sm:right-4 sm:top-4"
        >
          Close
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover sm:h-56"
        />
        <div className="space-y-4 p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
              {project.category === "web"
                ? "Web Development"
                : "Graphic Design"}
            </span>
            <span className="text-xs text-dark/60">{project.date}</span>
          </div>
          <h3 className="font-heading text-2xl font-semibold text-dark">
            {project.title}
          </h3>
          <p className="text-sm text-dark/70">{project.description}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {(project.technologies ?? project.tools ?? []).map((item) => (
              <span
                key={item}
                className="rounded-full bg-gray px-3 py-1 text-dark/70"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="text-sm text-dark/60">Client: {project.client}</div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold text-dark"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
