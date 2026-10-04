import React from "react";
import {
  User,
  Mail,
  Tag,
  MessageSquare,
  Send,
  Phone,

} from "lucide-react";




const Contact = () => {
  return (
    <section className="section_padding contact-section-" id="contact">
      <div className="container">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="section-title text-center">
            <span />
            <h1>
            GET IN <strong className="color_highlight">TOUCH</strong>
            </h1>
            <span />
          </div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}

        <div className="row align-items-center g-5">
          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="col-lg-4">
            <div className="contact-info">
              <span className="contact-small-line"></span>

              <h3>
                DON'T <span>BE SHY !</span>
              </h3>

              <p className="contact-description">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>

              {/* Email */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={24} />
                </div>

                <div>
                  <span>MAIL ME</span>
                  <strong>yourmail@gmail.com</strong>
                </div>
              </div>

              {/* Phone */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={24} />
                </div>

                <div>
                  <span>CALL ME</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>

              {/* Social Links */}

              <div className="social-divider"></div>

              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  fb icon
                </a>

                <a href="#" aria-label="Twitter">
                  tw icon:
                </a>

                <a href="#" aria-label="YouTube">
                  Yt icon:
                </a>

               

                <a href="#" aria-label="LinkedIn">
                  lnk icon
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE FORM
          ========================== */}

          <div className="col-lg-8">
            <div className="contact-form-card">
              {/* Form Header */}

              <div className="form-heading">
                <div className="form-heading-icon">
                  <Mail size={22} />
                </div>

                <h3>
                  SEND ME A <span>MESSAGE</span>
                </h3>
              </div>

              {/* Form */}

              <form>
                {/* Name + Email */}

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <User size={18} />

                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <Mail size={18} />

                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                </div>

                {/* Subject */}

                <div className="mt-3">
                  <div className="input-group-custom">
                    <Tag size={18} />

                    <input type="text" placeholder="Your Subject" />
                  </div>
                </div>

                {/* Message */}

                <div className="mt-3">
                  <div className="textarea-group-custom">
                    <MessageSquare size={18} />

                    <textarea rows="6" placeholder="Your Message"></textarea>
                  </div>
                </div>

                {/* Submit */}

                <button type="submit" className="send-button">
                  <span className="send-icon">
                    <Send size={18} />
                  </span>

                  <span>SEND MESSAGE</span>

                  <span className="send-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
