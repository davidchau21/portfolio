import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;
  width: 100%;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--white);
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 60rem;

    input,
    textarea {
      width: 100%;
      padding: 1.6rem 2.2rem;
      border-radius: var(--border-radius);
      outline: none;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      color: var(--white);
      font-weight: 500;
      font-size: 1.6rem;
      transition: var(--transition);
      backdrop-filter: blur(5px);
      box-shadow: var(--shadow);

      &::placeholder {
        color: var(--gray);
      }

      &:focus {
        border-color: var(--blue);
        background: var(--bg-overlay);
        box-shadow: 0 0 15px rgba(0, 242, 254, 0.35);
      }
    }

    textarea {
      height: 18rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1.4rem 6rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 600;
      border-radius: var(--border-radius);
      margin-top: 1rem;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 5rem;
  text-align: center;
  background: var(--card-bg);
  padding: 4rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 2.2rem;
    color: var(--green);
    margin-bottom: 2rem;
  }

  button {
    border-radius: var(--border-radius);
    padding: 1.2rem 3rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
