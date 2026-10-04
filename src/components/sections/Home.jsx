// import { Home, User, Briefcase, Mail, MessageSquare  } from "lucide-react";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <section className="section portfolio-wrapper home_sec">
      
        {/* Yellow Background Shape */}
        <div className="yellow-shape"></div>

        {/* Main Content */}
        <div className="container-fluid portfolio-container">
          <div className="row align-items-center min-vh-100">
            {/* =========================
        LEFT IMAGE
    ========================== */}
            <div className="col-lg-5 col-xl-5">
              <div className="profile-wrapper">
                <img
                  src="/aananda_img.jpg"
                  alt="Aananda Kumar Das"
                  className="profile-image"
                />
              </div>
            </div>

            {/* =========================
        RIGHT CONTENT
    ========================== */}
            <div className="col-lg-7 col-xl-7">
              <div className="content-area">
                {/* Heading */}
                <div className="heading-wrapper">
                  {/* <span className="heading-line"></span> */}

                  <div>
                    <h1 className="main-title">I'M AANANDA</h1>

                    <h2 className="profession">FRONTED DEVELOPER</h2>
                  </div>
                </div>

                {/* Description */}
                <p className="description">
                  I'm a web designer & front-end developer focused on crafting
                  clean & user-friendly experiences. I am passionate about
                  building excellent software that improves the lives of those
                  around me.
                </p>

                {/* Button */}
                <button
                  className="about-btn"
                  onClick={() => handleNavigation("about")}
                >
                  <span>MORE ABOUT ME</span>
                  {/* <i data-lucide="arrow-right"></i> */}
                  <span className="icon_circle"> <ArrowRight  /></span>
                 

                  {/* <i className="bi bi-arrow-right"></i> */}
                </button>
              </div>
            </div>
          </div>
        </div>

       
        
      
    </section>
  );
}
