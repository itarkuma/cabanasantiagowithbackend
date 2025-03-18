'use client';

import { IoLogOutOutline } from 'react-icons/io5';

interface Props {
  logout: () => void;
}

export const LogoutButton = async ( { logout }: Props ) => {

  return (
    <button
      onClick={ () => logout() }
      className="px-4 py-3 flex items-center space-x-4 group" >
      <IoLogOutOutline className=" w-8 h-8" />
      <span className="group-hover:text-gray-200" >Salir</span>
    </button>
  );
};