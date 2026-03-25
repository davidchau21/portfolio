import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { Fade, Slide } from "react-awesome-reveal";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink as _NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

const NavHashLink = _NavHashLink as any;

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="up" triggerOnce>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <h1>Chau Da Vits</h1>
        </Fade>
        <Fade direction="up" delay={400} triggerOnce>
          <h3>Full-Stack Developer</h3>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          <p className="small-resume">1 Year of Experience</p>
        </Fade>
        <Fade direction="up" delay={800} triggerOnce>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade direction="up" delay={1000} triggerOnce>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/davidchau21"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/davidchau21"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="tel:0337499390">
              <img src={whatsapp} alt="Phone Call" />
            </a>

            <a href="https://t.me/davidchau21" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </Fade>
      </div>
      <div className="hero-image">
        <Slide direction="right" delay={1000} triggerOnce>
          <img src={Illustration} alt="Illustration" />
        </Slide>
      </div>
    </Container>
  );
}
