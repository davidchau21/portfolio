import { Container } from "./styles";
import DavidChau from "../../assets/DavidChau.png";
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
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm David Chau, a Full-Stack Developer with a passion for building scalable, high-performance web applications. I specialize in backend development using Node.js, NestJS, and MongoDB, while also crafting seamless frontend experiences with React.js and TypeScript.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With a strong background in microservices architecture, RESTful API development, and performance optimization using Redis and Docker, I focus on building efficient and maintainable systems. On the frontend, I bring intuitive user interfaces to life using React.js, HTML, CSS, and modern UI frameworks.          </p>
          <br />
          <p>
            Whether it's designing a robust backend infrastructure, optimizing database performance, or creating engaging UIs, I strive to deliver high-quality solutions tailored to business needs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you're looking for a dedicated developer to build, optimize, and scale your web application, let’s connect and collaborate!          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={nestjsIcon} alt="NestJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={mongoIcon} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={redisIcon} alt="Redis" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={dockerIcon} alt="Docker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={CssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={springIcon} alt="Spring" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={DavidChau} alt="Châu David" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
