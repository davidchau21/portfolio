import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="footer">
      <div className="footer-copyright">
        <p>
          Designed & Built with <img src={reactIcon} alt="React" width="16" height="16" /> by{" "}
          <strong>David Chau</strong> • © {currentYear}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/davidchau21"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/davidchau21"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://t.me/davidchau21"
          target="_blank"
          rel="noreferrer"
          title="Telegram"
        >
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href="https://www.instagram.com/chdavid.xv"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
