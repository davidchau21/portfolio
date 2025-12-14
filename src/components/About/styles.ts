import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  .about-text{
    h2{
      display: inline-block;
      margin-bottom: 2rem;
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;

      &::after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }

    h3{
      margin-top: 3rem;
      margin-bottom: 2rem;
      color: var(--green);
      font-size: 2.2rem;
      font-weight: 600;
    }

    p{
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--light-gray);
    }
  }

  .hard-skills{
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: var(--card-bg);
    border-radius: var(--border-radius);
    transition: var(--transition);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    img{
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.5rem;
      transition: var(--transition);
    }

    &:hover{
      transform: translateY(-5px);
      box-shadow: var(--shadow);
      background: linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);

      img{
        transform: scale(1.1);
      }
    }
  }

  .about-image{
    text-align: center;
    position: relative;

    img{
      width: 80%;
      max-width: 400px;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      transition: var(--transition);
      filter: grayscale(0.2);

      &:hover{
        transform: scale(1.05) rotate(2deg);
        filter: grayscale(0);
        box-shadow: 0 20px 60px rgba(0, 212, 170, 0.3);
      }
    }

    &::before{
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: linear-gradient(135deg, var(--green), var(--blue));
      border-radius: var(--border-radius);
      z-index: -1;
      opacity: 0.1;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0.2);
        transition: var(--transition);

        &:hover{
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    gap: 3rem;

    .hard-skills{
      justify-content: center;
    }

    .about-image{
      display: flex;
      max-width: 100%;

      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0.2);
        transition: var(--transition);

        &:hover{
          filter: grayscale(0);
        }
      }
    }
  }
`