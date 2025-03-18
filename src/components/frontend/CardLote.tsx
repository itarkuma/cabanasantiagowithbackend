import { Container } from './Container';
import { LoteImage } from './LoteImage';
import { VideoYoutube } from './VideoYoutube';

interface SeedLotes {
  title: string;
  portada: string | null;
  videoId: string | null;
}
interface Props {
  lote: SeedLotes;
}

export const CardLote = ( { lote }: Props ) => {
  const { portada, videoId } = lote;
  return (
    <>
      <Container className="flex flex-wrap p-0 ">
        <div className="flex items-center justify-center w-full">
          <div className="relative  h-full w-full">
            { portada && (

              <LoteImage
                alt="wardrobe"
                src={ portada }
                width={ 0 }
                height={ 0 }
                sizes="100vw"
                className="w-full h-auto"
              />
            ) }
          </div>
        </div>
        {
          videoId && (

            <div className="flex items-center justify-center w-full" >
              <div className="relative w-full h-[210px] max-w-4xl mx-auto overflow-hidden lg:mb-0 rounded-md  cursor-pointer  bg-cover  lg:max-w-full  lg:h-auto">
                <VideoYoutube videoId={ videoId } />
              </div>
            </div>
          )
        }
      </Container>
    </>
  );
};