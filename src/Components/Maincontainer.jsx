import React from 'react'
import "../assets/CSS/Home.css"

const Maincontainer = () => {
  return (
    <div className="main-container">
    <h1>ХИТ ПРОДАЖ</h1>
    <hr />
    <p>Дистиллятор для <br/> эфирных масел </p>
    <div className="text">
        <span>Цена</span>
        <p className='price'>4 906 грн</p>
    </div>
    <a href="#"><button>Купить</button></a>
</div>
  )
}

export default Maincontainer