import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #ff6b9d;
    --black: #1a1a1a;
    --green: #00d4aa;
    --blue: #4a90e2;
    --purple: #9b59b6;
    --orange: #f39c12;
    --gray: #34495e;
    --light-gray: #ecf0f1;
    --dark-bg: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    --card-bg: rgba(255, 255, 255, 0.05);
    --bg-overlay: rgba(255, 255, 255, 0.1);
    --border-radius: 12px;
    --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    scroll-padding-top: 10rem;

    &.light{
      --light-gray: #444444;
      --card-bg: rgba(255, 255, 255, 0.6);
      --bg-overlay: rgba(0, 0, 0, 0.05);

      body{
        transition: 0.5s;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow);
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
        background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(200,200,200,0.9) 100%);
        backdrop-filter: blur(10px);
        color: var(--black);
        box-shadow: var(--shadow);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
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
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: var(--dark-bg);
    color: #FFFF;
    min-height: 100vh;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    color: #FFFF;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    box-shadow: var(--shadow);
    &:hover{
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0, 212, 170, 0.4);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    font-weight: 700;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: var(--transition);
    &:hover{
      transform: scale(1.05);
    }
  }
`;
