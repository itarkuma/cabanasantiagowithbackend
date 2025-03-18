'use server';

import prisma from '@/lib/prisma';
import { Lote } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL ?? '' );


const formDataSchema = z.object( {
  id: z.string().uuid().optional().nullable(),
  title: z.string().min( 3 ).max( 255 ),
  slug: z.string().min( 3 ).max( 255 ),
  order: z.preprocess( ( val ) => Number( val ), z.number().min( 1 ).max( 100 ) ),
  portada: z.instanceof( File ).optional().nullable(),
  videoId: z.string().optional().nullable(),
  state: z.preprocess( ( val ) => val === "true", z.boolean() ),
} );



export const createUpdateLote = async ( formData: FormData ) => {

  const data = Object.fromEntries( formData );
  const loteParsed = formDataSchema.safeParse( data );
  if ( !loteParsed.success ) {
    console.log( loteParsed.error );
    return {
      ok: false
    };
  }

  const lote = loteParsed.data;
  lote.slug = lote.slug.toLowerCase().replace( / /g, '-' ).trim();

  // eslint-disable-next-line
  const { id, portada, ...rest } = lote;

  try {

    const prismaTx = await prisma.$transaction( async () => {

      let lote: Lote;

      if ( id ) {

        //Actualizar
        lote = await prisma.lote.update( {
          where: {
            id
          },
          data: { ...rest },
        } );

      } else {
        //Crear
        lote = await prisma.lote.create( {
          data: { ...rest },
        } );
      }

      let images;

      if ( formData.getAll( 'portada' ) ) {
        images = await uploadImage( formData.getAll( 'portada' ) as File[] );
        if ( !images ) {
          throw new Error( 'No se pudieron cargar las imagenes, rollingback...' );
        }

        await prisma.lote.update( {
          where: {
            id: lote.id
          },
          data: {
            portada: images[ 0 ]
          },
        } );

      }

      return {
        lote
      };

    } );

    //Todo: RevalidatePaths
    revalidatePath( '/dashboard/lotes' );
    revalidatePath( `/dashboard/lote/${ lote.slug }` );

    return {
      ok: true,
      lote: prismaTx.lote
    };

  } catch ( error ) {
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actulizar /crear' + error
    };
  }



};

const uploadImage = async ( images: File[] ) => {

  try {

    const uploadPromises = images.map( async ( image ) => {

      try {

        const buffer = await image.arrayBuffer();
        const base64image = Buffer.from( buffer ).toString( 'base64' );

        return cloudinary.uploader.upload( `data:image/jpg;base64,${ base64image }` ).then( r => r.secure_url );
      } catch ( error ) {

        console.log( error, 'cloudinary error' );
        return null;
      }

    } );

    const uploadedImages = await Promise.all( uploadPromises );
    return uploadedImages;

  } catch ( error ) {
    console.log( error, 'cloudinary2 error' );
    return null;

  }

};
