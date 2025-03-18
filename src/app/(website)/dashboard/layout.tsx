import { ReactNode } from "react";
import { auth } from '@/auth.config';
import { Sidebar } from '@/components';
import { redirect } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout( {
  children
}: LayoutProps ) {

  const session = await auth();

  if ( !session?.user ) {
    redirect( '/auth/login' );
  }

  // if ( session?.user.role !== 'admin' ) {
  //   redirect( '/auth/login' );
  // }

  return (


    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white" >

      <div className="flex">

        <Sidebar />

        <div className="p-2 w-full text-slate-900" >
          { children }
        </div>

      </div>
    </div >
  );
}