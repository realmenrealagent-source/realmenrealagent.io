import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimonialsData from "../../data/testimonials.json";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  projectType: "web" | "design" | "both";
};

const TestimonialsSection = () => {
  const testimonials = testimonialsData.testimonials as Testimonial[];
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "design" | "both"
  >("all");

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "all") return testimonials;
    return testimonials.filter((item) => item.projectType === activeFilter);
  }, [activeFilter, testimonials]);

  const stats = [
    { label: "Avg rating", value: "4.9/5" },
    { label: "Repeat clients", value: "68%" },
    { label: "Response time", value: "< 24h" },
  ];

  return (
    <section className="bg-gray/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
          <h2 className="font-heading text-3xl font-semibold text-dark">
            Client Stories
          </h2>
          <p className="text-sm text-dark/70">
            The partnerships that keep us inspired.
          </p>
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {[
            { label: "All", value: "all" },
            { label: "Web", value: "web" },
            { label: "Design", value: "design" },
            { label: "Both", value: "both" },
          ].map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() =>
                setActiveFilter(filter.value as typeof activeFilter)
              }
              className={
                activeFilter === filter.value
                  ? "rounded-full bg-secondary px-4 py-2 text-[11px] font-semibold text-dark"
                  : "rounded-full border border-dark/10 px-4 py-2 text-[11px] font-semibold text-dark/70"
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/10 bg-white/70 px-4 py-3 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-dark">{stat.value}</p>
              <p className="mt-1 text-[11px] text-dark/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {filteredTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 hidden items-center justify-between gap-4 rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm sm:flex">
          <div>
            <p className="text-sm font-semibold text-dark">
              Want results like these?
            </p>
            <p className="text-xs text-dark/60">
              We will map your project plan within 24 hours.
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
    </section>
  );
};

export default TestimonialsSection;
