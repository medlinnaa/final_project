import React from 'react';
import birincikart from "../assets/Images/birinciyasil.png"

const Yasilkart = ({image,desc,info}) => {
  return (
    <div className='yasil-kart'>
        <img src={image} alt="" />
        <h5>{desc}</h5>
        <p>{info}</p>
        <a href="#">Читать больше <i class="fa-solid fa-chevron-down"></i></a>
    </div>
  )
}

export default Yasilkart