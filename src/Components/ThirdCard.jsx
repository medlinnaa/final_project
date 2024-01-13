import React from 'react'
import '../assets/CSS/Thirdcard.css'

const ThirdCard = ({image,audience,about}) => {
  return (
    <div className='card'>
    <div className="img-part">
     <img src={image} alt="rep" />
     <div className="icon">
     <a href="#"><i class="fa-regular fa-heart"></i></a>
     </div>
    </div>
    <div className="text-part">
      <p>{audience}</p>
      <h5>{about}</h5>
    </div>
  </div>
  )
}

export default ThirdCard