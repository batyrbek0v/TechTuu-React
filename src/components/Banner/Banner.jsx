import React, { useState } from 'react';
import cls from './Banner.module.scss';
import rectangleImage from '../../assets/img/banner-img.png';
//  import rectangleImage from '../../assets/img/ba'
import bg from '../../assets/img/bgWEL.png';
import { scrolling } from '../../utils/Anchor';

const Banner = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', function (e) {
    setSize(window.innerWidth);
  });

  return (
    <>
      <div className={cls.headerBanner}>
        <div className={cls.headerBannerContent}>
          {size >= 1201 && <img src={bg} alt='bg' className={cls.bg} />}
          <div className={cls.contentInner}>
            <h1>We make</h1>
            <h1>IT Solutions</h1>
          </div>
          <button
            className={cls.headerBannerBtn}
            onClick={() => scrolling(1750)}
          >
            Explore projects
          </button>
        </div>
        <div className={cls.bannerRectangles}>
          <div className={cls.yellowRectangle}></div>
          <div className={cls.blueRectangle}>
            <div className={cls.blueInnerRectangle}>
              <img src={rectangleImage} alt='banner-img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
