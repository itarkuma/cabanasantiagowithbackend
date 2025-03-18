import Image from "next/image";
import React from "react";
import { Container } from "@/components/frontend/Container";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Gallery } from "./Gallery";

import { CarouselApp } from './CarouselApp';
import { VideoNosotros } from './VideoNosotros';
/* eslint-disable @typescript-eslint/no-explicit-any */
interface BenefitsProps {
  imgPos?: "left" | "right";
  video?: boolean;
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      icon: any;
    }[];
    logo?: any;
  };
}
export const Benefits = ( props: Readonly<BenefitsProps> ) => {
  const { data } = props;

  return (
    <Container className={ ` flex flex-wrap mb-0 lg:mb-0 lg:gap-10 lg:flex-nowrap  lg:pb-10 max-w-5xl ` } >
      <div
        className={ `flex flex-col items-center justify-center w-full lg:w-1/2 ${ props.imgPos === "right" ? "lg:order-1" : ""
          }` }>
        <div className="flex mb-8 p-0 md:p-6 w-2/3 lg:hidden " >
          <Image
            src={ data.logo }
            width={ 521 }
            height={ 521 }
            alt="Benefits"
            className={ "object-cover " }
            placeholder="blur"
            blurDataURL={ data.logo.src }
            quality={ 100 }
          />
        </div>

        <div>
          { props.video === true ? (
            <div className="w-full h-full relative">

              <VideoNosotros videoId="os2shl1k2bwzfr0jfppx" />

            </div>
          ) : (
            <Image
              src={ data.image }
              width={ 521 }
              height={ 521 }
              alt="Benefits"
              className={ "object-cover rounded-md" }
              placeholder="blur"
              blurDataURL={ data.image.src }
              quality={ 100 }
            />
          ) }
        </div>
      </div>

      <div
        className={ `flex flex-wrap items-center w-full lg:w-1/2 ${ data.imgPos === "right" ? "lg:justify-end" : ""
          }` }>
        <div>
          <div className="flex flex-col w-full mt-4 lg:px-8">
            <div className="hidden  m-auto  lg:flex lg:w-2/3 lg:h-auto" >
              <Image
                src={ data.logo }
                width={ 521 }
                height={ 521 }
                alt="Benefits"
                className={ "object-cover rounded-md items-center p-3 justify-center m-auto" }
                placeholder="blur"
                blurDataURL={ data.logo.src }
                quality={ 100 }
              />

            </div>

            <p className="max-w-2xl py-4 text-base text-justify leading-normal text-gray-500 lg:text-xl/6 xl:text-xl dark:text-gray-300">
              { data.desc }
            </p>
          </div>
          <div className="flex lg:hidden " >
            <CarouselApp bullets={ data.bullets } />
          </div>
          <div className="hidden lg:flex lg:px-8" >
            <Gallery bullets={ data.bullets } />
          </div>


        </div>
      </div>

    </Container>
  );
};

