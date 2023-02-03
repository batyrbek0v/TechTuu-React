import React, { useState } from 'react';
import { teamList } from '../../../utils/cardList';
import Title from '../../UI/Title/Title';
import cls from './Team.module.scss';
import bg from '../../../assets/img/bgTEAM.png';

const Team = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', function (e) {
    setSize(window.innerWidth);
  });

  return (
    <>
      <div className={cls.team}>
        <div className={cls.teamContainer}>
          <Title title='Our team' />
          <div className={cls.teamCardsWrapper}>
            {teamList.map(({ id, url, name, job }) => (
              <div className={cls.teamCard} key={id}>
                <div className={cls.cardHeader}>
                  <img src={url} alt={name} />
                </div>
                <div className={cls.cardFooter}>
                  <h2>{name}</h2>
                  <p>{job}</p>
                </div>
              </div>
            ))}
          </div>
          {size >= 700 && <img src={bg} alt='bg' className={cls.bg} />}
        </div>
      </div>
    </>
  );
};

export default Team;
