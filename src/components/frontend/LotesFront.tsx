import { getPaginatedLotesV } from '@/actions';
import { CardLote } from './CardLote';

export const LotesFront = async () => {

  const lote = await getPaginatedLotesV( { page: 1, take: 100 } );

  return (
    <div className="bg-white" >
      {
        lote.lotes.map( ( item, index ) => (
          <div key={ index } className="bg-white" >
            <CardLote lote={ item } />
          </div>
        ) )
      }

    </div>
  );
};