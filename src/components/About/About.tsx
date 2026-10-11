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
import postgresIcon from "../../assets/postgres-icon.svg";
import ragIcon from "../../assets/rag-icon.svg";
import aiAgentsIcon from "../../assets/ai-agents.svg";
import n8nIcon from "../../assets/n8n-icon.svg";
import promptIcon from "../../assets/prompt-engineering.svg";
import kafkaIcon from "../../assets/kafka-icon.svg";
import sagaIcon from "../../assets/saga-outbox.svg";
import { Fade, Slide } from "react-awesome-reveal";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    skills: [
      { name: "NestJS", icon: nestjsIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "Spring Boot", icon: springIcon },
      { name: "Apache Kafka", icon: kafkaIcon },
      { name: "Outbox & Saga", icon: sagaIcon },
      { name: "Java", icon: javaIcon },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "React.js", icon: reactIcon },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: CssIcon },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "MongoDB", icon: mongoIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Redis", icon: redisIcon },
      { name: "SQL Server", icon: "https://skillicons.dev/icons?i=mysql" },
    ],
  },
  {
    title: "AI, Workflows & DevOps",
    skills: [
      { name: "RAG Architecture", icon: ragIcon },
      { name: "AI Agents", icon: aiAgentsIcon },
      { name: "n8n Automation", icon: n8nIcon },
      { name: "Prompt Engineering", icon: promptIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    ],
  },
];

export function About() {
  return (
    <Container id="about">
      <div className="about-content">
        <div className="about-text">
          <Fade direction="up" triggerOnce>
            <h2>About me</h2>
          </Fade>
          <Fade direction="up" delay={100} triggerOnce>
            <p className="bio-lead">
              Hi there! I'm <strong>David Chau</strong>, a Fullstack Developer
              with
              <strong> 2 years of experience</strong> specializing in{" "}
              <strong>Node.js and NestJS</strong>, with hands-on experience in{" "}
              <strong>React.js and Next.js</strong>.
            </p>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p>
              Experienced in designing and developing microservices, scalable
              backend systems, and AI-powered web applications. Skilled in cloud
              services, third-party integrations, and real-time systems.
            </p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <p>
              Passionate about building clean, maintainable, and
              high-performance software with strong architectural foundations.
            </p>
          </Fade>

          <Fade direction="up" delay={350} triggerOnce>
            <div className="about-highlights">
              <div className="highlight-badge">
                <span className="hl-icon">🎓</span>
                <span className="hl-text">
                  IUH (2020 - 2025) • Software Engineering
                </span>
              </div>
              <div className="highlight-badge">
                <span className="hl-icon">⚡</span>
                <span className="hl-text">
                  Microservices, Kafka & Saga Pattern
                </span>
              </div>
              <div className="highlight-badge">
                <span className="hl-icon">🤖</span>
                <span className="hl-text">RAG AI Agents & n8n Workflows</span>
              </div>
              <div className="highlight-badge">
                <span className="hl-icon">📍</span>
                <span className="hl-text">Go Vap District, HCMC</span>
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <h3 className="skills-heading">Technical Skills & Technologies</h3>
          </Fade>

          <div className="skills-container">
            {skillCategories.map((category, catIdx) => (
              <div key={category.title} className="skill-category-block">
                <Fade direction="up" delay={100 + catIdx * 80} triggerOnce>
                  <h4 className="category-title">{category.title}</h4>
                  <div className="skills-grid">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="hability">
                        <img src={skill.icon} alt={skill.name} loading="lazy" />
                        <span className="skill-label">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-section" id="experience">
        <Fade direction="up" delay={200} triggerOnce>
          <h2>Work Experience</h2>
        </Fade>

        <div className="experience-grid">
          <Slide
            direction="up"
            delay={300}
            triggerOnce
            style={{ height: "100%" }}
          >
            <div className="experience-card">
              <div className="exp-card-header">
                <div>
                  <h4>Backend Developer</h4>
                  <p className="company">HALOTIMES MEDIA LIMITED COMPANY</p>
                </div>
                <span className="duration">04/2026 - Present</span>
              </div>
              <ul className="description-list">
                <li>
                  Developed a social networking platform with posts, gifting,
                  events, rewards, and a point-based marketplace.
                </li>
                <li>
                  Implemented marketplace and gamification logic, including
                  dynamic pricing, product contribution, point accumulation, and
                  reward badges.
                </li>
                <li>
                  Developed RESTful APIs and Web/Admin Web using Node.js/NestJS
                  for users, products, tasks, transactions, and platform
                  management.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Kafka</span>
                <span className="tech-tag">Redis</span>
              </div>
            </div>
          </Slide>

          <Slide
            direction="up"
            delay={400}
            triggerOnce
            style={{ height: "100%" }}
          >
            <div className="experience-card">
              <div className="exp-card-header">
                <div>
                  <h4>Fullstack Developer</h4>
                  <p className="company">WIINTEK TECHNOLOGY CORPORATION</p>
                </div>
                <span className="duration">01/2025 - 04/2026</span>
              </div>
              <ul className="description-list">
                <li>
                  Designed and optimized backend services and RESTful APIs using
                  NestJS, improving database query performance and reducing
                  response time in real-time systems.
                </li>
                <li>
                  Implemented efficient MongoDB queries, indexing, and schema
                  design to support high throughput data processing.
                </li>
                <li>
                  Built real-time features using WebSocket for distributed
                  system communication.
                </li>
                <li>
                  Developed AI-powered chatbot systems using RAG and AI Agents,
                  integrated with n8n automation workflows to optimize
                  operational efficiency.
                </li>
                <li>
                  Designed and implemented a microservices-based system for
                  cryptocurrency mining, handling distributed nodes and
                  real-time data streams.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">NestJS</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">WebSocket</span>
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">RAG</span>
                <span className="tech-tag">AI Agents</span>
              </div>
            </div>
          </Slide>

          <Slide
            direction="up"
            delay={500}
            triggerOnce
            style={{ height: "100%" }}
          >
            <div className="experience-card">
              <div className="exp-card-header">
                <div>
                  <h4>Backend Developer Intern</h4>
                  <p className="company">
                    MANGO COMMUNICATIONS AND ADVERTISING COMPANY LIMITED
                  </p>
                </div>
                <span className="duration">08/2024 - 01/2025</span>
              </div>
              <ul className="description-list">
                <li>
                  Developed and maintained RESTful APIs using Node.js/NestJS and
                  optimized MongoDB queries.
                </li>
                <li>
                  Refactored legacy code, fixed production issues, and used
                  Docker for development/deployment.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">NestJS</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">RESTful API</span>
                <span className="tech-tag">Handlebars</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Container>
  );
}
