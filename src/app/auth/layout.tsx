import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';


export default async function AuthLayout( { children }: {
  children: React.ReactNode;
} ) {

  const session = await auth();

  if ( session?.user ) {
    redirect( '/dashboard' );
  }

  return (

    <main className="flex justify-center items-center min-h-screen  antialiased">
      <div className="container  my-auto max-w-md">
        { children }
      </div>
    </main>

  );
}