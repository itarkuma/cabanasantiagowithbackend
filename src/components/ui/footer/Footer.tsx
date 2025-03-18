
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

interface Props {
  tiktok: string;
  instagram: string;
  phone: string;
  email: string;
  address: string;
}

export const Footer = async ( { tiktok, instagram, phone, email, address }: Props ) => {


  return (
    <div className="flex items-end w-full  bg-white">
      <footer id="contact" className="w-full text-gray-700 bg-gray-100 body-font">
        <div
          className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">

            <Link href="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <Image src="/img/G360.svg" width={ 200 } height={ 80 } alt="logo" />
            </Link>
            <div className="mt-4">
              <span className="inline-flex justify-center text-center mt-2 sm:ml-auto sm:mt-0 sm:justify-center">
                {
                  tiktok && (
                    <Link href={ tiktok } className="text-gray-500 cursor-pointer hover:text-gray-700">
                      <IoLogoInstagram className="w-6 h-6" />
                    </Link>
                  )
                }
                {
                  instagram && (
                    <Link href={ instagram } className="text-gray-500 cursor-pointer hover:text-gray-700">
                      <IoLogoTiktok className="w-6 h-6" />
                    </Link>
                  )
                }
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">

            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Telefono</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  { phone }
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Correo</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  { email }
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Ubicacion
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  { address }
                  {/* <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a> */ }
                </li>
              </nav>
            </div>

          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">© 2024 All rights reserved to ganaderia360 </p>
          </div>
        </div>
      </footer>

    </div>
  );
};