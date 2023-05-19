import React from 'react'
import "./menu.scss"


function Menu({menuOpen, setMenuOpen}) {
    const handleClick = () => {
        setMenuOpen(false);
      };

  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
            <li onClick={handleClick}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handleClick}>
                <a href="#profil">Profil</a>
            </li>
            <li onClick={handleClick}>
                <a href="#projects">Projets</a>
            </li>
            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu