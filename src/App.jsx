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

// import Widget from "./Widget";

function App() {
  return (
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
  );
}

export default App;
