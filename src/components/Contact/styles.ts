import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;
  padding-bottom: 5rem;

  header{
    text-align: center;
    margin-bottom: 4rem;

    h2{
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1rem;
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
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        border-radius: 2px;
      }
    }

    p{
      color: var(--green);
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  .contact-column, .resume-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: var(--card-bg);
    padding: 3rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-overlay);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
    height: 100%;
  }

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin-top: 1.5rem;

    .contact-card{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 35rem;
      gap: 2rem;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
      border-radius: var(--border-radius);
      padding: 1.5rem 2rem;
      transition: var(--transition);
      box-shadow: var(--shadow);
      cursor: pointer;

      img{
        width: 5rem;
        height: 5rem;
        transition: var(--transition);
      }

      a{
        color: var(--black);
        font-weight: 600;
        font-size: 1.6rem;
        text-decoration: none;
        transition: var(--transition);
      }

      &:hover{
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 212, 170, 0.4);

        img{
          transform: scale(1.1);
        }

        a{
          color: #FFF;
        }
      }
    }
  }

  h3{
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: var(--green);
    margin-bottom: 2rem;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .resume-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    embed{
      width: 100%;
      max-width: 800px;
      height: 600px;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: var(--transition);

      &:hover{
        box-shadow: 0 25px 50px rgba(0, 212, 170, 0.3);
      }
    }
  }

  @media(max-width: 960px){
    .contact-wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media(max-width: 600px){
    .contacts {
      .contact-card {
        padding: 1.5rem 1.5rem;
        img {
          width: 4rem;
          height: 4rem;
        }
        a {
          font-size: 1.4rem;
        }
      }
    }

    .resume-container embed{
      height: 500px;
    }
  }

  @media(max-width: 600px){
    .resume-container embed{
      height: 400px;
    }
  }
`
