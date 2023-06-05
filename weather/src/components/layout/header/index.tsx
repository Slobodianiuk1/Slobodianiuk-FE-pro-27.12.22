import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header className='bg-blue-800 p-4'>
      <nav >
        <ul className='flex gap-10'>
          <li className='hover:text-amber-700'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='hover:text-amber-700'>
            <Link href='/cities'>Cities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;