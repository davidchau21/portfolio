import styled from "styled-components";


export const Container = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  padding: 4rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--green) 50%, transparent 100%);
  }

  .logo{
    font-size: 2.8rem;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    color: var(--light-gray);
    font-weight: 500;

    img{
      width: 3rem;
      height: 3rem;
      animation: spinning 5s infinite linear;
      transition: var(--transition);

      &:hover{
        transform: scale(1.2);
      }
    }
  }

  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    img, span{
      font-size: 3rem;
      width: 3.5rem;
      height: 3.5rem;
      transition: var(--transition);
      filter: grayscale(0.3);
      border-radius: 50%;
      padding: 0.5rem;
      background: var(--card-bg);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover{
        transform: translateY(-5px) scale(1.1);
        filter: grayscale(0);
        box-shadow: 0 10px 30px rgba(0, 212, 170, 0.3);
        background: linear-gradient(135deg, rgba(0, 212, 170, 0.2) 0%, rgba(74, 144, 226, 0.2) 100%);
      }
    }
  }

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 5rem;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }

  @media(max-width: 600px){
    padding: 4rem 2rem;

    p{
      font-size: 1.4rem;
      flex-direction: column;
      gap: 1rem;
    }

    .social-media{
      gap: 1rem;

      img, span{
        width: 3rem;
        height: 3rem;
      }
    }
  }
`