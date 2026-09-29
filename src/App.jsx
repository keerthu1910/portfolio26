import React from "react";

const projects = [
  {
    title: "Inventory Management System (Dashboard & Analytics)",
    description:
      "Developed a full-stack inventory management system to manage product lifecycle including creation, updates, and deletion. Designed features for tracking product details such as category, pricing, stock levels, and update history. Implemented dynamic search, filtering, and sorting to efficiently handle large product datasets. Highlighted low-stock items to improve inventory awareness and integrated dashboard analytics with chart-based visualizations to present category-wise statistics and trends. Displayed recently added products for quick monitoring and updates.Designed with a fully responsive layout to ensure seamless usage across mobile, tablet, and desktop devices.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    live: "https://inventory-management-navy-phi.vercel.app/",
  },
  {
    title: "Application Tracker (Kanban Workflow System for Job Applications)",
    description:
      "Developed a Kanban-based job tracking application to manage and visualize application progress across stages such as Applied, Interview Scheduled, Offer Accepted, and Rejected. Implemented drag-and-drop functionality to seamlessly transition applications between stages, improving workflow efficiency. Integrated dynamic aggregation logic to display real-time counts and built graphical representations using charts to provide clear insights into application status distribution.Designed with a fully responsive layout to ensure seamless usage across mobile, tablet, and desktop devices.",
    tech: ["React", "Tailwind CSS"],
    live: "https://applicationtracker-eta.vercel.app/",
  },
  {
    title: "Timeline Builder (Personal Event Visualization Tool)",
    description:
      "Developed a timeline-based application to organize and visualize personal events in chronological order. Enabled users to create and categorize events (Work, Personal, Education) with titles and descriptions. Designed a dynamic timeline UI that displays events from most recent to oldest, improving readability and user experience. Implemented category-based filtering to allow users to quickly view specific event types.Designed with a fully responsive layout to ensure seamless usage across mobile, tablet, and desktop devices.",
    tech: ["React", "Tailwind CSS"],
    live: "https://timeline-builder-zeta.vercel.app/",
  },
];

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* HERO */}
      <section className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold">KEERTHANA S</h1>
        <p className="mt-3 text-lg text-gray-600">
          Frontend Developer | MERN Stack
        </p>
        <p className="mt-4 max-w-xl">
          Software Developer with 2+ years of experience in building web and
          mobile applications using React.js, JavaScript (ES6), Flutter,
          Node.js, Express.js, and MongoDB.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            className="border bg-blue-600 text-white px-5 py-2 rounded"
            onClick={() => {
              window.open("https://github.com/keerthu1910", "_target");
            }}
          >
            GitHub
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-5 py-2">
        <h2 className="text-2xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="text-sm text-justify text-gray-600 mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-5 flex gap-4 text-sm">
                <a
                  href={project.live}
                  className="text-blue-600 font-medium text-xl"
                >
                  Live →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-5 mt-5">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "Git",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-white border px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-5 mt-5">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <p>Email: keerthanas1910@gmail.com</p>
        <br />
        <h2 className="text-2xl font-bold mb-6">LinknedIn</h2>
        <p
          className="hover:cursor-pointer text-blue-600 font-bold"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/keerthana-selvaraj-766209180/",
              "_target",
            )
          }
        >
          Visit Profile
        </p>
      </section>
    </div>
  );
}
