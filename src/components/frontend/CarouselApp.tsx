'use client';

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */
interface CarouselProps {
  bullets: {
    icon: any;
  }[];
}


export const CarouselApp = ( props: Readonly<CarouselProps> ) => {

  const settings = {
    showArrows: false,
    interval: 3500,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };

  return (
    <>
      <Carousel { ...settings } >
        {/* <div> */ }
        { props.bullets.map( ( item, index ) => (
          <div key={ index } >
            <Image src={ item.icon.src } width={ 270 } height={ 220 } quality={ 100 } alt="" className="rounded-md w-full" />
          </div>
        ) ) }
        {/* </div> */ }


      </Carousel>

    </>
  );
};
