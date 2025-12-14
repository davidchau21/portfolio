import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: var(--transition);

  nav{
    display: flex;
    align-items: center;
    gap: 2rem;

    a{
      color: #FFFF;
      padding: 0.8rem 1.2rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1.4rem;
      transition: var(--transition);
      border-radius: var(--border-radius);
      position: relative;

      &.button{
        padding: 0.8rem 2.5rem;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        box-shadow: var(--shadow);
      }

      &:hover{
        color: var(--green);
        transform: translateY(-2px);

        &.button{
          box-shadow: 0 10px 30px rgba(0, 212, 170, 0.4);
        }
      }

      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        transition: var(--transition);
        transform: translateX(-50%);
      }

      &:hover::after{
        width: 100%;
      }
    }
  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2.5rem;
    height: 0.3rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;
    border-radius: 2px;
    transition: var(--transition);

    &:before{
      bottom: 0.6rem;
    }

    &:after{
      top: 0.6rem;
    }

    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.3rem;
    background: #FFFF;
    cursor: pointer;
    transition: var(--transition);
    border-radius: 2px;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 60px;
    height: 32px;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    box-shadow: var(--shadow);
    transition: var(--transition);
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
    }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  input:checked + label {
    background: linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%);
  }

  input:checked + label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 2rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, rgba(0, 212, 170, 0.95) 0%, rgba(74, 144, 226, 0.95) 100%);
      backdrop-filter: blur(20px);
      top: 0;
      left: 0;
      transition: var(--transition);

      a.button{
        background: linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%);
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }

`