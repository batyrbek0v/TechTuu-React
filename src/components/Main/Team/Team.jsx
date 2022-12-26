import React from 'react'
import { teamList } from '../../../utils/cardList'
import Title from '../../UI/Title/Title'
import cls from './Team.module.scss'
const Team = () => {
  return (
    <>
      <div className={cls.teamContainer}>
        <Title title="Our team" />
        <div className={cls.teamCardsWrapper}>
          {
            teamList.map(({ id, url, name, job }) => (
              <div className={cls.teamCard} key={id}>
                <div className={cls.cardHeader} >
                  <img src={url} alt={name} />
                </div>
                <div className={cls.cardFooter}>
                  <h2>{name}</h2>
                  <p>{job}</p>
                </div>
              </div>
            ))
          }
        </div >
      </div >
    </>
  )
}

export default Team