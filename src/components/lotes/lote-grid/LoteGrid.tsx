import { Lotes } from '@/interfaces';
import { LoteGridItem } from './LoteGridItem';

interface Props {
  lotes: Lotes[];
}

export const LoteGrid = ( { lotes }: Props ) => {
  return (
    <>
      <table className="min-w-full">
        <thead className="justify-between">
          <tr className="bg-gray-800 border-b">

            <th className="px-16 py-2">
              <span className="text-gray-300">Posicion</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Nombre</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Portada</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Video</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Estado</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">

          {
            lotes.map( ( lote ) => {
              return (
                <LoteGridItem key={ lote.id } lote={ lote } />
              );
            } )
          }
        </tbody>
      </table>

    </>
  );
};