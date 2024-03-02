import React, { useState } from 'react';
import "../assets/CSS/Eighth.css"
import kisi from '../assets/Images/eightsection.png';
import union from '../assets/Images/Union.png'


const Eightsection = () => {
  const [cardIndex, setCardIndex] = useState(0);

  let cardData = [
    {
      id: 1,
      content: (
        <div className='eight-card'>
          <img src={kisi} alt="" />
          <h4>Иван Иванов1</h4>
          <i>Наше оборудование прозводится вручную. Мы <br /> постоянно производим контроль качества <br /> произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в <br /> течении первых 2 лет происходят поломки, мы <br /> всегда находим c клиентом наиболее удобный <br /> вариант решения вопроса.</i>
          <p>20.10.21</p>
          <div className="background">
            <img src={union} alt="" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className='eight-card'>
          <img src={kisi} alt="" />
          <h4>Иван Иванов2</h4>
          <i>Наше оборудование прозводится вручную. Мы <br /> постоянно производим контроль качества <br /> произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в <br /> течении первых 2 лет происходят поломки, мы <br /> всегда находим c клиентом наиболее удобный <br /> вариант решения вопроса.</i>
          <p>20.10.21</p>
          <div className="background">
            <img src={union} alt="" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className='eight-card'>
          <img src={kisi} alt="" />
          <h4>Иван Иванов3</h4>
          <i>Наше оборудование прозводится вручную. Мы <br /> постоянно производим контроль качества <br /> произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в <br /> течении первых 2 лет происходят поломки, мы <br /> всегда находим c клиентом наиболее удобный <br /> вариант решения вопроса.</i>
          <p>20.10.21</p>
          <div className="background">
            <img src={union} alt="" />
          </div>
        </div>
      ),
    },

  ];

  const handleLeftButtonClick = () => {
    setCardIndex((cardIndex - 1 + cardData.length) % cardData.length);
  };

  const handleRightButtonClick = () => {
    setCardIndex((cardIndex + 1) % cardData.length);
  };


  return (
    <div className='eighth-container'>
        <h3>ЧТО ДУМАЮТ О НАС</h3>
        <div className="eight-card-container">
        {[0, 1, 2].map((index) => (
          <div key={index} className={index === 1 ? 'visible' : 'hidden'}>
            {cardData[(cardIndex + index) % cardData.length].content}
          </div>
        ))}
      </div>
      
     <div className="btn-groups">
      <button onClick={handleLeftButtonClick}></button>
      <button onClick={handleRightButtonClick}></button>
     </div>
    </div>
  )
}

export default Eightsection