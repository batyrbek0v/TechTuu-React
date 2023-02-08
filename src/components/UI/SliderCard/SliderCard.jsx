import React from 'react';
import '../../Main/Projects/Slider.css';

const SliderCard = ({ route, url, alt, id, proClass }) => {
  return (
    <div
      style={{
        backgroundColor: id % 2 === 0 ? '#3B91D1' : '#F6C222',
        borderColor: id % 2 === 0 ? '#F6C222' : '#3B91D1',
      }}
      className={`projects ${proClass}`}
    >
      <a href={route} rel='noreferrer' target='_blank'>
        <span>{alt}</span>
      </a>
    </div>
  );
};

export default SliderCard;
