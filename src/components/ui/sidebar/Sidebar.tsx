import Image from 'next/image';
import { IoBrowsersOutline, IoLogoReact, IoPawOutline } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';
import { LogoutButton } from './LogoutButton';
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';
import { logout } from '@/actions';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={ 40 } />,
    title: 'Dashboard',
    subtitle: 'Visualizacion'
  },
  {
    path: '/dashboard/lotes',
    icon: <IoPawOutline size={ 40 } />,
    title: 'Lotes',
    subtitle: 'Administrador Lotes'
  },
  // {
  //   path: '/dashboard/cabanas',
  //   icon: <IoHomeOutline size={ 40 } />,
  //   title: 'Cabañas',
  //   subtitle: 'Administrador Cabañas'
  // },

];



export const Sidebar = async () => {

  const session = await auth();

  if ( !session?.user ) {
    redirect( '/auth/login' );
  }

  return (
    <div id="menu"
      style={ { width: '400px' } }
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">

      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-3 w-8 h-8 text-white" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={ 64 }
              height={ 64 }
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Frank Callapa
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <span className="flex text-gray-400 font-bold my-5">CATALOGOS</span>
        {
          menuItems.map( ( item ) => {
            return (
              <SidebarMenuItem
                key={ item.path }
                path={ item.path }
                icon={ item.icon }
                title={ item.title }
                subtitle={ item.subtitle }
              />
            );
          } )
        }
        {/* <span className="flex text-gray-400 font-bold my-5">GANADERIA360</span> */ }
        {
          // menuWeb.map( ( item ) => {
          //   return (
          //     <SidebarMenuItem
          //       key={ item.path }
          //       path={ item.path }
          //       icon={ item.icon }
          //       title={ item.title }
          //       subtitle={ item.subtitle }
          //     />
          //   );
          // } )
        }
        <span className="flex text-gray-400 font-bold my-5">ADMIN</span>
        <LogoutButton logout={ logout } />
      </div>
    </div>

  );
};