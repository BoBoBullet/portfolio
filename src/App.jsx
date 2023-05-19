import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Profile from "./components/profil/Profil";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Profile></Profile>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
