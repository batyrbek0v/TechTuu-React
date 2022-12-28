import React from 'react'
import cls from './SideBar.module.scss'
import closeIcon from '../../../assets/icons/close.svg'
import { navList } from '../../../utils/cardList'
import { scrolling } from '../../../utils/Anchor'

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
          {
            navList.map(({ id, title, route }) => (
              <li key={id} onClick={() => scrolling(route)}>
                <a>
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
      </aside>
    </>
  )
}

export default SideBar