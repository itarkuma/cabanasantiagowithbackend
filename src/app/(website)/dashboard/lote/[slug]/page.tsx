import { getLoteBySlug } from '@/actions';
import { Title } from '@/components';
import { redirect } from 'next/navigation';
import { LoteForm } from './ui/LoteForm';

interface Props {
  params: {
    slug: string;
  };
}

export default async function LotePage( { params }: Props ) {

  const { slug } = params;

  const [ lote ] = await Promise.all( [
    getLoteBySlug( slug )
  ] );


  if ( !lote && slug !== 'new' ) {
    redirect( '/dashboard/lotes' );
  }

  const title = ( slug === 'new' ) ? 'Nuevo Lote' : 'Editar lote';

  return (
    <div>
      <Title title="Lote" subtitle={ title } />

      <LoteForm lote={ lote ?? {} } />

    </div>
  );
}