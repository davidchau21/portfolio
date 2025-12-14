import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  min-height: 100vh;

  #tsparticles{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 1200px){
    padding: 0 8rem;
  }

  @media (max-width: 960px){
    padding: 0 6rem;
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 600px){
    padding: 0 2rem;
  }

  @media(max-width: 480px){
    padding: 0 1rem;
  }

  @media(max-width: 360px){
    padding: 0 0.5rem;
  }
`