
import { VideoPortada } from '@/components/frontend/VideoPortada';
import { Container } from '@/components/frontend/Container';

import { nosotros, benefitThree, patrocinan, auspiciadores } from "@/components/frontend/data";

import Image from 'next/image';
import logo_rivera from '../../../public/img/group_rivera.png';
import firma_rivera from '../../../public/img/firma.png';
import firma_grivera from '../../../public/img/nosotros/foto_grivera2.png';
import { Benefits } from '@/components/frontend/Benefits';
import Link from 'next/link';
import Countdown from '@/components/frontend/Countdown';
import { Marcas } from '@/components/frontend/Marcas';
import { Cta } from '@/components/frontend/Cta';
import { LotesFront } from '@/components';

export default async function WebSitePage() {


  const iframe = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcabanasantiagobo&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=309588772910273" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';
  return (
    <>
      <VideoPortada videoId="v1739314362" />
      <Container className="p-8 lg:pt-16" >
        <LotesFront />
      </Container>
      <Container className=" lg:bg-right lg:bg-no-repeat  lg:bg-cover w-full max-w-none lg:w-screen" >
        <div className="container max-w-8xl bg-franjadorada relative  text-white flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0" >
          <div className="w-full grid grid-cols-6 gap-6 text-center px-2 py-2 md:px-[50px] md:py-[80px]" >
            <div className="col-span-6 md:col-span-3 items-center">
              <Image
                src={ firma_grivera }
                width={ 461 }
                height={ 591 }
                alt="Benefits"
                className={ "object-contain items-center justify-center m-auto " }
                placeholder="blur"
                quality={ 100 }
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Image
                src={ logo_rivera }
                width={ 410 }
                height={ 117 }
                alt="Benefits"
                className="object-cover rounded-md items-center justify-center m-auto px-24 md:px-0  -translate-x-3 md:-translate-x-6"
                placeholder="blur"
              />

              <p className="max-w-[570px] px-8 md:px-0 py-2 md:py-4 pt-4 mx-auto text-base md:text-xl lg:text-2xl text-justify leading-normal text-gray-300">
                Referente en genética ganadera,
                se consolida como símbolo de calidad y prestigio.
              </p>
              <p className="max-w-[570px] px-8 md:px-0 py-2 md:py-4 mx-auto text-base md:text-xl lg:text-2xl text-justify leading-normal text-gray-300">
                Con mucha dedicación, hemos construido
                una historia que pone en alto
                la ganadería de élite.
              </p>
              <p className="max-w-[570px] px-8 md:px-0 py-2 md:py-4 mx-auto text-base md:text-xl lg:text-2xl text-justify leading-normal text-gray-300">
                Este 2025, abrimos nuestras puertas para la
                <b> 2da Edición del Remate Selección Élite
                  Santiago & Amigos</b>, un evento
                que combina lujo, genética superior
                y una experiencia sin igual.
              </p>

              <div className="  m-auto lg:flex lg:w-2/3 lg:h-auto" >
                <Image
                  src={ firma_rivera }
                  width={ 218 }
                  height={ 132 }
                  alt="Benefits"
                  className={ "object-cover rounded-md items-center justify-center mt-5 mb-5 md:mb-0 m-auto px-12 md:px-0 -translate-x-3 md:-translate-x-6" }
                  placeholder="blur"
                />
              </div>

            </div>
          </div>
        </div>


      </Container>
      <Container className="p-8 lg:pt-16   lg:bg-cover w-full max-w-none lg:w-screen " >
        <Benefits video={ true } imgPos="right" data={ nosotros } />
      </Container  >



      <Container className=" bg-black bg-opacity-20  lg:bg-cover w-full max-w-none lg:w-screen " >

        <Container className={ ` flex flex-wrap mb-0 py-2 lg:mb-0 lg:gap-10 lg:flex-nowrap  lg:py-5 max-w-5xl ` } >

          <Countdown bigsize={ true } />

        </Container>



        <div className="bg-goldenboy text-verdeoficial text-lg flex flex-col items-center justify-center  p-5 lg:flex-row" >
          <div className="hidden md:block" >
            CABAÑA SANTIAGO | SANTA CRUZ, BOLIVIA - 22 DE MARZO DEL 2025, 10 AM
          </div>
          <div className="pb-2 text-xs items-center text-center md:hidden" >
            CABAÑA SANTIAGO | SANTA CRUZ, BOLIVIA  <br />
            22 DE MARZO DEL 2025, 10 AM
          </div>

          <Link href="https://calendar.app.google/RaRvdqFj44uyoaX99" target="_blank" className=" ml-2 px-2 py-0 text-white font-extrabold verdeofi hover:verdeofic rounded-md lg:text-lg w-fit">
            AGENDAR EVENTO
          </Link>
        </div>
      </Container>

      <Container className="p-8 lg:pt-16   " >
        <Benefits data={ benefitThree } />
      </Container>


      <Container className="bg-white  lg:bg-cover w-full max-w-none lg:w-screen ">
        <div className="flex flex-wrap">
          <div className=" w-full lg:w-2/5  ">
            <Marcas titulooff={ 'pb-0' } data={ patrocinan } />
          </div>
          <div className="w-full lg:w-3/5 ">
            <Marcas data={ auspiciadores } />
          </div>
        </div>
      </Container>

      <div className=" bg-goldenboy  flex flex-col items-center justify-center  p-5 lg:flex-row ">
        <Cta />

        <div className=" md:hidden " >
          <div
            dangerouslySetInnerHTML={ { __html: iframe } }
          />
        </div>

      </div>

    </>
  );
}
