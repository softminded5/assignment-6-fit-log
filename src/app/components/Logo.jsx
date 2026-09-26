import Image from 'next/image'
import React from 'react';

const Logo = () => {
  return (

    <Image
      src="/logo.png"
      width={30}
      height={30}
      alt="Logo"
    />

  );
};

export default Logo;