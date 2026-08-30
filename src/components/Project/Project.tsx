import { useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import { Fade } from "react-awesome-reveal";

interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "gitlab" | "external";
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "fullstack" | "ai" | "backend";
  badge: string;
  description: string;
  techList: string[];
  links: ProjectLink[];
}

const projectsData: ProjectData[] = [
  {
    id: "cryptotracker",
    title: "CryptoTracker",
    subtitle: "Cryptocurrency Analytics Platform",
    category: "fullstack",
    badge: "Analytics Dashboard",
    description:
      "A highly responsive CoinMarketCap-styled dashboard engineering real-time cryptocurrency analytics. Integrated directly with CoinGecko API to fetch live prices, market caps, and trading volumes. Features interactive charting and seamless filtering for 100+ cryptocurrencies.",
    techList: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn-ui"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/davidchau21/CryptoTracker",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://crypto-tracker-three-hazel-18.vercel.app",
        type: "external",
      },
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Chatbot",
    subtitle: "Embeddable RAG & AI Agent Platform",
    category: "ai",
    badge: "RAG & AI Agents",
    description:
      "Embeddable AI chatbot platform with RAG-based knowledge retrieval and real-time automated support. Built backend with NestJS and engineered a RAG pipeline using embeddings and Supabase (Vector Store) for intelligent data retrieval. Automated workflows via n8n and real-time Socket.io interaction.",
    techList: ["NestJS", "Node.js", "React.js", "Tailwind CSS", "n8n", "Supabase", "PostgreSQL", "Socket.io", "RAG", "OpenAI/Gemini API"],
    links: [
      {
        label: "Backend Repo",
        url: "https://github.com/davidchau21/chatbot_be",
        type: "github",
      },
      {
        label: "Frontend Repo",
        url: "https://github.com/davidchau21/chatbot_fe",
        type: "github",
      },
    ],
  },
  {
    id: "edublog",
    title: "EduBlog – Learning Forum",
    subtitle: "Full-Stack Learning & Knowledge Community",
    category: "fullstack",
    badge: "Community & RAG AI",
    description:
      "A full-stack learning community platform where students share knowledge, publish educational content, join groups, communicate in real time, and interact with an AI chatbot powered by RAG. Engineered with Node.js, Express.js, MongoDB, React, Vite, Redis, and Socket.io.",
    techList: ["Node.js", "Express.js", "React + Vite", "Tailwind CSS", "MongoDB", "Socket.io", "Redis", "AWS S3", "Gemini API", "RAG"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/davidchau21/eforum-blog-web",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://eforum.vercel.app",
        type: "external",
      },
      {
        label: "Admin CMS",
        url: "https://eforum-admin.vercel.app",
        type: "external",
      },
    ],
  },
  {
    id: "ta-house",
    title: "TA HOUSE",
    subtitle: "Smart Lock E-Commerce Platform",
    category: "ai",
    badge: "E-Commerce & AI",
    description:
      "A comprehensive e-commerce platform specializing in smart door locks, developed with a freelance team. Features storefront, order processing, and administrative dashboard, with integrated AI support workflows.",
    techList: ["React.js", "Node.js", "n8n", "Tailwind CSS", "Vercel"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/davidchau21/ta_house",
        type: "github",
      },
      {
        label: "Backend",
        url: "https://github.com/davidchau21/ta_house_be",
        type: "github",
      },
      {
        label: "Admin Panel",
        url: "https://github.com/davidchau21/ta_house_dashboard",
        type: "github",
      },
      {
        label: "Live Store",
        url: "https://ta-house.vercel.app",
        type: "external",
      },
    ],
  },
  {
    id: "zalo-web",
    title: "Zalo Web Chat",
    subtitle: "Real-Time Messaging Web App",
    category: "fullstack",
    badge: "Real-Time Chat",
    description:
      "A high-performance real-time messaging application mirroring Zalo's core functionalities. Built with Socket.io for instantaneous bi-directional communication, live online presence tracking, secure authentication, media sharing, and group chats.",
    techList: ["React.js", "Node.js", "Socket.io", "MongoDB", "Redux"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/davidchau21/zalo-web-chat",
        type: "github",
      },
    ],
  },
  {
    id: "warehouses",
    title: "Warehouses Management",
    subtitle: "Distributed Microservices Architecture",
    category: "backend",
    badge: "Microservices & Cloud",
    description:
      "A highly scalable microservices architecture designed to orchestrate complex warehouse operations. Implements asynchronous event-driven messaging with Kafka, Transactional Outbox pattern, and Saga pattern for distributed consistency across services.",
    techList: ["Java Spring", "Kafka", "Outbox / Saga", "API Gateway", "Redis", "Eureka Server"],
    links: [
      {
        label: "GitLab Repo",
        url: "https://gitlab.com/group4080515/warehouses_management",
        type: "gitlab",
      },
    ],
  },
  {
    id: "zalo-app",
    title: "Zalo App Chat Mobile",
    subtitle: "Cross-Platform Mobile App",
    category: "fullstack",
    badge: "React Native",
    description:
      "A cross-platform mobile messaging application built with React Native and Node.js. Empowered by Socket.io for instantaneous data delivery, supporting direct messaging, contact management, and media handling via Reactive MongoDB, AWS S3, and Firebase Storage.",
    techList: ["React Native", "Node.js", "Express.js", "Socket.io", "MongoDB", "Firebase"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/davidchau21/zalo-app-chat",
        type: "github",
      },
    ],
  },
  {
    id: "ecommerce-webshop",
    title: "E-Commerce WebShop",
    subtitle: "Enterprise Shopping Platform",
    category: "backend",
    badge: "Java Enterprise",
    description:
      "An enterprise-grade e-commerce solution architected with Java Spring MVC and deployed on Apache Tomcat. Features end-to-end shopping experience, catalog management, secure cart, order processing, and administrative dashboard for inventory control.",
    techList: ["Java Spring MVC", "JSP", "MySQL", "Apache Tomcat", "Maven"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/davidchau21/E-Commerce-WebShop",
        type: "github",
      },
    ],
  },
  {
    id: "homespace",
    title: "HomeSpace Web Shop",
    subtitle: "Home Appliance E-Commerce",
    category: "backend",
    badge: "Spring MVC",
    description:
      "A specialized e-commerce platform dedicated to home appliances, maximizing user engagement through intuitive search and seamless navigation. Built with Spring MVC and SQL Server, prioritizing a secure and fluid checkout flow.",
    techList: ["Spring MVC", "JSP", "SQL Server", "Node.js", "Maven"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/davidchau21/HomeSpace-Web-Shop",
        type: "github",
      },
    ],
  },
];

export function Project() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "ai" | "backend">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <Container id="project">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of scalable web applications, microservices architectures, and AI automations.
        </p>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Fullstack & Web
          </button>
          <button
            className={`filter-btn ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            AI & Automation
          </button>
          <button
            className={`filter-btn ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Microservices & Backend
          </button>
        </div>
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <Fade key={project.id} triggerOnce>
            <div className="project">
              <header>
                <span className="project-badge">{project.badge}</span>
                <div className="project-icon-wrapper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </header>

              <div className="body">
                <h3>{project.title}</h3>
                <span className="subtitle">{project.subtitle}</span>
                <p>{project.description}</p>
              </div>

              <footer>
                <ul className="tech-list">
                  {project.techList.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`action-link ${link.type}`}
                      title={link.label}
                    >
                      {link.type === "external" ? (
                        <>
                          <img src={externalLink} alt="" width="14" height="14" />
                          <span>{link.label}</span>
                        </>
                      ) : (
                        <>
                          <img src={githubIcon} alt="" width="14" height="14" />
                          <span>{link.label}</span>
                        </>
                      )}
                    </a>
                  ))}
                </div>
              </footer>
            </div>
          </Fade>
        ))}
      </div>
    </Container>
  );
}
