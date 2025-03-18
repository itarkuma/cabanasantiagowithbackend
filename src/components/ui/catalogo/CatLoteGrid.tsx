import { CatLoteCard } from './CatLoteCard';


interface SeedLotes {
  title: string;
  portada: string | null;
  videoId: string | null;
}

interface VideoGridProps {
  Lotes: SeedLotes[];
}

export const CatLoteGrid = ( { Lotes }: VideoGridProps ) => {

  return (
    <>
      {
        Lotes.map( ( lote ) => {
          return (
            <CatLoteCard key={ lote.videoId } lote={ lote } />
          );
        } )
        // Lotes.map( ( lote ) => {
        //   return (
        //     <CatLoteCard key={ lote.videoId } lote={ lote } />
        //     <h1> { lote.title } </h1>
        //   );
        // } )
      }
    </>
  );
};