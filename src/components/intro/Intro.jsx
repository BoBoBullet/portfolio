import React from 'react';
import "./intro.scss";
import 'material-icons/iconfont/material-icons.css';
import { Typewriter } from 'react-simple-typewriter';

function Intro() {
  const handleType = (count) => {
    // Access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/working_time(2).jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello world, je suis </h2>
          <h1>Boris Boceno</h1>
          <h3>
            Etudiant{' '}
            <span>
              <Typewriter
                words={["web development", "web mobile"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h3>
        </div>
        <a href="#profil">
          <span className="icon material-icons-outlined">arrow_circle_down</span>
        </a>
      </div>
    </div>
  );
}

export default Intro;
