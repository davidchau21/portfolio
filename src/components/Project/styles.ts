import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;

    &::after{
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      border-radius: 2px;
    }
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2.5rem 2rem;
      background: var(--card-bg);
      border-radius: var(--border-radius);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: var(--shadow);

      &:hover{
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0, 212, 170, 0.25);
        background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(0, 212, 170, 0.1) 100%);
        border: 1px solid rgba(0, 212, 170, 0.3);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;

        svg{
          transition: var(--transition);
        }

        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 4rem;
          height: 4rem;
          transition: var(--transition);
          filter: brightness(0.8);

          &:hover{
            transform: scale(1.1);
            filter: brightness(1);
          }
        }

        &:hover svg{
          transform: scale(1.1);
          color: var(--green);
        }
      }

      h3{
        margin-bottom: 1.5rem;
        font-size: 2rem;
        font-weight: 600;
        color: var(--light-gray);
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        color: #ccc;
        flex-grow: 1;

        a{
          color: var(--green);
          border-bottom: 1px solid var(--green);
          transition: var(--transition);

          &:hover{
            color: var(--blue);
            border-bottom-color: var(--blue);
          }
        }
      }

      footer{
        margin-top: auto;

        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 1.3rem;
          opacity: 0.8;

          li{
            background: rgba(255, 255, 255, 0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            transition: var(--transition);

            &:hover{
              background: var(--green);
              color: var(--black);
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`