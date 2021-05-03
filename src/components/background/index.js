import React from 'react';
import teste from '../../video/02.mp4';
import { Video } from './style';
export const Background = () => {
  return (
    <>
      <Video autoPlay muted loop>
        <source src={teste} type='Video/mp4' />
      </Video>
    </>
  );
};
