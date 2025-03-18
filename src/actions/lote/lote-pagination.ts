'use server';

import prisma from '@/lib/prisma';

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedLotes = async ( { page = 1, take = 12 }: PaginationOptions ) => {

  if ( isNaN( page ) ) page = 1;
  if ( page < 1 ) page = 1;

  if ( isNaN( take ) ) take = 12;

  try {

    //1.- Obtener los lotes
    const lotes = await prisma.lote.findMany( {
      take: take,
      skip: ( page - 1 ) * take,
      orderBy: {
        order: 'asc'
      }
    } );

    //2.- Obtener los total de paginas
    const totalPages = await prisma.lote.count( {} );
    const totalPagesCount = Math.ceil( totalPages / take );

    return {
      currentPage: page,
      totalPages: totalPagesCount,
      lotes: lotes.map( ( lote ) => {
        return {
          ...lote
        };
      } )
    };

  } catch ( error ) {
    console.log( error );
    throw new Error( 'No se pudo cargar los lotes' );
  }
  //  return lotes;
};