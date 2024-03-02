import React from 'react'
import '../assets/CSS/Product.css'
import productlar from '../assets/JSON/productlar.json'
import Productcard from './Productcard'

const Productcontainer = () => {
  return (
    <div className='product-container'>
        <h2>НАША ПРОДУКЦИЯ</h2>
        <div className="product-section">
        {
    productlar.map((m)=>(
        <Productcard key={m.id} image={m.image} desc={m.desc} style={m.styles}/>
        
    ))
  }  
        </div>
    </div>
  )
}

export default Productcontainer