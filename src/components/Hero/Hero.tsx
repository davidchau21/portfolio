import { Container } from "./styles";
import { Fade, Slide } from "react-awesome-reveal";
import { NavHashLink as _NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import Hello from "../../assets/Hello.gif";
import { useState, useEffect } from "react";

const NavHashLink = _NavHashLink as any;

const words = [
  "Full-Stack Developer",
  "Backend & Microservices Engineer",
  "AI & Automation Builder",
];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const fullWord = words[currentWordIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullWord.substring(0, currentText.length - 1)
            : fullWord.substring(0, currentText.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <Container id="home">
      <div className="blur-blob green-blob"></div>
      <div className="blur-blob blue-blob"></div>

      <div className="hero-text">
        <Fade direction="up" triggerOnce>
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span>Available for Opportunities • 2 Years Exp</span>
          </div>
        </Fade>

        <Fade direction="up" delay={150} triggerOnce>
          <p className="greeting">
            Hello <img src={Hello} alt="Hello" width="22px" />, I'm
          </p>
        </Fade>

        <Fade direction="up" delay={250} triggerOnce>
          <h1>David Chau</h1>
        </Fade>

        <Fade direction="up" delay={350} triggerOnce>
          <h3>
            {currentText}
            <span className="typing-cursor">|</span>
          </h3>
        </Fade>

        <Fade direction="up" delay={450} triggerOnce>
          <p className="hero-summary">
            Fullstack Developer with 2 years of experience specializing in
            Node.js and NestJS, with hands-on experience in React.js and
            Next.js. Experienced in designing microservices, scalable backend
            systems, and AI-powered web applications.
          </p>
        </Fade>

        <Fade direction="up" delay={550} triggerOnce>
          <div className="hero-actions">
            <NavHashLink smooth to="#contact" className="button primary-btn">
              Get in touch
            </NavHashLink>
            <NavHashLink smooth to="#project" className="button secondary-btn">
              View Projects
            </NavHashLink>
          </div>
        </Fade>

        <Fade direction="up" delay={650} triggerOnce>
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
            <a href="tel:0337499390" title="Direct Call: (+84) 337499390">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href="https://t.me/davidchau21"
              target="_blank"
              rel="noreferrer"
              title="Telegram: @davidchau21"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </Fade>
      </div>

      <div className="hero-visual">
        <Slide direction="right" delay={300} triggerOnce>
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">david-chau.config.ts</span>
              <span className="terminal-badge">TypeScript</span>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
                  <span className="token-keyword">const</span>{" "}
                  <span className="token-var">engineer</span> = &#123;{"\n"}
                  {"  "}
                  <span className="token-prop">name</span>:{" "}
                  <span className="token-string">"David Chau"</span>,{"\n"}
                  {"  "}
                  <span className="token-prop">title</span>:{" "}
                  <span className="token-string">
                    "Fullstack & Backend Engineer"
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="token-prop">primaryStack</span>: [
                  <span className="token-string">"NestJS"</span>,{" "}
                  <span className="token-string">"Node.js"</span>,{" "}
                  <span className="token-string">"React"</span>,{" "}
                  <span className="token-string">"Next.js"</span>],{"\n"}
                  {"  "}
                  <span className="token-prop">focusAreas</span>: [
                  <span className="token-string">"Microservices & Saga"</span>,{" "}
                  <span className="token-string">"Kafka & Outbox"</span>,{" "}
                  <span className="token-string">"RAG AI Agents"</span>],{"\n"}
                  {"  "}
                  <span className="token-prop">openForWork</span>:{" "}
                  <span className="token-bool">true</span>
                  {"\n"}
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="terminal-footer">
              <div className="stat-pill">
                <span className="stat-num">2</span>
                <span className="stat-text">Years Exp</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">10+</span>
                <span className="stat-text">APIs & Services</span>
              </div>
              <div className="stat-pill">
                <span className="stat-num">AI</span>
                <span className="stat-text">RAG & n8n</span>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </Container>
  );
}
