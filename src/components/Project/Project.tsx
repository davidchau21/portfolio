import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import { Fade } from "react-awesome-reveal";
export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <Fade>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/davidchau21/CryptoTracker" target="_blank" rel="noreferrer" title="Source Code">
                  <img src={githubIcon} alt="Source Code" />
                </a>
                <a href="https://crypto-tracker-three-hazel-18.vercel.app" target="_blank" rel="noreferrer" title="Live Demo">
                  <img src={externalLink} alt="Live Demo" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CryptoTracker - Cryptocurrency Analytics</h3>
              <p>
                A highly responsive CoinMarketCap-styled dashboard engineering real-time cryptocurrency analytics. Integrated directly with the CoinGecko API to fetch live prices, market caps, and trading volumes. The application features interactive charting and seamless filtering for over 100 cryptocurrencies, all orchestrated through a modern tech stack encompassing React.js, TypeScript, Supabase, shadcn-ui, and Tailwind CSS.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Supabase</li>
                <li>Tailwind CSS</li>
                <li>shadcn-ui</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/davidchau21/ta_house" target="_blank" rel="noreferrer" title="Frontend Repo">
                  <img src={githubIcon} alt="Frontend Repo" />
                </a>
                <a href="https://github.com/davidchau21/ta_house_be" target="_blank" rel="noreferrer" title="Backend Repo">
                  <img src={githubIcon} alt="Backend Repo" />
                </a>
                <a href="https://github.com/davidchau21/ta_house_dashboard" target="_blank" rel="noreferrer" title="Admin Dashboard Repo">
                  <img src={githubIcon} alt="Admin Dashboard Repo" />
                </a>
                <a href="https://ta-house.vercel.app" target="_blank" rel="noreferrer" title="Live Demo">
                  <img src={externalLink} alt="Live Demo" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>TA HOUSE - Smart Lock E-Commerce Platform</h3>
              <p>
                A comprehensive e-commerce platform specializing in smart door locks, developed collaboratively by a freelance team. The system integrates an advanced AI-powered customer support chatbot utilizing n8n and RAG architecture to deliver highly accurate, context-aware responses based on trained product knowledge. It features a robust user-facing storefront, a scalable backend, and an intuitive administrative dashboard for streamlined operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>n8n</li>
                <li>RAG AI</li>
                <li>Vercel</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/davidchau21/eforum-blog-web"
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                >
                  <img src={githubIcon} alt="Source Code" />
                </a>
                <a
                  href="https://eforum.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                >
                  <img src={externalLink} alt="Live Demo" />
                </a>
                <a
                  href="https://eforum-admin.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  title="Admin Dashboard Demo"
                >
                  <img src={externalLink} alt="Admin Dashboard Demo" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EduBlog - Online Learning Forum</h3>
              <p>
                A comprehensive full-stack e-learning platform empowering students to collaborate, share insights, and publish rich-text blogs. Engineered with real-time WebSocket communication for instant interactions, secure user authentication, and a highly responsive React architecture backed by a robust Node.js and MongoDB foundation.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Socket.io</li>
                <li>AWS S3</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/davidchau21/zalo-web-chat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Zalo Web Chat - Real-Time Messaging Platform</h3>
              <p>
                A high-performance, real-time messaging application mirroring Zalo's core functionalities. Built with Socket.io for instantaneous bi-directional communication, it features live online presence tracking, secure authentication, media sharing, and group chats all orchestrated through a seamless React and Redux frontend.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Socket.io</li>
                <li>MongoDB</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/davidchau21/E-Commerce-WebShop"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Commerce WebShop</h3>
              <p>
                An enterprise-grade e-commerce solution architected with Java Spring MVC and deployed on Apache Tomcat. Engineered to deliver streamlined end-to-end shopping experiences, it features a comprehensive product catalog, secure cart management, scalable order processing, and a robust administrative dashboard for dynamic inventory control.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java Spring MVC</li>
                <li>JSP</li>
                <li>MySQL</li>
                <li>Apache Tomcat</li>
                <li>Maven</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/davidchau21/HomeSpace-Web-Shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HomeSpace Web Shop</h3>
              <p>
                A specialized e-commerce platform dedicated to home appliances, maximizing user engagement through intuitive search and seamless navigation. Built with Spring MVC and SQL Server, the application prioritizes a secure, fluid shopping experience with an optimized checkout flow.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring MVC</li>
                <li>JSP</li>
                <li>SQL Server</li>
                <li>Node.js</li>
                <li>Maven</li>
                <li>Apache Tomcat</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://gitlab.com/group4080515/warehouses_management"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Warehouses Management</h3>
              <p>
                A highly scalable microservices architecture designed to orchestrate complex warehouse operations. Secured via JWT-based RESTful APIs and optimized with Redis caching and rate limiting. The infrastructure utilizes Spring Cloud Gateway and Eureka Server to ensure reliable service discovery and resilient inter-service communication.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java Spring</li>
                <li>JWT</li>
                <li>Eureka Server</li>
                <li>API Gateway</li>
                <li>Redis Cache</li>
              </ul>
            </footer>
          </div>
        </Fade>

        <Fade>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/davidchau21/zalo-app-chat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Zalo App Chat - Real-Time Messaging Platform</h3>
              <p>
                A cross-platform mobile messaging application built with React Native and Node.js. Empowered by Socket.io for instantaneous data delivery, it supports direct messaging, friend management, and dynamic group chats. The architecture integrates Reactive MongoDB, AWS S3, and Firebase Storage to ensure highly scalable and efficient media handling.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Socket.io</li>
                <li>MongoDB</li>
                <li>Firebase Storage</li>
              </ul>
            </footer>
          </div>
        </Fade>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
