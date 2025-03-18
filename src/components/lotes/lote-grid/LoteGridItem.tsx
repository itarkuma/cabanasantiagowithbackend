import { LoteImage } from '@/components';
import { Lotes } from '@/interfaces';
import Link from 'next/link';
import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';

interface Props {
  lote: Lotes;
}

export const LoteGridItem = ( { lote }: Props ) => {

  return (

    <tr key={ lote.slug } className="bg-white border-4 border-gray-200">
      <td>
        <span className="text-center ml-2 font-semibold">
          { lote.order }
        </span>
      </td>
      <td>
        <span className="text-center ml-2 font-semibold">
          <Link
            href={ `/dashboard/lote/${ lote.slug }` }
            className="hover:underline"
          >
            { lote.title }
          </Link>
        </span>
      </td>


      <td className="px-16 py-2 flex flex-row items-center">
        <LoteImage src={ lote.portada! }
          width={ 150 }
          height={ 200 }
          alt={ lote.title }
          className="w-32 h-32 object-cover rounded"
        />
        {/* <Image src={ lote.portada }
          width={ 150 }
          height={ 200 }
          className="w-32 h-32 object-cover rounded"
          alt={ lote.title } /> */}
      </td>
      <td className="px-16 py-2">
        <span>{ lote.videoId }</span>
      </td>
      <td className="px-16 py-2">
        {
          lote.state === true ? (
            <span className="text-green-500">
              <IoCheckmarkOutline size={ 30 } />
            </span>
          ) : (
            <span className="text-red-500">
              <IoCloseOutline size={ 30 } />
            </span>
          )
        }

      </td>
    </tr >

  );
};