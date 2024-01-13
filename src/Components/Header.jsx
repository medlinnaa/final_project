import React from 'react'
import header from '../assets/Images/header.png'
import { Link } from 'react-router-dom'
import '../assets/CSS/Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <img src={header} alt="" />
            <div className="nav-links">
                <a href="#">Каталог</a>
                <Link to="/novosti">Новости</Link>
                <a href="#">Доставка</a>
                <a href="#">O нас</a>
                <a href="#">Контакты</a>
            </div>
            <div className="btn-group">
                <a href="#"><button><i class="fa-regular fa-heart"></i></button></a>
                <a href="#"><button><i class="fa-regular fa-user"></i></button></a>
                <a href="#"><button className='cart-btn'><i class="fa-solid fa-cart-shopping cart-icon"></i></button></a>
            </div>
            <div className="hamburger">
              <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </header>
    </div>
  )
}

export default Header