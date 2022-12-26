import React from 'react'
import cls from './Projects.module.scss'
import Title from '../../UI/Title/Title'
import { cardList } from '../../../utils/cardList'

const Projects = () => {
  return (
    <>
      <div className={cls.projectsContainer}>
        <Title title="Our projects" />
        <div className={cls.projectsInnerContainer}>
          <div className={cls.projectsWrapper}>
            {
              cardList.map(({ id, url, route, alt }) => (
                <a
                  href={route}
                  className={cls.Link}
                  key={id}
                >
                  <div className={cls.projectBlock}>
                    <img src={url} alt={alt} />
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects