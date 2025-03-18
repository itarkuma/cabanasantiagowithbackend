"use client";

import { useForm } from 'react-hook-form';
import { createUpdateLote } from '@/actions';
import { useRouter } from 'next/navigation';
import { LoteImage } from '@/components';
import { Lotes } from '@/interfaces';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface Props {
  lote: Partial<Lotes>;
  //lote: nLotes;
}

interface FormInputs {
  title: string;
  slug: string;
  order: number;
  portada?: FileList;
  videoId: string;
  state: true | false;
}

export const LoteForm = ( { lote }: Props ) => {

  const router = useRouter();

  const [ errorMessage, setErrorMessage ] = useState( '' );
  const [ successMessage, setSuccessMessage ] = useState( '' );
  useEffect( () => {
    if ( successMessage ) {
      const timer = setTimeout( () => {
        setSuccessMessage( "" );
      }, 5000 ); // 5 segundos

      return () => clearTimeout( timer ); // Limpia el timer si cambia antes de los 5s
    }
  }, [ successMessage ] );

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormInputs>( {
    defaultValues: {
      ...lote,
      portada: undefined,
      videoId: lote.videoId ?? '',
    }
  } );

  const onSubmit = async ( data: FormInputs ) => {
    setErrorMessage( '' );
    setSuccessMessage( '' );
    const formData = new FormData();

    const { portada, ...loteToSave } = data;


    if ( lote.id ) {
      formData.append( 'id', lote.id ?? '' );
    }

    formData.append( 'title', loteToSave.title );
    formData.append( 'slug', loteToSave.slug );
    formData.append( 'order', String( loteToSave.order ) );
    //    formData.append( 'portada', loteToSave.portada );
    formData.append( 'videoId', loteToSave.videoId );
    if ( String( loteToSave.state ) === "true" ) {
      formData.append( "state", String( "true" ) );
    } else {
      formData.append( "state", String( "false" ) );
    }


    if ( portada ) {
      for ( let i = 0; i < portada.length; i++ ) {
        formData.append( 'portada', portada[ i ] );

      }
    }

    const { ok, message, lote: updateLote } = await createUpdateLote( formData );

    if ( !ok ) {
      setErrorMessage( !message ? 'Error al guardar' : message );
      return;
    }
    setSuccessMessage( 'Guardado exitosamente' );
    router.replace( `/dashboard/lote/${ updateLote?.slug }` );

  };

  return (
    <form onSubmit={ handleSubmit( onSubmit ) } className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      {/* Textos */ }
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className={
            clsx( "p-2 border rounded-md bg-gray-200", {
              'border-red-500': errors.title
            } )
          }
            { ...register( 'title', { required: true } ) } />
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input type="text" className={
            clsx( "p-2 border rounded-md bg-gray-200", {
              'border-red-500': errors.slug
            } )
          }
            { ...register( 'slug', { required: true } ) } />
        </div>

        <div className="flex flex-col mb-2">
          <span>Posicion</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"
            { ...register( 'order' ) } />
        </div>

        <div className="flex flex-col mb-2">
          <span>ID Video</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"
            { ...register( 'videoId' ) } />
        </div>



        <div className="flex flex-col mb-2">
          <span>Estado</span>
          <select className="p-2 border rounded-md bg-gray-200 "
            { ...register( 'state', { required: true } ) } >
            <option value="true">Habilitar</option>
            <option value="false">Desabilitar</option>
          </select>
        </div>

        <span className="text-red-500" >{ errorMessage }</span>
        <span className="text-green-500" >{ successMessage }</span>

        <button className="btn-primary w-full">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */ }
      <div className="w-full">
        {/* As checkboxes */ }
        <div className="flex flex-col">

          <div className="flex flex-col mb-2">

            <span>Fotos</span>
            <input
              type="file"
              { ...register( 'portada' ) }
              // multiple
              className="p-2 border rounded-md bg-gray-200"
              accept="image/png, image/jpeg, image/svg+xml, image/eps"
            />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" >
            <div>
              {

                <LoteImage
                  alt={ lote.title ?? '' }
                  src={ lote.portada! }
                  width={ 300 }
                  height={ 300 }
                  className="rounded shadow-md"
                />

              }


            </div>
          </div>

        </div>
      </div>
    </form>
  );
};;