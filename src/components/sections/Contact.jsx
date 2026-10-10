import React from "react";
// import {
//   Mail,
//   Phone,

//   ArrowRight,
//   MapPin,
//   Download,
// } from "lucide-react";

const Contact = () => {
  return (
    <section className="section_padding contact-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-title text-center">
          <span></span>

          <h1>
            CONTACT <strong className="color_highlight">ME</strong>
          </h1>

          <span></span>
        </div>

        {/* Intro */}
        <div className="contact-intro text-center">

          <p>
            Have a project in mind or looking for a Frontend Developer?
           
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="row g-4 justify-content-center">

          {/* Email */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card">

              <div className="contact-icon">
                {/* <Mail size={28} /> */}
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>

              <div className="contact-card-content">
                <span>EMAIL ME</span>

                <h3>
                aanandanigam6@gmail.com
                </h3>

                <a href="aanandanigam6@gmail.com">
                  Send me an email
                  {/* <ArrowRight size={17} /> */}
                </a>
              </div>

            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card">

              <div className="contact-icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
              </div>

              <div className="contact-card-content">
                <span>CALL ME</span>

                <h3>
                  +91 95550 46405
                </h3>

                <a href="tel:+919555046405">
                  Call me right now.
                </a>
              </div>

            </div>
          </div>

          {/* Location */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card">

              <div className="contact-icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>

              <div className="contact-card-content">
                <span>LOCATION</span>

                <h3>
                  Kolkata, West Bengal, India
                </h3>

                <p>
                  Available for remote opportunities
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Availability */}
        <div className="availability-box">

          <div className="availability-content">

            <div className="availability-status">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h2>
              LOOKING FOR A
              <strong> FRONTEND DEVELOPER?</strong>
            </h2>

            <p>
              I specialize in creating responsive, modern and
              user-friendly websites using React.js, Webflow,
              HTML, CSS and JavaScript.
            </p>

            <div className="skill-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Bootstrap</span>
              <span>TailwindCss</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Webflow</span>
              <span>Responsive Design</span>
              <span>UI/UX</span>
            </div>

          </div>

          {/* CV Button */}
          <a
            href="/resume.pdf"
            download="Aananda-Kumar-Das-Resume.pdf"
            className="contact-cv-btn"
          >
            {/* <i class="fa fa-download" aria-hidden="true"></i> */}

            <span>DOWNLOAD CV</span>
            <i class="fa fa-download" aria-hidden="true"></i>

          </a>

        </div>

        {/* Social Links */}
        <div className="contact-social">

          <h3>LET'S CONNECT</h3>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>

            <a
              href="mailto:aanandanigam6@gmail.com"
              aria-label="Email"
            >
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;