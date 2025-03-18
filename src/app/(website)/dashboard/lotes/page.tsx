import { getPaginatedLotes } from '@/actions';
import { LoteGrid, Pagination, Title } from '@/components';

import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function LotesPage( { searchParams }: Props ) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { lotes, totalPages } = await getPaginatedLotes( { page } );

  if ( lotes.length === 0 ) {
    redirect( '/dashboard/lotes' );
  }

  return (
    <div className="flex flex-col  w-full" >
      <Title title="Lotes" subtitle="Listado de Lotes" />

      <div className="flex justify-end mb-5" >
        <Link href="/dashboard/lote/new" className="btn-primary">
          Nuevo Lote
        </Link>
      </div>

      <LoteGrid lotes={ lotes } />

      <Pagination totalPages={ totalPages } />

    </div>
  );
}