import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding-bottom: 5rem;

  header {
    text-align: center;
    margin-bottom: 4.5rem;

    h2 {
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--white);
      position: relative;
      display: inline-block;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 2px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }

    .contact-lead {
      color: var(--light-gray);
      font-weight: 400;
      font-size: 1.65rem;
      margin-top: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5rem;
    align-items: stretch;
    max-width: 960px;
    margin: 0 auto 6rem auto;
  }

  .contact-column,
  .resume-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--card-bg);
    padding: 3.5rem 3rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: var(--transition);
    box-shadow: var(--shadow);

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    &:hover {
      border-color: rgba(0, 242, 254, 0.35);
      box-shadow: 0 15px 35px rgba(0, 242, 254, 0.12);
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.4rem 1.8rem;
      transition: var(--transition);
      text-decoration: none;
      color: inherit;

      html.light & {
        background: rgba(0, 0, 0, 0.03);
      }

      .icon-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        background: rgba(0, 242, 254, 0.08);
        border: 1px solid rgba(0, 242, 254, 0.2);
        flex-shrink: 0;

        img {
          width: 2rem;
          height: 2rem;
          filter: drop-shadow(0 0 3px var(--blue));
        }
      }

      .card-info {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        overflow: hidden;

        .info-label {
          font-size: 1.15rem;
          color: var(--gray);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .info-value {
          font-size: 1.45rem;
          color: var(--white);
          font-weight: 600;
          transition: var(--transition);
          word-break: break-all;
        }
      }

      &:hover {
        transform: translateY(-3px);
        border-color: var(--blue);
        background: rgba(0, 242, 254, 0.06);

        .info-value {
          color: var(--blue);
        }
      }
    }
  }

  .resume-column {
    justify-content: space-between;

    .resume-desc {
      font-size: 1.55rem;
      line-height: 1.7;
      color: var(--light-gray);
      margin-bottom: 3rem;
    }

    .resume-actions {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      margin-top: auto;

      .resume-btn {
        padding: 1.4rem 2rem;
        font-size: 1.45rem;
        font-weight: 600;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        transition: var(--transition);

        &.primary {
          background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
          color: var(--button-text);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 255, 135, 0.4);
          }
        }

        &.secondary {
          background: transparent;
          color: var(--white);
          border: 1px solid var(--border-color);

          &:hover {
            border-color: var(--blue);
            color: var(--blue);
            background: rgba(0, 242, 254, 0.05);
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  @media (max-width: 860px) {
    .contact-wrapper {
      grid-template-columns: 1fr;
    }

    header {
      h2 {
        font-size: 3rem;
      }
      .contact-lead {
        font-size: 1.5rem;
      }
    }
  }
`;
