import styled from "styled-components";

export const Container = styled.section`
  padding-top: 14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  background: rgba(0, 0, 0, 0);
  min-height: 100vh;
  position: relative;

  .blur-blob {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 1;
    pointer-events: none;
    opacity: 0.12;
    transition: var(--transition);

    html.light & {
      opacity: 0.05;
      filter: blur(140px);
    }
  }

  .green-blob {
    background: var(--green);
    top: 10%;
    left: 5%;
    animation: float-blob-1 20s infinite ease-in-out alternate;
  }

  .blue-blob {
    background: var(--blue);
    bottom: 15%;
    right: 5%;
    animation: float-blob-2 25s infinite ease-in-out alternate;
  }

  .hero-text {
    flex: 1.1;
    z-index: 2;

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.6rem 1.6rem;
      border-radius: 20px;
      background: rgba(0, 255, 135, 0.08);
      border: 1px solid rgba(0, 255, 135, 0.25);
      color: var(--green);
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 2rem;
      letter-spacing: 0.5px;

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--green);
        box-shadow: 0 0 10px var(--green);
        animation: pulse-dot 2s infinite;
      }
    }

    .greeting {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      opacity: 0.9;
      font-weight: 500;
      color: var(--blue);
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    h1 {
      font-size: 6.8rem;
      font-weight: 800;
      background: linear-gradient(
        135deg,
        var(--white) 15%,
        var(--green) 50%,
        var(--blue) 90%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.4rem;
      letter-spacing: -1.5px;
      line-height: 1.1;
    }

    .alias-title {
      font-size: 1.8rem;
      color: var(--gray);
      font-weight: 500;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }

    h3 {
      color: var(--white);
      margin: 1.5rem 0;
      font-size: 2.8rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      min-height: 3.5rem;

      .typing-cursor {
        animation: blink 0.8s infinite;
        margin-left: 0.4rem;
        font-weight: 300;
        color: var(--blue);
        -webkit-text-fill-color: var(--blue);
      }
    }

    .hero-summary {
      font-size: 1.6rem;
      line-height: 1.7;
      color: var(--light-gray);
      max-width: 540px;
      margin-bottom: 3.5rem;
      font-weight: 400;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.8rem;
      flex-wrap: wrap;
      margin-bottom: 3.5rem;

      .primary-btn {
        padding: 1.4rem 3.5rem;
        font-size: 1.6rem;
        font-weight: 600;
        border-radius: 30px;
        color: var(--button-text);
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        box-shadow: 0 4px 20px rgba(0, 242, 254, 0.25);
        transition: var(--transition);

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0, 255, 135, 0.45);
        }
      }

      .secondary-btn {
        padding: 1.4rem 3.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        border-radius: 30px;
        color: var(--white);
        background: transparent;
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: var(--transition);

        &:hover {
          transform: translateY(-3px);
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(0, 242, 254, 0.05);
        }
      }
    }

    .social-media {
      display: inline-flex;
      align-items: center;
      gap: 1.5rem;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 50%;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        backdrop-filter: blur(10px);
        color: var(--white);
        transition: var(--transition);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

        img, svg {
          width: 2rem;
          height: 2rem;
          transition: var(--transition);
        }

        &:hover {
          transform: translateY(-4px);
          border-color: var(--blue);
          color: var(--blue);
          box-shadow: 0 8px 20px rgba(0, 242, 254, 0.25);

          img, svg {
            transform: scale(1.1);
            filter: drop-shadow(0 0 5px rgba(0, 242, 254, 0.4));
          }
        }
      }
    }
  }

  .hero-visual {
    flex: 1;
    z-index: 2;
    max-width: 520px;
    width: 100%;

    .terminal-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      overflow: hidden;
      transition: var(--transition);

      &:hover {
        border-color: rgba(0, 242, 254, 0.4);
        box-shadow: 0 20px 45px rgba(0, 242, 254, 0.15);
        transform: translateY(-4px);
      }

      .terminal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem 1.8rem;
        background: rgba(255, 255, 255, 0.03);
        border-bottom: 1px solid var(--border-color);

        .terminal-dots {
          display: flex;
          align-items: center;
          gap: 0.7rem;

          .dot {
            width: 11px;
            height: 11px;
            border-radius: 50%;

            &.red {
              background: #ff5f56;
            }
            &.yellow {
              background: #ffbd2e;
            }
            &.green {
              background: #27c93f;
            }
          }
        }

        .terminal-title {
          font-size: 1.3rem;
          color: var(--light-gray);
          font-family: monospace;
          font-weight: 500;
        }

        .terminal-badge {
          font-size: 1.1rem;
          color: var(--blue);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 0.2rem 0.8rem;
          border-radius: 4px;
          font-weight: 600;
        }
      }

      .terminal-body {
        padding: 2.2rem;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 1.35rem;
        line-height: 1.7;
        background: rgba(5, 7, 12, 0.6);

        html.light & {
          background: rgba(245, 247, 250, 0.7);
        }

        pre {
          margin: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;

          &::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }

          code {
            font-family: inherit;
          }
        }

        .token-keyword {
          color: #ff007f;
          font-weight: 600;
        }
        .token-var {
          color: #00f2fe;
        }
        .token-prop {
          color: #ffbd2e;
        }
        .token-string {
          color: #00ff87;
        }
        .token-bool {
          color: #ff9f43;
          font-weight: 600;
        }
      }

      .terminal-footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid var(--border-color);
        background: rgba(255, 255, 255, 0.02);

        .stat-pill {
          padding: 1.4rem 1rem;
          text-align: center;
          border-right: 1px solid var(--border-color);

          &:last-child {
            border-right: none;
          }

          .stat-num {
            display: block;
            font-size: 1.9rem;
            font-weight: 700;
            color: var(--white);
            background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.3rem;
          }

          .stat-text {
            font-size: 1.15rem;
            color: var(--gray);
            font-weight: 500;
          }
        }
      }
    }
  }

  @keyframes pulse-dot {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.85);
    }
  }

  @keyframes float-blob-1 {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    50% {
      transform: translate(40px, -60px) scale(1.1);
    }
    100% {
      transform: translate(-20px, 20px) scale(0.95);
    }
  }

  @keyframes float-blob-2 {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    50% {
      transform: translate(-50px, 40px) scale(0.9);
    }
    100% {
      transform: translate(30px, -30px) scale(1.05);
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 12rem;
    text-align: center;
    gap: 5rem;

    .hero-text {
      display: flex;
      flex-direction: column;
      align-items: center;

      .hero-summary {
        max-width: 100%;
      }

      .hero-actions {
        justify-content: center;
      }
    }

    .hero-visual {
      max-width: 580px;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    padding-top: 10rem;

    .hero-text {
      h1 {
        font-size: 4.8rem;
      }
      h3 {
        font-size: 2.2rem;
      }

      .hero-actions {
        flex-direction: column;
        width: 100%;

        .primary-btn, .secondary-btn {
          width: 100%;
          text-align: center;
        }
      }
    }

    .hero-visual {
      .terminal-card {
        .terminal-body {
          font-size: 1.2rem;
          padding: 1.5rem;
        }
      }
    }
  }
`;
