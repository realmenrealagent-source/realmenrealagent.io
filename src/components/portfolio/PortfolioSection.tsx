import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

type ProjectCategory = "all" | "web" | "design";

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

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = projectsData.projects as Project[];
  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Avg. Timeline", value: "3-5 weeks" },
    { label: "Industries Served", value: "12" },
  ];

  return (
    <section id="portfolio" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
          <h2 className="font-heading text-3xl font-semibold text-dark">
            Our Work
          </h2>
          <p className="text-sm text-dark/70">Real projects, real results</p>
        </div>
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading text-lg font-semibold text-dark">
              Featured Projects
            </h3>
            <span className="rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-semibold text-secondary">
              Top picks
            </span>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  project={project}
                  onSelect={() => setSelectedProject(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ProjectFilter activeFilter={activeFilter} onChange={setActiveFilter} />
        <ProjectGrid
          projects={filteredProjects}
          onSelect={setSelectedProject}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-dark">{stat.value}</p>
              <p className="mt-1 text-[11px] text-dark/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 hidden items-center justify-between gap-4 rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm sm:flex">
          <div>
            <p className="text-sm font-semibold text-dark">
              Want a project like this?
            </p>
            <p className="text-xs text-dark/60">
              Let us map your next launch in 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-xs font-semibold text-dark transition hover:shadow-lg"
          >
            Start a Project
          </a>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default PortfolioSection;
