import { Container } from '@/components';

export default async function DashboardLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <div className="bg-trueGray-900">

      {/* <div className="w-screen">
        <TopNavbar cabecera={ true } counter={ 'down' } />
      </div> */}

      <Container  >

        <div className="flex" >
          <div className="p-0 w-full text-slate-900">
            { children }
          </div>
        </div >

      </Container>
    </div>

  );
}