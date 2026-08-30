import styled from "styled-components";

export const Container = styled.footer`
  background: var(--dark-bg);
  padding: 4rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  position: relative;
  transition: var(--transition);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--blue) 50%,
      transparent 100%
    );
    opacity: 0.3;
  }

  .logo {
    font-size: 2.6rem;
    color: var(--white);
    font-weight: 700;
    span {
      color: var(--blue);
    }
  }

  p {
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.5rem;
    color: var(--gray);
    font-weight: 500;

    img {
      width: 2.2rem;
      height: 2.2rem;
      animation: spinning 10s infinite linear;
      transition: var(--transition);
      filter: grayscale(1) opacity(0.6);

      &:hover {
        transform: scale(1.1);
        filter: grayscale(0) opacity(1);
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      transition: var(--transition);

      img {
        width: 1.8rem;
        height: 1.8rem;
        transition: var(--transition);
        filter: grayscale(1) opacity(0.6);
      }

      &:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.04);
        border-color: var(--blue);

        img {
          transform: scale(1.05);
          filter: grayscale(0) opacity(1);
        }
      }
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1200px) {
    padding: 4rem 10rem;
  }

  @media (max-width: 960px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 800px) {
    padding: 4rem 5rem;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;

    p {
      font-size: 1.4rem;
      flex-direction: column;
      gap: 1rem;
    }

    .social-media {
      gap: 1rem;

      img,
      span {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
