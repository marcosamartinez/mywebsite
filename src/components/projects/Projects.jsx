import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Authentication and Testing",
      description:
        "Created a secure web API implementing authentication workflows, password encryption, and access control middleware. Technologies used: Node.js, Express.js, JWT, bcryptjs, and automated testing frameworks.",
      links: [
        { url: "https://github.com/marcosamartinez/web-sprint-challenge-authentication-and-testing", label: "View on GitHub" },
      ],
    },
    {
      title: "Data Persistence",
      description:
        "Created a relational database-backed API using Knex.js migrations, SQL schema design, and Express.js. Implemented CRUD operations, foreign key relationships, data validation, and cross-table data aggregation with JOIN operations.",
      links: [
        { url: "https://github.com/marcosamartinez/web-sprint-challenge-adding-data-persistence", label: "View on GitHub" },
      ],
    },
    {
      title: "Advanced Web Application",
      description:
        "Created a React application with authentication workflows, HTTP client integration, form validation, and state management. Utilized Chrome DevTools for debugging, API testing with Postman, and implemented secure token-based API communication.",
      links: [
        { url: "https://github.com/marcosamartinez/web-sprint-challenge-advanced-web-applications", label: "View on GitHub" },
      ],
    },
    {
      title: "Human Rights First: Asylum Report Generator",
      description:
        "Built a responsive landing page with React and Tailwind CSS, featuring interactive and smooth navigation. Integrated RESTful APIs using Axios to fetch and display real-time asylum data in dynamic visualizations. Implemented Auth0 authentication with protected routes and user profile management. Created interactive data visualizations using React Plotly.js. Deployed application to Vercel with environment variable management and production configuration.",
      links: [
        { url: "https://asylum-hrf-fe-starter-imspp8du2-marcosamartinezs-projects.vercel.app/", label: "View live" },
        { url: "https://github.com/marcosamartinez/asylum-hrf-fe-starter", label: "GitHub" },
      ],
    },
  ];

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <p className="projects-intro">Things I've built and worked on.</p>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
