import React from 'react'
import "./topbar.scss"
import 'material-icons/iconfont/material-icons.css';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>portfolio</a>
            <div className="itemContainer">
              <span className='icon' class="material-icons-round">email</span>
              boboceno@gmail.com
            </div>
            <div className="itemContainer">
              <span className='icon' class="material-icons-round">phone</span>
              +33 6 06 06 06 06
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar