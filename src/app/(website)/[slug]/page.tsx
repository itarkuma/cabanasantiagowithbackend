
import { getPaginatedLotesV } from '@/actions';
import { redirect } from 'next/navigation';



export default async function HomePage() {


  const lote = await getPaginatedLotesV( { page: 1 } );

  if ( !lote ) {
    redirect( '/' );
  }

  return (


    <div>
      {
        JSON.stringify( lote )
      }
      {/* <CatLoteGrid Lotes={ lote } /> */ }

    </div>

  );
}
