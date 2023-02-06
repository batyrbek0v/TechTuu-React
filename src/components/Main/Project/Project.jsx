import React from 'react';
import Title from '../../UI/Title/Title';
import cls from './Project.module.scss';
import first from '../../../assets/img/first.png';
import second from '../../../assets/img/second.png';
import third from '../../../assets/img/third.png';
import { cardList } from '../../../utils/cardList';

const Project = () => {
  return (
    <>
      <div className={cls.projectWrapper}>
        <div className={cls.container}>
          <Title title='Our projects' />
          <ul className={cls.imgBlock}>
            <li className={cls.grey}></li>
            <li className={cls.orange}></li>
            <li className={cls.img1}>
              <img src={first} alt='justPhoto' />
            </li>
            <li className={cls.img2}>
              <img src={second} alt='justPhoto' />
            </li>
            {cardList?.map((el) => (
              <li
                key={el.id}
                className={cls[el.class]}
                style={{
                  backgroundColor: el.id % 2 === 0 ? '#3B91D1' : '#F6C222',
                }}
              >
                <a href={el.route}>{el.alt}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Project;
