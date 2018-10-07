import * as React from "react";
import "./App.css";
import Navigation from "./navigation";
import Experience from "./experience";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
