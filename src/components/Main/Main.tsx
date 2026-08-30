import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 30,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                lineLinked: {
                  opacity: 0.35,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#00f2fe", "#00ff87", "#60a5fa"],
            },
            lineLinked: {
              blink: false,
              color: "#00f2fe",
              consent: false,
              distance: 130,
              enable: true,
              opacity: 0.12,
              width: 1,
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              limit: 45,
              value: 30,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 0.8,
                sync: false,
              },
              random: true,
              value: 0.35,
            },
            shape: {
              type: "circle",
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 1,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 2.5,
            },
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
