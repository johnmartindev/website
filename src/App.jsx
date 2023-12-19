import "./App.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import CanvasWrapper from "./sections/CanvasWrapper/CanvasWrapper";
import Header from "./Header";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./Footer";
import Backgrounds from "./sections/Backgrounds/Backgrounds";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IFrame from "./sections/IFrame/IFrame";

//import Widget from "./Widget";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div id="wrapper-container">
              <Backgrounds />
              <CanvasWrapper />
              <Header />
              {/* <Widget /> */}
              <Intro />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/iframe" element={<IFrame />} />
        {/* Add your new route here */}
      </Routes>
    </Router>
  );
}

export default App;
