import React, { useState } from "react";
import { ArrowRight, ExternalLink, X, Code2, Globe } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    title: "Paper Craft",
    category: "Wordpress",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["WordPress", "HTML5", "CSS3", "Bootstrap", "jQuery"],

    description:
      "A responsive WordPress website designed for a creative paper craft business. The website focuses on a clean layout, attractive product presentation and an easy-to-use browsing experience.",

    work:
      "I worked on WordPress theme implementation, responsive layouts, UI customization, page structure, styling and cross-device compatibility.",
  },

  {
    id: 2,
    title: "Lucky Cat",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["React.js", "JavaScript", "Bootstrap 5", "CSS3", "REST API"],

    description:
      "A modern React-based web application with reusable components and a responsive user interface.",

    work:
      "I developed reusable React components, handled application state, created responsive layouts and implemented interactive UI functionality.",
  },

  {
    id: 3,
    title: "Tools & Hardware",
    category: "HTML/CSS",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery"],

    description:
      "A professional responsive website for a tools and hardware business with a structured product-focused layout.",

    work:
      "I converted the design into responsive HTML/CSS, created reusable sections, implemented Bootstrap components and optimized the layout for different screen sizes.",
  },

  {
    id: 4,
    title: "Fortune Cookies",
    category: "Webflow",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["Webflow", "HTML5", "CSS3", "JavaScript", "Figma"],

    description:
      "A modern Webflow website created with a clean visual design, responsive layouts and interactive sections.",

    work:
      "I converted the UI design into Webflow, created responsive layouts, implemented interactions and optimized the website for desktop, tablet and mobile devices.",
  },

  {
    id: 5,
    title: "Paper Butterfly",
    category: "Wordpress",
    image:
      "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["WordPress", "HTML5", "CSS3", "Bootstrap", "JavaScript"],

    description:
      "A creative WordPress website focused on visual presentation, simple navigation and responsive user experience.",

    work:
      "I worked on WordPress implementation, custom styling, responsive design and frontend UI improvements.",
  },

  {
    id: 6,
    title: "Origami Flower",
    category: "Wordpress",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",

    liveUrl: "https://example.com",
    technologies: ["WordPress", "HTML5", "CSS3", "jQuery", "Bootstrap"],

    description:
      "A visually appealing WordPress website with a clean layout and responsive design for a creative business.",

    work:
      "I implemented the WordPress theme, customized the frontend, created responsive sections and improved the overall user experience.",
  },
];

const categories = ["All", "React", "HTML/CSS", "Webflow", "Wordpress"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="section_padding portfolio-section">
      <div className="container">

        {/* Section Title */}
        <div className="section-title text-center">
          <span />
          <h1>
            MY <strong className="color_highlight">PORTFOLIO</strong>
          </h1>
          <span />
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4 portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="portfolio-card">

                {/* Image */}
                <div className="portfolio-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-overlay"></div>

                  {/* Arrow Button */}
                  <button
                    type="button"
                    className="portfolio-arrow"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="portfolio-content">
                  <span className="portfolio-line"></span>

                  <h3>{project.title}</h3>

                  <p>{project.category}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          PROJECT DETAILS MODAL
      ========================== */}

      {selectedProject && (
        <div
          className="modal fade show d-block portfolio-modal"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content portfolio-modal-content">

              {/* Modal Header */}
              <div className="modal-header border-0">
                <div>
                  <span className="project-category">
                    {selectedProject.category}
                  </span>

                  <h2 className="modal-title mt-2">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body pt-0">

                {/* Project Image */}
                <div className="project-modal-image mb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="row g-4">

                  {/* Left Content */}
                  <div className="col-lg-8">

                    <div className="project-info">
                      <h4>Project Overview</h4>

                      <p>
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="project-info mt-4">
                      <h4>What I Worked On</h4>

                      <p>
                        {selectedProject.work}
                      </p>
                    </div>

                  </div>

                  {/* Right Content */}
                  <div className="col-lg-4">

                    {/* Technology */}
                    <div className="project-info">
                      <h4>
                        <Code2 size={18} />
                        Technologies
                      </h4>

                      <div className="technology-list">
                        {selectedProject.technologies.map(
                          (technology, index) => (
                            <span key={index}>
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="project-info mt-4">
                      <h4>
                        <Globe size={18} />
                        Project Type
                      </h4>

                      <p className="mb-0">
                        {selectedProject.category}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-0">

                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-live-btn"
                >
                  Visit Live Project
                  <ExternalLink size={17} />
                </a>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;