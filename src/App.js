import React from "react";
// Components
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Portfolio from  './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BuildPage from './components/BuildPage';
// Routers
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const links = [`Studio`, `Oferta`, `Realizacje`, `Sklep`, `Kontakt`];
  const homeTitles = {
    "title1" : "Nasze możliwości",
    "title2" : "Przykładowy model"
  }
  const sections = [
    {
      "name" : "studio",
      "title" : "O tym, kim jesteśmy i co robimy, słów kilka",
      "subtitles" : {
        "subtitle1" : "",
        "subtitle2" : "",
        "subtitle3" : "",
      },
      "content" : {
        "text1" : "",
        "text2" : "",
        "text3" : "",
      }
    },
    {
      "name" : "oferta",
      "title" : "Oto, co możemy tobie zaoferować",
      "subtitles" : {
        "subtitle1" : "",
        "subtitle2" : "",
        "subtitle3" : "",
      },
      "content" : {
        "text1" : "",
        "text2" : "",
        "text3" : "",
      }
    },
    {
      "name" : "realizacje",
      "title" : "Zobacz nasze realizacje",
      "subtitles" : {
        "subtitle1" : "",
        "subtitle2" : "",
        "subtitle3" : "",
      },
      "content" : {
        "text1" : "",
        "text2" : "",
        "text3" : "",
      }
    },
    {
      "name" : "kontakt",
      "title" : "Skontaktuj się z nami",
      "subtitles" : {
        "subtitle1" : "",
        "subtitle2" : "",
        "subtitle3" : "",
      },
      "content" : {
        "text1" : "",
        "text2" : "",
        "text3" : "",
      }
    },
];
  return (
    <Router>
      <Header links={links} />
      <Routes>
        <Route
          path='/'
          element={
            <Home 
              title1={homeTitles.title1}
              title2={homeTitles.title2}
            />
        }/>
        <Route
          path='/studio'
          element={
            <About

            />
          }
        />
        <Route
          path='/oferta'
          element={<Offer/>}
        />
        <Route
          path='/realizacje'
          element={<Portfolio/>}
        />
        <Route
          path='/sklep'
          element={<BuildPage/>}
        />
        <Route
          path='/kontakt'
          element={<Contact/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;
