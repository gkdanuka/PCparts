import React, { useState } from 'react'
import './slider.scss'
import arrow from '../../assets/arrow.png'

function Slider({images}) {
  const [imageIndex,setImageIndex]=useState(null);
  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          <img src={arrow} alt='' />
        </div>
        <div className="imgContainer">
          <img src={images[0]} alt='' />
        </div>
        <div className="arrow">
          <img src={arrow} alt='' className='right' />
        </div>
        <div className="close">X</div>
      </div>
      <div className="bigImage">
        <img src={images[0]} alt='' />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image,index)=>(
          <img src={Image} alt='' key={index} />
        ))}
      </div>
    </div>
  )
}

export default Slider