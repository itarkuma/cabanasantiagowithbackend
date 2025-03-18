import Image from 'next/image';

import Link from 'next/link';
import Countdown from './Countdown';

interface TopNavBarProps {
  cabecera?: boolean;
  counter?: "up" | "down";
}

export const TopNavbar = ( { }: Readonly<TopNavBarProps> ) => {
  return (
    <>
      <div className="supercabezon z-40 w-full bg-gradient-to-t from-goldenf1 via-goldenf2 to-goldenf3"  >

        <nav className="container max-w-8xl relative  text-white flex flex-wrap items-center justify-between p-0 mx-auto lg:justify-between xl:px-0 py-4">
          {/* Logo en Absolute */ }
          <div className="z-40 absolute left-4 top-0">
            <Image
              src="/img/nosotros/logo_santi2.png"
              alt="N"
              width={ 245 }
              height={ 191 }
              className="w-90 max-w-[90px] lg:w-auto lg:max-w-[245px] "
            />
          </div>

          {/* Contenido desplazado */ }
          <div className="w-full grid grid-cols-6 gap-6 text-center pl-20">
            <div>

            </div>
            <div className="col-span-5 md:col-span-2 col-start-2" >
              <h1 className="text-xs md:text-lg/6 text-verdeoficial text-left font-extrabold ">
                2DO GRAN REMATE SELECCIÓN ELITE SANTIAGO Y AMIGOS
              </h1>
            </div>
            <div className="hidden md:block lg:block col-span-3" >
              <div className="w-full grid grid-cols-4 lg:grid-cols-7" >
                <div className="hidden lg:block lg:col-span-3">
                  {/* <CounterDown /> */ }
                  <Countdown />
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="grid grid-cols-2 items-center">
                    <div className="col-span-1 flex items-center">

                      <a
                        href="https://www.facebook.com/cabanasantiagobo"
                        target="_blank"
                        rel="noopener"
                        className="text-verdeoficial hover:text-yellow-900 px-2"
                      >
                        <span className="sr-only">Facebook</span>
                        <Facebook size={ 39 } />
                      </a>
                    </div>
                    <div className="col-span-1 flex items-center">

                      <a
                        href="https://www.instagram.com/cabanasantiagobo"
                        target="_blank"
                        rel="noopener"
                        className="text-verdeoficial hover:text-yellow-900 px-2"
                      >
                        <span className="sr-only">Instagram</span>
                        <Instagram size={ 39 } />
                      </a>

                    </div>
                  </div>

                </div>
                <div className="col-span-3 flex items-center">
                  <Link href="https://wa.me/+59173962900?text=M%C3%A1s%20informaci%C3%B3n%20sobre%20el%202do%20Remate%20Selecci%C3%B3n%20Elite%20de%20Santiago%3F"
                    target="_blank"
                    className="text-xl lg:text-3xl text-verdeoficial text-right font-extrabold align-middle pl-4">
                    INFO: 73962900
                  </Link>
                </div>
              </div>
            </div>

          </div>


        </nav>
      </div>
      {/* solo en movil */ }
      <div className="block md:hidden" >
        <div className=" bg-gradient-to-t from-goldenf1 via-goldenf2 to-goldenf3  flex flex-col items-center justify-center  p-4 lg:flex-row ">
          <div className="flex-auto w-full items-center justify-center pb-3  ">
            <Countdown />
          </div>
          <div className="flex-auto w-full items-center justify-center lg:w-1/3">
            <div className="max-w-md grid grid-cols-7   text-xs text-center items-center justify-center font-normal sm:text-2xl sm:pb-0 text-verdea lg:max-w-full ">

              <div className="col-span-3 flex justify-end">
                <div className="grid grid-cols-2 justify-end">
                  <div className="col-span-1 flex justify-end" >

                    <a
                      href="https://www.facebook.com/cabanasantiagobo"
                      target="_blank"
                      rel="noopener"
                      className="text-verdeoficial hover:text-gray-500 px-2"
                    >
                      <span className="sr-only">Facebook</span>
                      <Facebook size={ 25 } />
                    </a>
                  </div>
                  <div className="col-span-1 flex justify-end">

                    <a
                      href="https://www.instagram.com/cabanasantiagobo"
                      target="_blank"
                      rel="noopener"
                      className="text-verdeoficial hover:text-gray-500 px-2"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram size={ 25 } />
                    </a>

                  </div>
                </div>

              </div>
              <div className="col-span-4 flex items-center">
                <Link href="https://wa.me/+59173962900?text=M%C3%A1s%20informaci%C3%B3n%20sobre%20el%202do%20Remate%20Selecci%C3%B3n%20Elite%20de%20Santiago%3F"
                  target="_blank"
                  className="text-base text-verdeoficial text-right font-extrabold align-middle pl-4">
                  INFO: 73962900
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

const Facebook = ( { size = 24 } ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ size }
    height={ size }
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ( { size = 24 } ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ size }
    height={ size }
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
