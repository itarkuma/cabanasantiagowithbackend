import { LoteImage } from '@/components/lote/lote-image/LoteImage';
import { Title } from '../title/Title';
import { About as aboutint } from '@/interfaces';


export const About = ( { title_about, texto_about, imagen_about }: aboutint ) => {
  return (
    <div id="about">

      <div className="max-w-sm mx-auto bg-white  overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {
              !!imagen_about && (

                <LoteImage width={ 320 } height={ 0 }
                  src={ imagen_about } alt="Nosotros"
                  sizes="100vw"
                  className="object-cover max-w-80 h-full" />
              )
            }
          </div>
          <div className="p-6">
            <Title title={ title_about } className="text-justify  text-base antialiased leading-relaxed tracking-normal " />
            <p className=" text-justify mt-2 text-gray-500"> { texto_about }</p>
          </div>
        </div>
      </div>

    </div>
  );
};