import React from 'react'
import cls from './Banner.module.scss'
import rectangleImage from '../../assets/img/banner-img.png'
const Banner = () => {

  return (
    <>
      <div className={cls.headerBanner}>
        <div className={cls.headerBannerContent}>
          <div className={cls.contentInner}>
            <h1>We make</h1>
            <h1>IT Solutions</h1>
          </div>
          <button className={cls.headerBannerBtn}>Explore projects</button>
        </div>
        <div className={cls.bannerRectangles}>
          <div className={cls.yellowRectangle}></div>
          <div className={cls.blueRectangle}>
            <div className={cls.blueInnerRectangle}>
              <img src={rectangleImage} alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner