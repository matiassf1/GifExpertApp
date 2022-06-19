import React from 'react';

export const GifItem = ({ title, url }) => {
  if (title === '') {
    title = 'gif void';
  }

  return (
    <div className='card'>
      <img src={url} alt='' />
      <p className='capitalize'>{title}</p>
    </div>
  );
};


