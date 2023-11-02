import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

export default function ImageSlider() {
  const [index, setIndex] = useState(0); // Start with index 0

  const imgs = [img1, img2, img3, img4];

  const prev = () => setIndex((index + imgs.length - 1) % imgs.length);
  const next = () => setIndex((index + 1) % imgs.length);

  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prev} />
      <div className='image'>
        <img src={imgs[index]} alt={`Image`} />
      </div>
      <FaArrowAltCircleRight className='right-arrow' onClick={next} />
    </div>
  );
}