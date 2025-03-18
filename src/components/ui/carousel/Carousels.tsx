'use client';

import { Title } from '../title/Title';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LoteImage } from '@/components/lote/lote-image/LoteImage';



export const Carousels = () => {

  const imagenes = [
    {
      titulo: 'Imagen 1',
      imagen: '1727277714_3100.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727277781_4965.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727279519_5630.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727279529_2275.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727279547_7112.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727279598_8387.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727282118_4068.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727282163_4140.png',
    },
    {
      titulo: 'Imagen 1',
      imagen: '1727282311_7928.png',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="clients">
      <div className="bg-cover w-full flex justify-center items-center">
        <div className="w-full bg-white px-5 pb-16 ">
          <div className="w-12/12 mx-auto rounded-2xl bg-white px-5">

            <Title title="Nuestros Clientes" />

            <Carousel
              swipeable={ false }
              draggable={ false }
              showDots={ false }
              responsive={ responsive }
              ssr={ true } // means to render carousel on server-side.
              infinite={ true }
              //        autoPlay={ this.props.deviceType !== "mobile" ? true : false }
              autoPlay={ true }
              autoPlaySpeed={ 1000 }
              keyBoardControl={ true }
              arrows={ false }
              itemClass="carousel-item-padding-40-px"

            >
              {
                imagenes.map( ( imagen, index ) => {
                  return (
                    <div className="flex flex-col m-2" key={ index }>
                      <LoteImage width={ 300 } height={ 328 } src={ imagen.imagen } alt={ imagen.titulo } className="w-full rounded-2xl" />
                    </div>
                  );
                } )
              }

            </Carousel>


          </div>
        </div>
      </div>



    </div>
  );
};