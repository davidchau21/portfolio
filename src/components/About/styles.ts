import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  .about-content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .about-text {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    text-align: left;

    h2 {
      display: inline-block;
      margin-bottom: 2.5rem;
      font-size: 3.6rem;
      font-weight: 700;
      color: var(--white);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 2px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }

    .bio-lead {
      font-size: 1.9rem;
      color: var(--white);
      line-height: 1.8;
      margin-bottom: 2rem;

      strong {
        color: var(--blue);
        font-weight: 600;
      }
    }

    p {
      font-size: 1.7rem;
      letter-spacing: 0.03rem;
      font-weight: 400;
      line-height: 1.8;
      margin-bottom: 1.8rem;
      color: var(--light-gray);
    }

    .about-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      margin: 2.5rem 0 4rem 0;

      .highlight-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.8rem 1.6rem;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 30px;
        backdrop-filter: blur(10px);
        transition: var(--transition);

        .hl-icon {
          font-size: 1.6rem;
        }

        .hl-text {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--white);
        }

        &:hover {
          border-color: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
        }
      }
    }

    .skills-heading {
      margin-top: 4rem;
      margin-bottom: 3rem;
      color: var(--green);
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;

      .skill-category-block {
        .category-title {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 1.6rem;
          display: flex;
          align-items: center;
          gap: 1rem;

          &::after {
            content: "";
            flex: 1;
            height: 1px;
            background: var(--border-color);
          }
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1.5rem;
        }
      }
    }
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 1.2rem;
    background: var(--card-bg);
    border-radius: var(--border-radius);
    transition: var(--transition);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    text-align: center;
    min-height: 105px;

    img {
      width: 3.6rem;
      height: 3.6rem;
      margin-bottom: 1rem;
      transition: var(--transition);
      object-fit: contain;
    }

    .skill-label {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--light-gray);
      transition: var(--transition);
      line-height: 1.3;
    }

    &:hover {
      transform: translateY(-5px);
      background: rgba(0, 242, 254, 0.06);
      border-color: var(--blue);
      box-shadow: 0 10px 25px rgba(0, 242, 254, 0.18);

      img {
        transform: scale(1.1);
        filter: drop-shadow(0 0 8px rgba(0, 242, 254, 0.4));
      }

      .skill-label {
        color: var(--white);
      }
    }
  }

  .experience-section {
    width: 100%;

    h2 {
      display: inline-block;
      margin-bottom: 5rem;
      font-size: 3.6rem;
      font-weight: 700;
      color: var(--white);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 2px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }
  }

  .experience-grid {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-left: 4.5rem;

    &::before {
      content: "";
      position: absolute;
      left: 17px;
      top: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--blue) 50%,
        rgba(0, 242, 254, 0.1) 100%
      );
    }
  }

  .experience-card {
    position: relative;
    padding: 3.2rem 3rem;
    border-radius: var(--border-radius);
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow);
    transition: var(--transition);
    overflow: visible;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      position: absolute;
      left: -36px;
      top: 3.6rem;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--black);
      border: 3px solid var(--green);
      box-shadow: 0 0 10px var(--green);
      transition: var(--transition);
      z-index: 5;
    }

    &:hover {
      transform: translateY(-4px) translateX(4px);
      border-color: rgba(0, 255, 135, 0.4);
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0 15px 35px rgba(0, 255, 135, 0.12);

      &::after {
        background: var(--green);
        box-shadow: 0 0 14px var(--green);
      }
    }

    .exp-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;

      h4 {
        font-size: 2.2rem;
        color: var(--white);
        margin-bottom: 0.4rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      .company {
        font-size: 1.6rem;
        color: var(--green);
        font-weight: 600;
      }

      .duration {
        font-size: 1.25rem;
        color: var(--blue);
        font-weight: 600;
        background: rgba(0, 242, 254, 0.08);
        padding: 0.5rem 1.4rem;
        border-radius: 20px;
        border: 1px solid rgba(0, 242, 254, 0.25);
        letter-spacing: 0.5px;
        white-space: nowrap;
      }
    }

    .description-list {
      font-size: 1.55rem;
      line-height: 1.75;
      color: var(--light-gray);
      padding-left: 2rem;
      margin-bottom: 2.2rem;

      li {
        margin-bottom: 1rem;
        list-style-type: disc;

        &::marker {
          color: var(--green);
        }
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: auto;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);

      .tech-tag {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--blue);
        background: rgba(0, 242, 254, 0.05);
        border: 1px solid rgba(0, 242, 254, 0.15);
        padding: 0.3rem 0.9rem;
        border-radius: 4px;
        transition: var(--transition);

        &:hover {
          background: var(--blue);
          color: var(--black);
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 8rem;

    .about-text {
      h2 {
        font-size: 3rem;
      }
      .bio-lead {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.55rem;
      }

      .skills-container {
        .skill-category-block {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }
        }
      }
    }

    .experience-grid {
      padding-left: 3rem;

      &::before {
        left: 10px;
      }

      .experience-card {
        padding: 2.4rem 2rem;

        &::after {
          left: -27px;
          top: 2.8rem;
        }

        .exp-card-header {
          flex-direction: column;
          gap: 0.8rem;
        }
      }
    }
  }
`;
