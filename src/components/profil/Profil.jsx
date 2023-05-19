import React, { useEffect, useState } from 'react'
import "./profil.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import { experiences, formations, entrepreneurship } from "../../data"

function Profil() {
  const [selected, setSelected] = useState("experiences")
  const [data, setData] = useState([])

  const list = [
    {
      id: "experiences",
      title: "Expériences",
    },
    {
      id: "formations",
      title: "Formations",
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneuriat",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "experiences":
        setData(experiences);
        break;
      case "formations":
        setData(formations);
        break;
        case "entrepreneurship":
          setData(entrepreneurship);
          break;
      default:
        setData(experiences);
    }
  }, [selected])

  return (
    <div className='profil' id="profil">
      <h1>Profil</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          ></PortfolioList>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profil