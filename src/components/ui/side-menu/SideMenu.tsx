'use client';

import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const SideMenu = () => {

  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );

  const onClick = () => {
    console.log( "click" );
    closeMenu();

  };

  return (
    <div>
      {/* Background Black */ }
      {
        isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
        )
      }
      {/* Blur */ }
      {
        isSideMenuOpen && (
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm" />
        )
      }
      {/* SideMenu */ }
      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-screen h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )
      } >
        <IoCloseOutline size={ 50 }
          className="absolute top-5 right-5 text-black cursor-pointer"
          onClick={ () => closeMenu() }
        />

        {/* Menu */ }
        <Link
          href="/"
          onClick={ onClick }
          className="flex items-center mt-10 p-2 text-black hover:bg-gray-100 transition-all duration-300"
        >
          <span className="ml-3 text-xl" >INICIO</span>
        </Link>
        <Link
          href="#about"
          onClick={ onClick }
          className="flex items-center mt-10 p-2 text-black hover:bg-gray-100 transition-all duration-300"
        >
          <span className="ml-3 text-xl" >NOSOTROS</span>
        </Link>
        <Link
          href="#service"
          onClick={ onClick }
          className="flex items-center mt-10 p-2 text-black hover:bg-gray-100 transition-all duration-300"
        >
          <span className="ml-3 text-xl" >SERVICIOS</span>
        </Link>
        <Link
          href="#clients"
          onClick={ onClick }
          className="flex items-center mt-10 p-2 text-black hover:bg-gray-100 transition-all duration-300"
        >
          <span className="ml-3 text-xl" >NUESTROS CLIENTES</span>
        </Link>
        <Link
          href="#contact"
          onClick={ onClick }
          className="flex items-center mt-10 p-2 text-black hover:bg-gray-100 transition-all duration-300"
        >
          <span className="ml-3 text-xl" >CONTACTO</span>
        </Link>

      </nav>


    </div>
  );
};