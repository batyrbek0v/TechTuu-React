import React from 'react'
import cls from './SideBar.module.scss'
import closeIcon from '../../../assets/icons/close.svg'

const SideBar = ({ sideBarActive, setSideBar }) => {

  const closeSideBar = () => setSideBar(false)

  return (
    <>
      <aside className={!sideBarActive ? cls.sideBar : cls.sideBarActive}>
        <div className={cls.closeBlock}>
          <img
            className={cls.closeImg}
            src={closeIcon}
            alt="close-icon"
            onClick={closeSideBar}
          />
        </div>
        <ul className={cls.sideBarList}>
          <li><a href="/">Services</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/">Projects</a></li>
          <li className={cls.sideBarBtn}><a href="/">Contact us</a></li>
        </ul>
      </aside>
    </>
  )
}

export default SideBar