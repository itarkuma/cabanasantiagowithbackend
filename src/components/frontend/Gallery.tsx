import Image from "next/image";
import React from "react";
import { Container } from "@/components/frontend/Container";
/* eslint-disable @typescript-eslint/no-explicit-any */
interface GaleriaProps {
  bullets: {
    icon: any;
  }[];
}


export const Gallery = ( props: Readonly<GaleriaProps> ) => {
  return (
    <Container>
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

        { props.bullets.map( ( item, index ) => (
          <div key={ index } className="flex items-center w-full " >
            <Image src={ item.icon.src } width={ 270 } height={ 220 } alt="galeria" className="rounded-md w-full" />
          </div>
        ) ) }


      </div>
    </Container>
  );
};


