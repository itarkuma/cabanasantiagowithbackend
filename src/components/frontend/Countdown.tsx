"use client";
import React, { useEffect, useState } from 'react';
interface LinkProps {
  bigsize?: boolean;
}
const Countdown = ( props: Readonly<LinkProps> ) => {
  const [ countdownTime, setCountdownTime ] = useState( {
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  } );

  useEffect( () => {
    const updateCountdown = () => {
      const countdownDateTime = new Date( '22 mar 2025 10:00:00' ).getTime();
      const currentTime = new Date().getTime();
      const remainingTime = countdownDateTime - currentTime;

      if ( remainingTime > 0 ) {
        setCountdownTime( {
          countdownDays: Math.floor( remainingTime / ( 1000 * 60 * 60 * 24 ) ),
          countdownHours: Math.floor( ( remainingTime / ( 1000 * 60 * 60 ) ) % 24 ),
          countdownMinutes: Math.floor( ( remainingTime / ( 1000 * 60 ) ) % 60 ),
          countdownSeconds: Math.floor( ( remainingTime / 1000 ) % 60 ),
        } );
      } else {
        setCountdownTime( {
          countdownDays: 0,
          countdownHours: 0,
          countdownMinutes: 0,
          countdownSeconds: 0,
        } );
      }
    };

    updateCountdown(); // Inicializar inmediatamente
    const interval = setInterval( updateCountdown, 1000 );

    return () => clearInterval( interval ); // Limpiar intervalo al desmontar
  }, [] );

  return (
    <>
      <div className="flex-auto  ">
        <div className="text-1xl  text-center flex w-full items-center justify-center  sm:text-4xl">
          <div className=" text-white w-1/4">
            <div className={ ` font-extrabold leading-none text-4xl lg:text-2xl border-r-4  px-2 ${ props.bigsize ? ' text-goldenboy lg:text-8xl border-goldenboy' : 'lg:text-4xl text-verdeoficial border-verdeoficial' } ` }>{ countdownTime.countdownDays }</div>
            <div className={ `font-mono uppercase  leading-none ${ props.bigsize ? ' text-xs md:text-xl' : 'text-[9px]' } ` }>Días</div>
          </div>
          <div className=" text-white w-1/4 ">
            <div className={ ` font-extrabold leading-none text-4xl lg:text-2xl border-r-4  px-2 ${ props.bigsize ? 'text-goldenboy lg:text-8xl border-goldenboy ' : 'lg:text-4xl text-verdeoficial border-verdeoficial' } ` } >{ countdownTime.countdownHours }</div>
            <div className={ `font-mono uppercase  leading-none ${ props.bigsize ? ' text-xs md:text-xl' : 'text-[9px]' } ` }>Horas</div>
          </div>
          <div className=" text-white  w-1/4">
            <div className={ ` font-extrabold leading-none text-4xl lg:text-2xl border-r-4 px-2 ${ props.bigsize ? 'text-goldenboy lg:text-8xl border-goldenboy' : 'lg:text-4xl text-verdeoficial border-verdeoficial' } ` }>{ countdownTime.countdownMinutes }</div>
            <div className={ `font-mono uppercase  leading-none ${ props.bigsize ? ' text-xs md:text-xl' : 'text-[9px]' } ` }>Minutos</div>
          </div>
          <div className=" text-white  w-1/4">
            <div className={ ` font-extrabold leading-none text-4xl lg:text-2xl px-2  ${ props.bigsize ? 'text-goldenboy lg:text-8xl ' : 'lg:text-4xl text-verdeoficial' } ` }>{ countdownTime.countdownSeconds }</div>
            <div className={ `font-mono uppercase  leading-none ${ props.bigsize ? ' text-xs md:text-xl' : 'text-[9px]' } ` }>Segundos</div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Countdown;
