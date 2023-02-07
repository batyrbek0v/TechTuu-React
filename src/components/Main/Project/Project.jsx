import React, { useState } from 'react';
import Title from '../../UI/Title/Title';
import cls from './Project.module.scss';
import { cardList } from '../../../utils/cardList';
import second from '../../../assets/img/second.png';
import first from '../../../assets/img/first.png';

const Project = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', function (e) {
    setSize(window.innerWidth);
  });

  return (
    <>
      {size >= 830 ? (
        <div className={cls.projectWrapper}>
          <div className={cls.container}>
            <Title title='Our projects' />
            <ul className={cls.imgBlock}>
              <li className={cls.grey}></li>
              <li className={cls.orange}></li>
              <li className={cls.img1}>
                <img className={cls.justPhoto1} src={first} alt='justPhoto' />
              </li>
              <li className={cls.img2}>
                <img className={cls.justPhoto2} src={second} alt='justPhoto' />
              </li>
              {cardList?.map((el) => (
                <li
                  key={el.id}
                  className={cls[el.class]}
                  style={{
                    backgroundColor: el.id % 2 === 0 ? '#3B91D1' : '#F6C222',
                  }}
                >
                  <a
                    className={cls.links}
                    href={el.route}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>{el.alt}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Project;
