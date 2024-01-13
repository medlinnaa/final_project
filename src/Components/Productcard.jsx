import React from 'react'
import '../assets/CSS/Product.css'

const Productcard = ({image,desc,style}) => {
  return (
    <div className='product-card' style={style}>
        <img src={image} alt="" />
        <div className="about">
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default Productcard