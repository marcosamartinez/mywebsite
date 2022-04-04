import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Frontend from "./components/frontend-toolbox/frontend";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Frontend />
      <Footer />
    </>
  );
};

export default App;
