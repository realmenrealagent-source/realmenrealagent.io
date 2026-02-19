import ProjectCard from "./ProjectCard";

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

type ProjectGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

const ProjectGrid = ({ projects, onSelect }: ProjectGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={() => onSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
