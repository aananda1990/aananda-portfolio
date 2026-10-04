import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
// import "./Portfolio.css";

const portfolioData = [
  {
    id: 1,
    title: "Paper Craft",
    category: "Art & Craft",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Lucky Cat",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Tools & Hardware",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Fortune Cookies",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Paper Butterfly",
    category: "Art & Craft",
    image:
      "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Origami Flower",
    category: "Art & Craft",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = ["All", "Photography", "Product", "Food", "Art & Craft"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="section_padding portfolio-section">
      <div className="container">
        <div className="section-title text-center">
          <span />
          <h1>
            ABOUT <strong className="color_highlight">ME</strong>
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
                  <img src={project.image} alt={project.title} />

                  <div className="portfolio-overlay"></div>

                  {/* Arrow */}
                  <button className="portfolio-arrow">
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
    </section>
  );
};

export default Portfolio;
