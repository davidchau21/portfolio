import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #ff007f;
    --black: #06070a;
    --green: #00ff87;
    --blue: #00f2fe;
    --purple: #7928ca;
    --orange: #ff9f43;
    --gray: #718096;
    --light-gray: #a0aec0;
    --dark-bg: radial-gradient(circle at 50% 0%, #0d0f1a 0%, #07080d 100%);
    --card-bg: rgba(13, 16, 27, 0.45);
    --bg-overlay: rgba(255, 255, 255, 0.03);
    --border-radius: 16px;
    --shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    --white: #ffffff;
    --border-color: rgba(255, 255, 255, 0.1);
    --button-text: var(--black);
    --hollow-bg: var(--black);
    scroll-padding-top: 10rem;

    &.light{
      --light-gray: #4a5568;
      --card-bg: rgba(255, 255, 255, 0.7);
      --bg-overlay: rgba(0, 0, 0, 0.03);
      --white: var(--black);
      --border-color: rgba(0, 0, 0, 0.1);
      --green: #00aa56;
      --blue: #0076a3;
      --pink: #d9006c;
      --purple: #5b10a3;
      --button-text: #ffffff;
      --hollow-bg: #f5f7fa;

      body{
        transition: 0.5s;
        background: linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%);
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(20px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        a{
          transition: 0.5s;
          color: var(--black);
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black);
        }
        .menu.active{
          background-color: rgba(0,0,0,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(20px);
        color: var(--black);
        box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.05);
        border-top: 1px solid rgba(255, 255, 255, 0.4);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px rgba(0, 0, 0, 0.15);
          color: var(--black);
          background: rgba(255, 255, 255, 0.5);
          &::placeholder{
            transition: 0.5s;
            color: #718096;
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: var(--dark-bg);
    color: #FFFF;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body, input, textarea, button{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, .logo {
    font-family: 'Sora', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    color: var(--button-text);
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 255, 135, 0.4);
      filter: brightness(1.05);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.6) grayscale(0.5);
    cursor: not-allowed;
    box-shadow: none;
  }

  .logo{
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 2.4rem;
    color: #FFFF;
    font-weight: 700;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: var(--transition);
    white-space: nowrap;

    .logo-bracket {
      color: var(--green);
      -webkit-text-fill-color: var(--green);
      font-weight: 800;
    }

    &:hover{
      transform: scale(1.04);
      filter: drop-shadow(0 0 8px rgba(0, 242, 254, 0.4));
    }

    @media (max-width: 480px) {
      font-size: 1.9rem;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #07080d;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--blue) 0%, var(--green) 100%);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--green);
  }
`;
