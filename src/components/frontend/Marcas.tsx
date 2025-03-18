import Image from "next/image";
import { Container } from "./Container";
/* eslint-disable @typescript-eslint/no-explicit-any */
interface MarcasProps {
  titulooff?: string;
  data: {
    title: string;
    images: {
      logo: any;
    }[];
    size: string;
  };
}

export const Marcas = ( props: Readonly<MarcasProps> ) => {
  const { data, titulooff } = props;
  return (

    <Container className="flex flex-col p-5 mb-1 w-full items-center justify-center ">
      {
        (

          <div className={ `flex w-full p-8 max-w-7xl items-start justify-start ${ titulooff }` }>
            { data.title && (
              <h2 className="flex  uppercase mt-3 text-3xl font-black leading-snug tracking-tight  lg:leading-tight lg:text-4xl dark:text-golden  ">
                { data.title }
              </h2>
            ) }
          </div>
        )
      }

      <div className="flex flex-col justify-center gap-2 mt-1 md:justify-around lg:flex-row ">
        {
          data.images.map( ( item, index ) => (
            <div key={ index } className={ `relative  ${ data.size } h-[220px]` } >
              <Image
                src={ item.logo }
                alt="Benefits"
                fill
                className={ `object-contain object-center ${ data.size } ` }
                placeholder="blur"
                blurDataURL={ item.logo.src }
              />

            </div>

          ) )
        }
      </div>
    </Container>


  );
}


