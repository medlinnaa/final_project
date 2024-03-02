import React from 'react'
import Yasilkart from './Yasilkart'
import '../assets/CSS/Lastsection.css';
import last from "../assets/JSON/lastsection.json";

const Lastone = () => {
  const midpoint = Math.ceil(last.length / 2);

  const firstHalf = last.slice(0, midpoint);
  const secondHalf = last.slice(midpoint);

  return (
    <div className='last-section'>
        <h3>ПОЧЕМУ ВЫБИРАЮТ НАС</h3>
        <div className="yasil-kartlar">
        <div className="ilk-sira" >
          {firstHalf.map((m) => (
            <Yasilkart key={m.id} image={m.src} desc={m.desc} info={m.info} />
          ))}
        </div>
        <div className="ikinci-sira">
          {secondHalf.map((m) => (
            <Yasilkart key={m.id} image={m.src} desc={m.desc} info={m.info} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Lastone