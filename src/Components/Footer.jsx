import React from 'react'
import "../assets/CSS/Footer.css"
import { Link } from 'react-router-dom'
import footer from '../assets/Images/header.png'

const Footer = () => {
  return (
    <div className='footerr'>
     <div className="footer-left">
       <img src={footer} alt="" />
       <p>© 2021 “Copper Pro”  <br />
        Все права защищенны</p>
        <a href="#">Политика конфиденциальности</a>
     </div>
     <div className="footer-right">
       <div className="right-one">
        <h4>Навигация</h4>
        <a href="#">Каталог</a>
        <Link to="/novosti">Новости</Link>
        <a href="#">Доставка</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
       </div>
       <div className="right-one">
        <h4>Каталог</h4>
        <a href="#">Для эфирных масел</a>
        <a href="#">Для гидролатов</a>
        <a href="#">Медная посуда</a>
        <a href="#">Аксессуары из меди</a>
        <a href="#">Индивидуальный заказ</a>
        <a href="#">Скидки и предложения</a>
       </div>
       <div className="right-one">
        <h4>Контакты</h4>
         <p>Бажана 8-Б, Киев, <br /> 02132 Украина</p>
         <p>+38 (096) 990 67 56</p>
         <p>a.alambik@gmail.com</p>
        <div className="icon">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Footer