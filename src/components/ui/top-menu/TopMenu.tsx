'use client';

import { useUIStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

interface Props {
  tiktok: string;
  instagram: string;
}

export const TopMenu = ( { tiktok, instagram }: Props ) => {

  const openSideMenu = useUIStore( state => state.openSideMenu );

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */ }
      <div>
        <Link href="/" className="flex items-center">
          <Image src="/img/G360.svg" width={ 200 } height={ 80 } alt="logo" />
        </Link>
      </div>

      {/* Center Menu */ }
      <div className="hidden sm:block" >

        <div className="flex sticky top-0" >

          <div className="flex  space-x-0">
            {
              tiktok && (

                <Link href={ tiktok }
                  className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
                  <IoLogoInstagram className="w-5 h-5" />
                </Link>
              )
            }
            {
              instagram && (

                <Link href={ instagram }
                  className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
                  <IoLogoTiktok className="w-5 h-5" />
                </Link>
              )
            }
          </div>
          <div className="flex  space-x-4">

            <Link href="/"
              className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
              INICIO
            </Link>
            <Link href="#about"
              className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
              NOSOTROS
            </Link>
            <Link href="#service"
              className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
              SERVICIOS
            </Link>
            <Link href="#clients"
              className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
              NUESTROS CLIENTES
            </Link>
            <Link href="#contact"
              className="m-2 p-2 rounded-md transition-all text-black hover:bg-gray-100">
              CONTACTO
            </Link>
          </div>
        </div>


      </div>
      {/* Menu Mobile */ }
      <div className="sm:hidden" >
        <button
          onClick={ openSideMenu }
          className="flex items-center p-2 rounded-md transition-all text-black hover:bg-gray-100">
          Menu
        </button>

      </div >

    </nav >
  );
};