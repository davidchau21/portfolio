import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
// import { Form } from "../Form/Form";
import resumePDF from "../../assets/CV_ChauDaVits_Fullstack.pdf"; // Đảm bảo file có trong thư mục assets

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me</p>
      </header>
      
      <div className="contacts">
        <div>
          <a href="mailto:davidduongxu1@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:davidduongxu1@gmail.com">davidduongxu1@gmail.com</a>
        </div>
        <div>
          <a href="tel:0337499390">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:0337499390">(+84) 337499390</a>
        </div>
      </div>

      <h3>Resume</h3>
      
      {/* Hiển thị resume ngay trên trang */}
      <div className="resume-container">
        <embed
          src={resumePDF}
          width="100%"
          height="500px"
          title="David Chau Resume"
          style={{ border: "none", marginTop: "1rem" }}
        ></embed>
      </div>

      {/* <Form></Form> */}
    </Container>
  );
}
