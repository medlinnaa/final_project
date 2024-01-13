import React from 'react'
import '../assets/CSS/Home.css'
import Maincontainer from './Maincontainer'
import Productcontainer from './Productcontainer'
import Thirdcontainer from './Thirdcontainer'
import Fourthcontainer from './Fourthcontainer'
import Fifthcontainer from './Fifthcontainer'
import Sixthsection from './Sixthsection'
import Seventhsection from './Seventhsection'
import Eightsection from './Eightsection'
import Lastone from './Lastone'
import '../assets/CSS/mediamain.css'
import '../assets/CSS/mediaminaltmis.css'
import '../assets/CSS/mediatablet.css'
import '../assets/CSS/mediaphone.css'

const Container = () => {
  return (
    <div className='container'>
      <Maincontainer/>
      <Productcontainer/>
    <Thirdcontainer/>
    <Fourthcontainer/>
    <Fifthcontainer/>
    <Sixthsection/>
    <Seventhsection/>
    <Eightsection/>
    <Lastone/>
    </div>
  )
}

export default Container