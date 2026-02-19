import { useForm, ValidationError } from "@formspree/react";
import FormSuccess from "./FormSuccess";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrealdjr");

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray bg-white p-6 shadow-sm sm:p-8"
      aria-live="polite"
    >
      <div className="grid gap-6">
        {state.succeeded && <FormSuccess />}
        <div>
          <label className="text-xs font-semibold text-dark">Name</label>
          <input
            name="name"
            type="text"
            className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-dark">Email</label>
          <input
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            placeholder="you@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-dark">
              Project Type
            </label>
            <select
              name="projectType"
              className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            >
              <option>AI Agents</option>
              <option>Automation</option>
              <option>Web Development</option>
              <option>Graphic Design</option>
              <option>Video Editing</option>
              <option>Branding</option>
              <option>UI/UX Design</option>
              <option>Full-Stack Solutions</option>
              <option>Web + Design Combo</option>
              <option>Automation + AI Agents</option>
              <option>Custom (describe below)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-dark">
              Service Package / Budget
            </label>
            <select
              name="budgetRange"
              className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            >
              <option>AI Agents Starter — GH₵8k / $650</option>
              <option>Automation Setup — GH₵12k / $950</option>
              <option>Web Development — GH₵18k / $1.5k</option>
              <option>Graphic Design — GH₵7k / $550</option>
              <option>Video Editing — GH₵6k / $450</option>
              <option>Branding + UI/UX — GH₵14k / $1.1k</option>
              <option>Web + Design Combo — GH₵24k / $1.9k</option>
              <option>Full Stack + Automation — GH₵32k / $2.5k</option>
              <option>Starter Budget — GH₵3k / $250</option>
              <option>Custom Scope — Discuss pricing</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-dark">
            Custom Project (optional)
          </label>
          <input
            name="customProject"
            type="text"
            className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            placeholder="Describe your custom project or extra services"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-dark">Message</label>
          <textarea
            name="message"
            rows={5}
            className="mt-2 w-full rounded-xl border border-gray px-4 py-3 text-sm"
            placeholder="Tell us about your project (min 20 characters)"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-dark transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
