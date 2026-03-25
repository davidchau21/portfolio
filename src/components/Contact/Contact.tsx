import { useState } from "react";
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
// import { Form } from "../Form/Form";
import resumePDF from "../../assets/CV_ChauDaVits_Fullstack_v2.pdf"; // Đảm bảo file có trong thư mục assets

export function Contact() {
  const [showResume, setShowResume] = useState(false);

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me</p>
      </header>

      <div className="contact-wrapper">
        <div className="contact-column">
          <h3>Get in touch</h3>
          <div className="contacts">
            <div className="contact-card">
              <a href="mailto:davidduongxu1@gmail.com">
                <img src={emailIcon} alt="Email" />
              </a>
              <a href="mailto:davidduongxu1@gmail.com">davidduongxu1@gmail.com</a>
            </div>
            <div className="contact-card">
              <a href="tel:0337499390">
                <img src={phoneIcon} alt="Phone No" />
              </a>
              <a href="tel:0337499390">(+84) 337499390</a>
            </div>
          </div>
        </div>

        <div className="resume-column">
          <h3>Resume</h3>
          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <button 
              className="button" 
              onClick={() => setShowResume(!showResume)}
              style={{ padding: "1rem 2.5rem", fontSize: "1.6rem" }}
            >
              {showResume ? "Hide Resume" : "View My Full Resume"}
            </button>
          </div>
        </div>
      </div>

      {showResume && (
        <div className="resume-container" style={{ animation: "fadeIn 0.5s" }}>
          <embed
            src={resumePDF}
            width="100%"
            height="800px"
            title="David Chau Resume"
            style={{ border: "none", marginTop: "1rem" }}
          ></embed>
        </div>
      )}

      {/* <Form></Form> */}
    </Container>
  );
}
