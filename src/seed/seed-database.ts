import { initialData } from './seed';
import prisma from '../lib/prisma';


async function main() {


  await prisma.lote.deleteMany();
  await prisma.user.deleteMany();

  const { lotes, users } = initialData;


  lotes.forEach( async ( lote ) => {
    const { ...resto } = lote;

    await prisma.lote.create( {
      data: {
        ...resto
      },
    } );
  } );

  await prisma.user.createMany( {
    data: users,
  } );

  console.log( 'Seed Ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;
  main();

} )();