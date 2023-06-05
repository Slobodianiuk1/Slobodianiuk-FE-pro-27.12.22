import React from 'react';
import Image from "next/image";

const NotFound = () => {
  return (
    <div className='text-center'>
      <h3>404</h3>
      <Image
        src={'https://w7.pngwing.com/pngs/100/474/png-transparent-paper-unlayered-and-free-a-journal-for-the-loosed-lady-in-you-404-text-logo-computer-wallpaper.png'}
        alt={'Same text'}
        width={500}
        height={500}
      />
    </div>
  );
};

export default NotFound;