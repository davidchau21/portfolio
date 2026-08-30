import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle as _GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = _GlobalStyle as any;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
