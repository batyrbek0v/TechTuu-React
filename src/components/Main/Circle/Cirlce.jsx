import React from 'react'
import graphCircle from '../../../assets/img/circle-graph.png'
import graphCircleMobile from '../../../assets/img/circle-graph-mobile.png'
import Title from '../../UI/Title/Title'
import cls from './Circle.module.scss'


const Cirlce = () => {
  return (
    <>
      <div className={cls.container}>
        <Title title='What we do' />
        <div className={cls.graphBlock}>
          <img src={graphCircle} alt="circle-graph" />
          <img className={cls.mobileCircle} src={graphCircleMobile} alt="circle-graph" />
        </div>
      </div>
    </>
  )
}

export default Cirlce