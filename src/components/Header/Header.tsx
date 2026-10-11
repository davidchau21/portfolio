import { Container } from "./styles";
import {
  NavHashLink as _NavHashLink,
  HashLink as _HashLink,
} from "react-router-hash-link";
import { useState, useEffect } from "react";
import Resume from "../../assets/CV_ChauDaVits_FS.pdf";

const NavHashLink = _NavHashLink as any;
const HashLink = _HashLink as any;

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className={`header-fixed ${isScrolled ? "scrolled" : ""}`}>
      <HashLink smooth to="#home" className="logo" onClick={closeMenu}>
        <span className="logo-bracket">{"<"}</span>
        <span className="logo-bracket">{" />"}</span>
      </HashLink>

      <nav className={isActive ? "active" : ""}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About
        </NavHashLink>
        <NavHashLink smooth to="#experience" onClick={closeMenu}>
          Experience
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Projects
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="button resume-button"
          onClick={closeMenu}
        >
          Resume
        </a>
      </nav>

      <div className="header-actions">
        <div className="theme-toggle-wrapper">
          <input
            onChange={toggleTheme}
            checked={isLightMode}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch">Toggle Theme</label>
        </div>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Close menu" : "Open menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </div>
    </Container>
  );
}
