import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  projectType: "web" | "design" | "both";
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const teaser = testimonial.text.slice(0, 120);
  const isLong = testimonial.text.length > 120;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="h-full rounded-3xl border border-gray bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          loading="lazy"
        />
        <div>
          <h3 className="font-heading text-base font-semibold text-dark">
            {testimonial.name}
          </h3>
          <p className="text-xs text-dark/60">{testimonial.company}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-accent">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <p className="mt-4 text-sm italic text-dark/70">
        {isExpanded || !isLong ? testimonial.text : `${teaser}...`}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-3 text-[11px] font-semibold text-secondary"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
      <span className="mt-4 inline-flex rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
        {testimonial.projectType.toUpperCase()}
      </span>
    </article>
  );
};

export default TestimonialCard;
