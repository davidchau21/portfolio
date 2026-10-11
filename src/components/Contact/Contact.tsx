import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import telegram from "../../assets/telegram.svg";
import { Form } from "../Form/Form";
import resumePDF from "../../assets/CV_ChauDaVits_FS.pdf";
import { Fade } from "react-awesome-reveal";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <Fade direction="up" triggerOnce>
          <h2>Get In Touch</h2>
          <p className="contact-lead">
            Have a project in mind, fulltime role, or looking to collaborate?
            Feel free to reach out!
          </p>
        </Fade>
      </header>

      <div className="contact-wrapper">
        <Fade direction="up" delay={100} triggerOnce>
          <div className="contact-column">
            <h3>Direct Contact</h3>
            <div className="contacts">
              <a href="mailto:davidduongxu1@gmail.com" className="contact-card">
                <div className="icon-circle">
                  <img src={emailIcon} alt="Email" />
                </div>
                <div className="card-info">
                  <span className="info-label">Email</span>
                  <span className="info-value">davidduongxu1@gmail.com</span>
                </div>
              </a>

              <a href="tel:0337499390" className="contact-card">
                <div className="icon-circle">
                  <img src={phoneIcon} alt="Phone" />
                </div>
                <div className="card-info">
                  <span className="info-label">Phone / Zalo</span>
                  <span className="info-value">(+84) 337499390</span>
                </div>
              </a>

              <a
                href="https://t.me/davidchau21"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="icon-circle">
                  <img src={telegram} alt="Telegram" />
                </div>
                <div className="card-info">
                  <span className="info-label">Telegram</span>
                  <span className="info-value">@davidchau21</span>
                </div>
              </a>

              <div className="contact-card">
                <div className="icon-circle">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="info-label">Location</span>
                  <span className="info-value">
                    Go Vap District, HCMC, Vietnam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="resume-column">
            <h3>Curriculum Vitae</h3>
            <p className="resume-desc">
              Get an in-depth breakdown of my technical experience, system
              architectures, production projects, and education.
            </p>
            <div className="resume-actions">
              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="button resume-btn primary"
              >
                View Full Resume ↗
              </a>
              <a
                href={resumePDF}
                download="CV_ChauDaVits_FS.pdf"
                className="button resume-btn secondary"
              >
                Download PDF 📥
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <Form />
    </Container>
  );
}
