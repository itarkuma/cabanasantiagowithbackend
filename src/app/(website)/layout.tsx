
import type { Metadata } from "next";
import "./../globals.css";

import Favicon from '../../../public/logo_nosotros.ico';
import { TopNavbar } from '@/components/frontend/TopNavbar';
import { Footer } from '@/components/frontend/Footer';


export const metadata: Metadata = {
  title: "Cabaña Santiago",
  description: "2 GRAN REMATE SELECCION ELITE SANTIAGO Y AMIGOS",
  icons: [ { rel: 'icon', url: Favicon.src } ],
};


export default function WebSiteLayout( {
  children
}: { children: React.ReactNode; } ) {


  return (
    <html lang="es" suppressHydrationWarning  >
      <body
        className="bg-pattern bg-cover bg-center bg-repeat"
      >

        <TopNavbar cabecera={ true } counter={ 'down' } />
        <div className="z-0" >{ children }</div>
        <Footer />

      </body>
    </html>

  );
}