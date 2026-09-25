import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
    const links = <>
        <li>
            <Link href="/">Workouts</Link>
        </li>

        <li>
            <Link href="/myPlanPage">My Plan</Link>
        </li>
    </>
    return (
 <nav>
  <div className="navbar bg-base-100 shadow-sm">
    
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost md:hidden"
        >
          <svg
            aria-label="Menu"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          {links}
        </ul>
      </div>

      <Logo />
      <h2 className='text-3xl text-bold p-2'>FITLOG</h2>
    </div>

    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>

    <div className="navbar-end gap-2">
      <a className="btn">Plan</a>
      <a className="btn">Saved</a>
    </div>

  </div>

  <hr className="border-gray-700" />
</nav>



    );
};

export default Navbar;