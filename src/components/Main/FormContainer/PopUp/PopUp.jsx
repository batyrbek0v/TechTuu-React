import React from 'react'
import cls from './PopUp.module.scss'
import succesImg from '../../../../assets/img/succes-popUp-img.png'

const PopUp = ({ isPosted, closePopUp }) => {

  const closingPopUp = () => closePopUp(false)

  return (
    <>
      <div className={!isPosted ? cls.overley : cls.open}>
        <div className={cls.popUp}>
          <div className={cls.popUpBlock}>
            <div className={cls.popUpImgBlock}>
              <img src={succesImg} alt="succes checkMark " />
            </div>
            <h1>Uh oh!</h1>
            <p>
              We apologize, something went wrong with your order. <br />
              Please try again.
            </p>
            <button className={cls.popUpBtn} onClick={closingPopUp}>Retry</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp