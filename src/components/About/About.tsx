import { Container } from "./styles";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import mongoIcon from "../../assets/mongodb-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import redisIcon from "../../assets/redis-icon.svg";
import nestjsIcon from "../../assets/nestjs-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import CssIcon from "../../assets/css-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import javaIcon from "../../assets/java-icon.png";
import springIcon from "../../assets/spring-icon.png";
import jsIcon from "../../assets/js-icon.svg";
import { Fade, Slide } from "react-awesome-reveal";

export function About() {
  return (
    <Container id="about">
      <div className="about-content">
        <div className="about-text">
          <Fade direction="up" triggerOnce>
            <h2>About me</h2>
          </Fade>
          <Fade direction="up" delay={100} triggerOnce>
            <p>
              Hi there! I'm David Chau, a Fullstack Developer with advanced expertise in Node.js, NestJS, React.js, and Next.js. I specialize in scalable backend systems and responsive frontend interfaces, with a proven ability to design and maintain microservices architectures while optimizing system performance.
            </p>
          </Fade>
          <Fade
            direction="up"
            delay={200}
            triggerOnce
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>
              I have demonstrated proficiency in building AI-powered applications, real-time data processing platforms, and enterprise-grade automation workflows. I strive to deliver high-quality code and maintain robust system architectures.
            </p>
            <br />
            <p>
              Whether it's designing scalable RESTful APIs, optimizing database query performance, or creating engaging user interfaces, I'm passionate about delivering solutions tailored to business needs.
            </p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <p>
              If you're looking for a dedicated developer to build, optimize, and
              scale your web application, let's connect and collaborate!
            </p>
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <h3>Here are my main skills:</h3>
          </Fade>
          <div className="hard-skills">
            <div className="hability">
              <Fade direction="up" delay={100} triggerOnce>
                <img src={nodeIcon} alt="Node.js" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={120} triggerOnce>
                <img src={nestjsIcon} alt="NestJS" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={130} triggerOnce>
                <img src={typescriptIcon} alt="TypeScript" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={140} triggerOnce>
                <img src={mongoIcon} alt="MongoDB" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={150} triggerOnce>
                <img src={redisIcon} alt="Redis" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={160} triggerOnce>
                <img src={dockerIcon} alt="Docker" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={reactIcon} alt="React" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={htmlIcon} alt="HTML" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={CssIcon} alt="CSS" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={mysqlIcon} alt="MySQL" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={javaIcon} alt="Java" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={170} triggerOnce>
                <img src={springIcon} alt="Spring" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={180} triggerOnce>
                <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={180} triggerOnce>
                <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={190} triggerOnce>
                <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={190} triggerOnce>
                <img src="https://skillicons.dev/icons?i=python" alt="Python" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={190} triggerOnce>
                <img src="https://skillicons.dev/icons?i=git" alt="Git" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={200} triggerOnce>
                <img src={jsIcon} alt="JavaScript" />
              </Fade>
            </div>
            <div className="hability">
              <Fade direction="up" delay={200} triggerOnce>
                <img src="https://skillicons.dev/icons?i=express" alt="Express.js" />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-section" id="experience">
        <Fade direction="up" delay={200} triggerOnce>
          <h2>Experience</h2>
        </Fade>

        <div className="experience-grid">
          <Slide direction="up" delay={300} triggerOnce style={{ height: "100%" }}>
            <div className="experience-card">
              <h4>Fullstack Developer</h4>
              <p className="company">Wiintek Corporation</p>
              <p className="duration">03/2025 - 03/2026</p>
              <ul className="description-list">
                <li>Architected and deployed scalable microservices backend systems using NestJS, handling real-time data processing for distributed cryptocurrency mining nodes.</li>
                <li>Engineered full-stack Voting and Ticket Support management systems with Node.js backend and React.js frontend.</li>
                <li>Developed AI-powered chatbots and implemented n8n automation workflows, reducing manual customer support efforts.</li>
                <li>Built dynamic monitoring dashboards using Next.js and React.js.</li>
              </ul>
            </div>
          </Slide>

          <Slide direction="up" delay={400} triggerOnce style={{ height: "100%" }}>
            <div className="experience-card">
              <h4>Fullstack Developer (Team Project)</h4>
              <p className="company">TA HOUSE</p>
              <p className="duration">Freelance</p>
              <ul className="description-list">
                <li>Collaborated within a freelance team to develop a comprehensive e-commerce platform specializing in smart door locks, ensuring a seamless and secure shopping experience.</li>
                <li>Integrated an advanced AI-powered customer support chatbot utilizing n8n and RAG (Retrieval-Augmented Generation) architecture to deliver highly accurate, context-aware responses based on trained product knowledge.</li>
              </ul>
            </div>
          </Slide>

          <Slide direction="up" delay={500} triggerOnce style={{ height: "100%" }}>
            <div className="experience-card">
              <h4>Backend Nodejs Intern</h4>
              <p className="company">MangoAds Co. LTD</p>
              <p className="duration">08/2024 - 01/2025</p>
              <ul className="description-list">
                <li>Designed and implemented RESTful APIs aligned with business requirements, emphasizing reliability across production systems.</li>
                <li>Diagnosed and resolved critical post-deployment bugs, ensuring system stability and minimal downtime.</li>
                <li>Optimized API performance through legacy codebase refactoring and MongoDB query optimization.</li>
                <li>Acquired hands-on expertise with Docker containerization and deployment automation.</li>
              </ul>
            </div>
          </Slide>
        </div>
      </div>
    </Container>
  );
}
