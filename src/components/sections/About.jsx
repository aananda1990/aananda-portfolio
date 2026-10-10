import { ArrowRight } from "lucide-react";
// import resumePdf from "../../assets/AanandaKumarDas_Resume.pdf";
import {
  personalInfo,
  services,
  skills,
  workExperience,
  education,
} from "../../data/aboutData";

export default function About() {
  // const info = [
  //   ["First Name", "Your"],
  //   ["Last Name", "Name"],
  //   ["Age", "27 Years"],
  //   ["Nationality", "Indian"],
  //   ["Address", "Your City"],
  //   ["Email", "you@mail.com"],
  // ];

  // const skills = [
  //   { name: "HTML", image:htmlSkill  },
  //   { name: "JAVASCRIPT", image: javascriptSkill },
  //   { name: "CSS", image: cssSkill },
  //   { name: "PHP", image: phpSkill },
  //   { name: "WORDPRESS", image: wordpressSkill },
  //   { name: "JQUERY", image: jquerySkill },
  //   { name: "ANGULAR", image: angularSkill },
  //   { name: "REACT", image:  reactSkill},
  // ];

  return (
    <>
      {/* <section className="section">
      <h2>About Me</h2>
      <div className="info-grid">
        {info.map(([label, value]) => (
          <p key={label}>
            {label}: <strong>{value}</strong>
          </p>
        ))}
      </div>
    </section> */}

      <section className="section_padding about-section">
        <div className="container">
          <div className="section-title text-center">
            <span />
            <h1>
              ABOUT <strong className="color_highlight">ME</strong>
            </h1>
            <span />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="personal-info">
                <h2 className="sub_title text-start">Personal Info</h2>
                <div className="row">
                  {/* LEFT INFO */}
                  <div className="col-md-6">
                    <div className="info-item">
                      <span className="info_lbl">Name</span>
                      <strong className="info_details">
                        Aananda Kumar Das
                      </strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Total Experience: </span>
                      <strong className="info_details">8Year</strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">DOB</span>
                      <strong className="info_details">12-May-1990</strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Language</span>
                      <strong className="info_details">Hindi, English</strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Nationality </span>
                      <strong className="info_details">Indian</strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Address</span>
                      <strong className="info_details">
                        Kolkata, West Bengal
                      </strong>
                    </div>
                  </div>
                  {/* RIGHT INFO */}
                  <div className="col-md-6">
                    <div className="info-item">
                      <span className="info_lbl">Mobile No:</span>
                      <strong className="info_details">+91-9555 046 405</strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Email:</span>
                      <strong className="info_details">
                        aanandanigam6@gmail.com
                      </strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Linkedin:</span>
                      <strong className="info_details">
                        <a href="https://www.linkedin.com/in/aananda-das-8307816a/">
                          aananda-das-8307816a
                        </a>
                      </strong>
                    </div>
                    <div className="info-item">
                      <span className="info_lbl">Skype: </span>
                      <strong className="info_details">anand.kumar449</strong>
                    </div>
                  </div>
                </div>
                {/* DOWNLOAD CV */}
                <div className="mt-3">
                  {/* <a href="/AanandaKumarDas_Resume.pdf" download="Aananda-Kumar-Das-Resume.pdf" className="download-btn- about-btn">
                    <span>DOWNLOAD CV</span>
                    <span className="icon_circle">
                      {" "}
                      <ArrowRight />
                    </span>
                  </a> */}
                  <a
  href="/resume.pdf"
  download="Aananda-Kumar-Das-Resume.pdf"
  className="download-btn- about-btn"
>
  <span>DOWNLOAD CV</span>

  <span className="icon_circle">
    <ArrowRight />
  </span>
</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4-">
                {/* CARD 1 */}
                <div className="col-md-6 about_card_box">
                  <div className="about-card">
                    <div className="d-flex gap-3 mb-3">
                      <div className="card-icon">
                        <i className="bi bi-code-slash" />
                      </div>
                      <h3>Frontend Developer</h3>
                    </div>
                    <div className="card-content">
                      <div className="card-line">
                        <span />
                        <i />
                        <i />
                      </div>
                      <p>
                        I build modern, responsive and user-friendly websites
                        and web applications.
                      </p>
                    </div>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className="col-md-6 about_card_box">
                  <div className="about-card">
                    <div className="d-flex gap-3 mb-3">
                      <div className="card-icon">
                        <i className="bi bi-display" />
                      </div>
                      <h3>Responsive Design</h3>
                    </div>

                    <div className="card-content">
                      <div className="card-line">
                        <span />
                        <i />
                        <i />
                      </div>
                      <p>
                        I create pixel-perfect, mobile-friendly designs for all
                        devices.
                      </p>
                    </div>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="col-md-6 about_card_box">
                  <div className="about-card">
                    <div className="d-flex gap-3 mb-3">
                      <div className="card-icon">
                        <i className="bi bi-vector-pen" />
                      </div>
                      <h3>UI/UX Implementation</h3>
                    </div>

                    <div className="card-content">
                      <div className="card-line">
                        <span />
                        <i />
                        <i />
                      </div>
                      <p>
                        I convert Figma and PSD designs into clean, interactive
                        web pages.
                      </p>
                    </div>
                  </div>
                </div>
                {/* CARD 4 */}
                <div className="col-md-6 about_card_box">
                  <div className="about-card">
                    <div className="d-flex gap-3 mb-3">
                      <div className="card-icon">
                        <i className="bi bi-braces" />
                      </div>
                      <h3>Modern Technologies</h3>
                    </div>

                    <div className="card-content">
                      <div className="card-line">
                        <span />
                        <i />
                        <i />
                      </div>
                      <p>
                        Experienced with React.js, Webflow, Bootstrap,
                        JavaScript and modern tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skill section */}
      <section className="bottom_section_padding skills-section">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="sub_title">
              My <span className="color_highlight">SKILLS</span>{" "}
            </h2>
          </div>
          {/* <div className="skills-heading text-center">
            <span />
            <h2>
              MY <strong>SKILLS</strong>
            </h2>
            <span />
          </div> */}
          {/* Skills Grid */}
          <div className="row mobile-gutter">
            {/* HTML */}
            {skills.map((skill, index) => {
              return (
                <>
                  <div
                    className="col-4 col-sm-6 col-lg-3 skill_card_box mb-3"
                    key={skill.id}
                  >
                    <div className="skill_card">
                      <div className="skill_icon">
                        <img src={skill.image} alt={skill.name} />
                      </div>
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* education and experence section */}
      <section className="bottom_section_padding experience-section-">
        <div className="container">
          {/* Section Heading */}
          <h2 className="sub_title text-center">
            My <span className="color_highlight">Journey</span>{" "}
          </h2>

          <div className="row g-">
            {/* =========================
                 WORK EXPERIENCE
            ========================== */}
            <div className="col-lg-6">
              <div className="timeline-heading">
                
                <h4>Work Experience</h4>
              </div>
              <div className="timeline">
                {workExperience.map((item) => {
                  return (
                    <>
                      <div className="timeline-item">
                        <span className="timeline-dot" />
                        <div className="timeline_card">
                          <div className="card-content">
                            <div className="date">
                              <i class="fa fa-calendar" aria-hidden="true"></i>
                              {item.year}
                            </div>
                            <h3 className="job-title">
                              {item.position}
                              <span className="separator">—</span>
                              <span className="company">{item.company}</span>
                            </h3>
                            <p className="description">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* Experience 1 */}
              </div>
            </div>
            {/* =========================
                 EDUCATION
            ========================== */}
            <div className="col-lg-6">
              <div className="timeline-heading">
                <h4>Education</h4>
              </div>
              <div className="timeline">
                {education.map((item) => {
                  return (
                    <>
                      <div className="timeline-item">
                        <span className="timeline-dot" />
                        <div className="timeline_card">
                          <div className="card-content">
                            <div className="date">
                              <i class="fa fa-calendar" aria-hidden="true"></i>
                              {item.year}
                            </div>
                            <h3 className="job-title">
                              {item.degree}
                              <span className="separator">—</span>
                              <span className="company">{item.institute}</span>
                            </h3>
                            <p className="description">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* Education 3 */}
                {/* <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline_card">
                    <div className="card-content">
                      <div className="date">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        2009
                      </div>
                      <h3 className="job-title">
                        Bachelor Degree
                        <span className="separator">—</span>
                        <span className="company">Tunis High School</span>
                      </h3>
                      <p className="description">
                        Completed foundational education and built strong
                        academic skills.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
