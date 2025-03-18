// [1,2,3,4,5,....,7]
export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {
  //si el numero de paginas es menor a 7 no mostrar paginas
  //mostrar todas las paginas
  if ( totalPages < 7 ) {
    return Array.from( { length: totalPages } ).map( ( _, i ) => i + 1 ); //[1,2,3,4,5,6,7]
  }
  //si la pagina actual esta entre las primeras 3paginas
  //mostrar las primers 3 paginas, puntos suspensivos, ultimas 2 paginas
  if ( currentPage <= 3 ) {
    return [ 1, 2, 3, '...', totalPages - 1, totalPages ];
  }

  //si la pagina actual esta entre las ultimas 3 paginas
  //mostrar las primeras 2 paginas, puntos suspensivos, ultimas 3 paginas
  if ( currentPage >= totalPages - 2 ) {
    return [ 1, 2, '...', totalPages - 2, totalPages - 1, totalPages ];
  }

  //si la pagina actual esta en otro lugar medio
  //mostrar la primera pagina, puntos suspensivos, la pagina actual y vecions,
  return [ 1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages ];
};