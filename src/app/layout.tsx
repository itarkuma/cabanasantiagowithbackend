import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from '@/components';

const geistSans = localFont( {
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
} );
const geistMono = localFont( {
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
} );

export const metadata: Metadata = {
  title: "Cabaña Santiago - Sitio Web",
  description: "Una tienda virtual de lotes de remates para la industria ganadera",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="es">
      <body
        className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
      >
        <Provider>
          { children }
        </Provider>
      </body>
    </html>
  );
}
