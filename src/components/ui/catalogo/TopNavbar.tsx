import Link from 'next/link';

interface TopNavBarProps {
  cabecera?: boolean;
  counter?: "up" | "down";
}

export const TopNavbar = ( props: Readonly<TopNavBarProps> ) => {
  return (
    <>
      {
        ( props.counter === "down" )
          ? (
            <div className=" bg-gradient-to-t from-goldenf1 via-goldenf2 to-goldenf3  flex flex-col items-center justify-center  p-5 lg:flex-row ">
              {
                props.cabecera && (
                  <div className="flex-initial w-full sm:w-1/3 ">
                    <Link href="/" className=" flex pb-0 items-center justify-center">
                      <span className="flex text-center items-center justify-center space-x-2 text-1xl font-medium text-white lg:text-2xl ">
                        <span>XXIX GRAN REMATE INTERNACIONAL NELORE DE ORO 2024</span>
                      </span>
                    </Link>
                  </div>

                )
              }
              <div className="flex-auto w-full items-center justify-center lg:w-1/3">
                <h1 className="max-w-md flex flex-col  p-4 text-xs text-center items-center justify-center font-normal sm:text-2xl sm:pb-0 text-white lg:max-w-full ">
                  <span>HOTEL LOS TAJIBOS | SANTA CRUZ, BOLIVIA</span>
                  <span> SEPTIEMBRE 20, 2024</span>
                </h1>
              </div>


              {/* <CounterDown /> */ }

            </div>

          )
          : (
            <div className="bg-gradient-to-t from-goldenf1 via-goldenf2 to-goldenf3 flex flex-col items-center justify-center  p-5 ">
              {/* <CounterDown bigsize={true} /> */ }
              <div className="flex-auto w-full items-center justify-center lg:flex-none  lg:w-2/3 px-8 lg:px-0">
                <h1 className="max-w-md grid lg:hidden items-center text-center   p-4 text-xs  justify-center font-nornal sm:text-2xl sm:pb-0 text-white   ">
                  <span className=" lg:flex items-start" > HOTEL LOS TAJIBOS  </span>
                  <span className=" lg:flex items-center" >SANTA CRUZ, BOLIVIA</span>
                  <span className=" lg:flex items-end" > SEPTIEMBRE 20, 2024 </span>
                </h1>
                <h1 className="hidden max-w-md  items-center text-center lg:flex  p-4 text-xs lg:items-center justify-center font-nornal sm:text-2xl sm:pb-0 text-white lg:max-w-full  ">
                  <span className=" lg:flex items-start" > HOTEL LOS TAJIBOS,   SANTA CRUZ - BOLIVIA SEPTIEMBRE 20, 2024 </span>
                </h1>
              </div>
              <div className="flex items-center  space-x-4 lg:my-3 nav__item">
                <Link href="https://calendar.app.google/uK4FgmPmTxQn8Qm16" target="_blank" className="px-6 py-2 text-white bg-red-900 hover:bg-red-700 rounded-md md:ml-5 lg:text-3xl font-bold">
                  AGENDAR EVENTO
                </Link>
              </div>

            </div>
          )
      }
    </>
  );
};
