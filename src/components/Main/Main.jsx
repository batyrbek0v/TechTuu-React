import React from 'react';
import cls from './Main.module.scss';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Slider from './Projects/Slider';
import FormContainer from './FormContainer/FormContainer';
import Circle from './Circle/Circle';

const Main = () => {
  return (
    <>
      <main>
        <div className={cls.generalContainer}>
          <Circle />
          <Projects />
          <Slider />
          <Team />
          <FormContainer />
        </div>
      </main>
    </>
  );
};

export default Main;
