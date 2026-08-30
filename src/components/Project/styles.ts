import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 5rem auto;

    h2 {
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

    .section-subtitle {
      font-size: 1.65rem;
      color: var(--light-gray);
      line-height: 1.6;
      margin-top: 2rem;
      margin-bottom: 3.5rem;
    }

    .project-filters {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;

      .filter-btn {
        padding: 0.8rem 2rem;
        border-radius: 30px;
        font-size: 1.35rem;
        font-weight: 600;
        background: var(--card-bg);
        color: var(--light-gray);
        border: 1px solid var(--border-color);
        box-shadow: none;
        transition: var(--transition);

        &:hover {
          color: var(--white);
          border-color: var(--blue);
          transform: translateY(-2px);
          background: rgba(0, 242, 254, 0.05);
        }

        &.active {
          background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
          color: var(--button-text);
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(0, 242, 254, 0.3);
        }
      }
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 3rem;
    padding: 1rem 0;

    .project {
      padding: 3rem 2.8rem;
      background: var(--card-bg);
      border-radius: var(--border-radius);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      height: 100%;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow);
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(0, 242, 254, 0.35);
        box-shadow: 0 18px 40px rgba(0, 242, 254, 0.14);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;

        .project-badge {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--green);
          background: rgba(0, 255, 135, 0.08);
          border: 1px solid rgba(0, 255, 135, 0.25);
          padding: 0.3rem 1rem;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .project-icon-wrapper {
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 10px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          transition: var(--transition);
        }
      }

      .body {
        flex-grow: 1;

        h3 {
          margin-bottom: 0.4rem;
          font-size: 2.1rem;
          font-weight: 700;
          color: var(--white);
          transition: var(--transition);
        }

        .subtitle {
          display: block;
          font-size: 1.35rem;
          color: var(--blue);
          font-weight: 500;
          margin-bottom: 1.6rem;
        }

        p {
          line-height: 1.7;
          color: var(--light-gray);
          font-size: 1.45rem;
          margin-bottom: 2.4rem;
        }
      }

      footer {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.7rem;

          li {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border-color);
            padding: 0.35rem 0.9rem;
            border-radius: 4px;
            font-size: 1.2rem;
            color: var(--gray);
            font-weight: 500;
            transition: var(--transition);

            html.light & {
              background: rgba(0, 0, 0, 0.04);
            }

            &:hover {
              color: var(--blue);
              border-color: var(--blue);
            }
          }
        }

        .project-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);

          .action-link {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.6rem 1.4rem;
            border-radius: 6px;
            font-size: 1.25rem;
            font-weight: 600;
            transition: var(--transition);
            text-decoration: none;

            img {
              transition: var(--transition);
            }

            &.github, &.gitlab {
              color: var(--light-gray);
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid var(--border-color);

              html.light & {
                background: rgba(0, 0, 0, 0.04);
              }

              img {
                filter: brightness(0.85);
              }

              &:hover {
                color: var(--white);
                border-color: var(--blue);
                background: rgba(0, 242, 254, 0.08);
                transform: translateY(-2px);

                img {
                  filter: brightness(1) drop-shadow(0 0 4px var(--blue));
                }
              }
            }

            &.external {
              color: var(--button-text);
              background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
              border: 1px solid transparent;
              box-shadow: 0 3px 12px rgba(0, 242, 254, 0.25);

              img {
                filter: brightness(0);
              }

              &:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0, 255, 135, 0.4);
                filter: brightness(1.05);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;

    .projects {
      grid-template-columns: 1fr;
    }

    .section-header {
      h2 {
        font-size: 3rem;
      }
      .project-filters {
        gap: 0.6rem;

        .filter-btn {
          padding: 0.6rem 1.4rem;
          font-size: 1.25rem;
        }
      }
    }
  }
`;
