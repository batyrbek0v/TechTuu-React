import React from 'react'
import cls from './Header.module.scss'
import logo from '../../assets/img/logo.png'
import bars from '../../assets/icons/bars.svg'
import SideBar from './Sidebar/SideBar'
import { scrolling } from '../../utils/Anchor'
import { navList } from '../../utils/cardList'

const Header = () => {

  const [sideBar, setSideBar] = React.useState(false)

  const showSideBar = () => setSideBar(true)


  return (
    <>
      <header>
        <nav className={cls.nav}>
          <a href="/">
            <img src={logo} alt="tech-tuu-logo" />
          </a>
          <div className={cls.navListBlock}>
            <ul className={cls.navList}>
              {
                navList.slice(0, 3).map(({ id, title, route }) => (
                  <li key={id} onClick={() => scrolling(route)}>
                    <a>
                      {title}
                    </a>
                  </li>
                ))
              }
            </ul>
            <button className={cls.navBtn} onClick={() => scrolling(3710)}>
              Contact us
            </button>
          </div>
          <div className={cls.burger} onClick={showSideBar}>
            <img className={cls.bars} src={bars} alt="bars-icon" />
          </div>
        </nav>
        <SideBar sideBarActive={sideBar} setSideBar={setSideBar} />
      </header>
    </>
  )
}

export default Header