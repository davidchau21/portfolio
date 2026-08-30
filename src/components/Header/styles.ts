import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  background: rgba(10, 12, 22, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  max-width: 1200px;
  height: 7.5rem;
  border-radius: 50px;
  z-index: 1000;
  transition: var(--transition);
  box-shadow: var(--shadow);

  &.scrolled {
    height: 6.2rem;
    top: 1rem;
    background: rgba(10, 12, 22, 0.75);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

    html.light & {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 0, 0, 0.06);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2.2rem;

    a {
      color: #ffffff;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 0.15rem;
      transition: var(--transition);
      position: relative;
      padding: 0.8rem 0;

      &:hover, &.active {
        color: var(--blue);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        transition: var(--transition);
        transform: translateX(-50%);
        border-radius: 10px;
      }

      &:hover::after {
        width: 60%;
      }

      &.button.resume-button {
        padding: 1rem 2.8rem;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        color: var(--button-text);
        box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);
        border-radius: 30px;

        &::after {
          display: none;
        }

        &:hover {
          box-shadow: 0 8px 25px rgba(0, 255, 135, 0.4);
          transform: translateY(-2px) scale(1.03);
          color: var(--button-text);
        }
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 2rem;

    .theme-toggle-wrapper {
      display: flex;
      align-items: center;
    }
  }

  .menu {
    display: none;
  }

  /* Universal Toggle styling for checkbox + label */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 28px;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    display: block;
    border-radius: 100px;
    position: relative;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);

    &:after {
      content: "";
      background: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 4px;
      left: 4px;
      transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  input:checked + label {
    background: linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%);
    box-shadow: 0 4px 15px rgba(255, 0, 127, 0.2);
    &:after {
      left: calc(100% - 4px);
      transform: translateX(-100%);
    }
  }

  /* Light mode overrides at component level */
  html.light & {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);

    nav a {
      color: var(--black);

      &:hover, &.active {
        color: var(--blue);
      }

      &.button.resume-button {
        color: var(--button-text);
      }
    }

    .menu {
      background-color: var(--black);
      &:before, &:after {
        background-color: var(--black);
      }
    }
  }

  /* Responsive styling: mobile viewport */
  @media (max-width: 960px) {
    top: 1.5rem;
    width: 92vw;
    height: 6.5rem;
    padding: 0 2.5rem;

    .menu {
      width: 2.2rem;
      height: 0.3rem;
      background: #ffff;
      position: relative;
      cursor: pointer;
      display: block;
      transition: var(--transition);
      border-radius: 2px;

      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 0.3rem;
        background: #ffff;
        cursor: pointer;
        transition: var(--transition);
        border-radius: 2px;
      }

      &:before {
        bottom: 0.6rem;
      }

      &:after {
        top: 0.6rem;
      }

      &.active {
        background-color: rgba(0, 0, 0, 0);

        &:before {
          bottom: 0;
          transform: rotate(45deg);
        }

        &:after {
          top: 0;
          transform: rotate(135deg);
        }
      }
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(13, 16, 27, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 12rem 4rem 4rem 4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.5rem;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
      z-index: -1;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      a {
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
        padding: 1rem 0;

        &:hover, &.active {
          transform: translateY(-2px);
        }

        &.button.resume-button {
          font-size: 1.6rem;
          padding: 1.4rem 4rem;
          max-width: 250px;
          width: 100%;
          text-align: center;
        }
      }
    }

    html.light & nav {
      background: rgba(255, 255, 255, 0.95);
    }
  }
`;
