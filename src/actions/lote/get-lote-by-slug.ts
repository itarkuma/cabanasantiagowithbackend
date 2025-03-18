'use server';

import prisma from '@/lib/prisma';

export const getLoteBySlug = async ( slug: string ) => {

  try {

    const lote = await prisma.lote.findFirst( {
      where: {
        slug
      }
    } );

    if ( !lote ) return null;

    return {
      ...lote
    };

  } catch ( error ) {
    throw new Error( 'No se pudo cargar el lote: ' + error );
  }

};