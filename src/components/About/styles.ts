import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  .about-content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .about-text {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: left;

    h2 {
      display: inline-block;
      margin-bottom: 2rem;
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }

    h3 {
      margin-top: 3rem;
      margin-bottom: 2rem;
      color: var(--green);
      font-size: 2.2rem;
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--light-gray);
    }
  }

  .hard-skills {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: var(--card-bg);
    border-radius: var(--border-radius);
    transition: var(--transition);
    backdrop-filter: blur(10px);
    border: 1px solid var(--bg-overlay);

    img {
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.5rem;
      transition: var(--transition);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow);
      background: linear-gradient(
        135deg,
        rgba(0, 212, 170, 0.1) 0%,
        rgba(74, 144, 226, 0.1) 100%
      );

      img {
        transform: scale(1.1);
      }
    }
  }

  .experience-section {
    width: 100%;

    h2 {
      display: inline-block;
      margin-bottom: 4rem;
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }
  }

  .experience-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .experience-card {
    position: relative;
    padding: 3rem;
    border-radius: var(--border-radius);
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--bg-overlay);
    box-shadow: var(--shadow);
    transition: var(--transition);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(to bottom, var(--green), var(--blue));
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba(0, 212, 170, 0.2);
    }

    h4 {
      font-size: 2.2rem;
      color: var(--green);
      margin-bottom: 0.5rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .company {
      font-size: 1.6rem;
      color: var(--blue);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .duration {
      font-size: 1.4rem;
      color: var(--light-gray);
      font-style: italic;
      margin-bottom: 2rem;
      display: inline-block;
      background: var(--bg-overlay);
      padding: 0.4rem 1rem;
      border-radius: 20px;
    }

    .description-list {
      font-size: 1.5rem;
      line-height: 1.7;
      color: var(--light-gray);
      padding-left: 2rem;
      flex-grow: 1;

      li {
        margin-bottom: 0.8rem;
        list-style-type: disc;

        &::marker {
          color: var(--green);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .about-text {
      h2 {
        margin: 0 auto 2rem auto;
        display: block;
        width: fit-content;
      }
      p {
        text-align: center;
      }
      h3 {
        text-align: center;
      }
    }
    .hard-skills {
      justify-content: center;
    }
    .experience-section h2 {
      margin: 0 auto 4rem auto;
      display: block;
      width: fit-content;
    }
  }

  @media only screen and (max-width: 480px) {
    .experience-card {
      padding: 2.5rem;
    }
  }
`;
