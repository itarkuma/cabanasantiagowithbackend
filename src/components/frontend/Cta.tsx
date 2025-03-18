import React from "react";
import { Container } from "@/components/frontend/Container";
import Link from "next/link";

export const Cta = () => {
  const iframe = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcabanasantiagobo&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=309588772910273" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';
  return (
    <Container className=" lg:w-full">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-verdea  px-7 py-7 lg:px-12 lg:py-2 lg:flex-nowrap ">
        <div className="flex flex-col w-full justify-between space-y-5">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl text-center md:text-left">
              ¿Te Gustaría participar?
            </h2>
            <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl text-center md:text-left">
              Envíanos tus datos y nos contactaremos muy pronto.
            </p>
          </div>


          <Link href="https://wa.me/+59173962900?text=M%C3%A1s%20informaci%C3%B3n%20sobre%20el%202do%20Remate%20Selecci%C3%B3n%20Elite%20de%20Santiago%3F" target="_blank" className="px-6 py-2 text-white verdeofi hover:verdeofic rounded-md lg:text-3xl w-fit mx-auto md:mx-0">
            Más Información
          </Link>

          <div className="flex flex-col w-full  justify-between space-y-5 items-center md:items-start " >
            <a
              href="https://www.facebook.com/cabanasantiagobo"
              target="_blank"
              rel="noopener"
              className="text-verdeoficial hover:text-yellow-900 flex text-left text-sm "
            >
              <span className="sr-only">Facebook</span>
              <Facebook size={ 25 } /> &nbsp;
              CabañaSantiagoBo
            </a>
            <a
              href="https://www.instagram.com/cabanasantiagobo"
              target="_blank"
              rel="noopener"
              className="text-verdeoficial hover:text-yellow-900 flex text-sm"
            >
              <span className="sr-only">Instagram</span>
              <Instagram size={ 25 } /> &nbsp;
              CabañaSantiagoBo
            </a>

          </div>

        </div>
        <div className="hidden md:block  flex-shrink-0 w-full text-center lg:w-auto">

          <div>
            <div
              dangerouslySetInnerHTML={ { __html: iframe } }
            />
          </div>

        </div>
      </div>
    </Container>
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
