import { auth } from '@/auth.config';
import { Title } from '@/components';
import { redirect } from 'next/navigation';

export default async function MainPage() {
  const session = await auth();

  if ( !session?.user ) {
    redirect( '/' );
    //return <div>No tienes permisos para acceder a esta página</div>;
  }

  return (
    <div>
      <Title title="Dashboard" />
      <pre>{ JSON.stringify( session.user, null, 2 ) }</pre>
      <h3 className="text-3xl mb-10" >{ session.user.role }</h3>
    </div>
  );
}