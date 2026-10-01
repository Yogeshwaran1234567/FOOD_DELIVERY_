import React from 'react'
import "./Header.css"
import imagesf from '../../assets/imagesf.jpg'
const Header = () => {
  return (
    <div id='home' className='header'style={{ backgroundImage: `url(${imagesf})`}}>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Food and nutrition play vital roles in maintaining overall health and well-being. A balanced diet, consisting of a variety of nutrients including carbohydrates, proteins, fats, vitamins, and minerals, is essential for optimal physical and mental function. </p>
        <button>view menu</button>
      </div>
    </div>
  )
}

export default Header
