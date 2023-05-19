import React, { useState } from 'react';
import "./projects.scss";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Esprit en paix",
      logo: "assets/eep_logo.png",
      img: "assets/eep_home.png",
      desc: "Création d'un site internet proposant des services de nettoyages et de fleurissements de sépulture avec passation de commande & paiement en ligne",
      link: "https://www.espritenpaix.com/"
    },
    {
      id: 2,
      title: "Vanilla store",
      logo: "",
      img: "assets/vs_home.png",
      desc: "Projet de création d'un site marchand pour distribuer de la vanille et ses dérivés",
      link: ""
    },
    {
      id: 3,
      title: "Boutique travel experts",
      logo: "assets/bte_logo.jpg",
      img: "assets/bte_home.png",
      desc: "Création d'une site vitrine proposant des séjours touristiques sur-mesures avec formulaire de contact",
      link: "https://boutiquetravelexperts.com/"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='projects' id="projects">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.logo} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}><span>Projet</span></a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow2.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow2.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}

export default Projects;
