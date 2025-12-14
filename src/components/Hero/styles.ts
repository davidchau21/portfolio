import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  min-height: 100vh;
  position: relative;

  .hero-text{
    flex: 1;
    z-index: 2;

    & > p{
      font-size: 2rem;
      margin-bottom: 1rem;
      opacity: 0.9;
      animation: fadeInUp 1s ease-out;
    }

    h1{
      font-size: 7rem;
      font-weight: 800;
      background: linear-gradient(135deg, #fff 0%, var(--green) 50%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      animation: fadeInUp 1s ease-out 0.2s both;
    }

    h3{
      color: var(--green);
      margin: 1rem 0;
      font-size: 2.5rem;
      font-weight: 600;
      animation: fadeInUp 1s ease-out 0.4s both;
    }


    p.small-resume {
      margin-bottom: 5rem;
      font-size: 1.8rem;
      color: var(--light-gray);
      animation: fadeInUp 1s ease-out 0.6s both;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img, span{
      font-size: 3rem;
      width: 3.5rem;
      transition: var(--transition);
      filter: grayscale(0.3);
      &:hover{
        transform: translateY(-5px) scale(1.1);
        filter: grayscale(0);
      }
    }
    animation: fadeInUp 1s ease-out 0.8s both;
  }

  .button{
    margin-top: 5rem;
    padding: 1.6rem 7rem;
    font-size: 1.8rem;
    font-weight: 600;
    animation: fadeInUp 1s ease-out 1s both;
  }

  .hero-image{
    flex: 1;
    text-align: center;
    z-index: 2;

    img{
      max-width: 500px;
      width: 100%;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      transition: var(--transition);
      animation: float 6s ease-in-out infinite;

      &:hover{
        transform: scale(1.05) rotate(2deg);
        box-shadow: 0 20px 60px rgba(0, 212, 170, 0.3);
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    text-align: center;

    .hero-text{
      h1{
        font-size: 5rem;
      }
    }

    .hero-image{
      display: block;
      margin-top: 4rem;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
    padding: 2rem;

    .hero-text{
      h1{
        font-size: 4rem;
      }
      h3{
        font-size: 2rem;
      }
    }
  }

  @media(max-width: 480px){
    margin-top: 45%;

    .hero-text{
      h1{
        font-size: 3.5rem;
      }
    }

    .social-media{
      padding-left: 0;
      justify-content: center;
    }
  }
`