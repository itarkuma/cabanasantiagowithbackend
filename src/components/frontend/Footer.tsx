import Link from "next/link";
import React from "react";
import { Container } from "@/components/frontend/Container";

export function Footer() {

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-1 mx-auto py-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">

          <div id="sociales" className="lg:col-span-5 flex justify-center items-center  md:mt-0">
            <div className="flex items-center justify-center space-x-5   ">
              <div className="hidden md:block" >
                <div className="flex items-center justify-center space-x-5 text-white dark:text-gray-500 ">

                  <a
                    href="https://www.tiktok.com/@ganaderia360"
                    target="_blank"
                    rel="noopener"
                    className="text-white/50 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <TikTok size={ 25 } />
                  </a>
                  <a
                    href="https://www.instagram.com/ganaderia360.bo/"
                    target="_blank"
                    rel="noopener"
                    className="text-white/50 hover:text-gray-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram size={ 25 } />
                  </a>
                </div>
              </div>
              <div className="block md:hidden  items-center justify-center space-x-5" >
                <div className="flex items-center justify-center space-x-5 text-white dark:text-gray-500 ">

                  <a
                    href="https://www.tiktok.com/@ganaderia360"
                    target="_blank"
                    rel="noopener"
                    className="text-white/50 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <TikTok size={ 20 } />
                  </a>
                  <a
                    href="https://www.instagram.com/ganaderia360.bo/"
                    target="_blank"
                    rel="noopener"
                    className="text-white/50 hover:text-gray-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram size={ 20 } />
                  </a>
                </div>
              </div>

              <Link className="text-white/50 hover:text-gray-500" target="_blank" href="https://www.ganaderia360.com/" >
                Desarrollado por Ganaderia360
              </Link>

            </div>

          </div>
        </div>

      </Container>

    </div>
  );
}

const TikTok = ( { size = 24, color = "currentColor", className = "" } ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ size }
    height={ size }
    viewBox="0 0 24 24"
    fill={ color }
    className={ className }
    aria-hidden="true"
  >
    <title>TikTok Icon</title>
    <path d="M9.84 21.5c-3.18 0-5.77-2.6-5.77-5.78 0-3.19 2.6-5.78 5.77-5.78.17 0 .34 0 .51.02v2.28a3.5 3.5 0 0 0-.51-.05 3.51 3.51 0 0 0-3.5 3.53c0 1.94 1.56 3.53 3.5 3.53 1.98 0 3.47-1.58 3.5-3.53V2.5h2.69a4.84 4.84 0 0 0 2.71 3.78c.7.36 1.46.58 2.24.65v2.61a6.92 6.92 0 0 1-2.93-.7 7.28 7.28 0 0 1-2.15-1.52v7.9c-.06 3.19-2.66 5.78-5.84 5.78z" />
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


