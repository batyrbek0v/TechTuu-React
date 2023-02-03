import React, { useState } from 'react';
import graphCircle from '../../../assets/img/circle-graph.png';
import graphCircleMobile from '../../../assets/img/circle-graph-mobile.png';
import Title from '../../UI/Title/Title';
import cls from './Circle.module.scss';
import bg from '../../../assets/img/bgSER.png';

const Circle = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', function (e) {
    setSize(window.innerWidth);
  });

  return (
    <>
      <div className={cls.service}>
        <div className={cls.container}>
          <Title title='What we do' />
          <div className={cls.graphBlock}>
            {size >= 1000 && <img src={bg} alt='bg' className={cls.bg} />}
            <img src={graphCircle} alt='circle-graph' />
            <img
              className={cls.mobileCircle}
              src={graphCircleMobile}
              alt='circle-graph'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
