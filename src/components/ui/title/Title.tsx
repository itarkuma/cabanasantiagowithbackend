import { titleFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ( { title, subtitle, className }: Props ) => {
  return (
    <div className={ `mt-3 ${ className }` } >
      <h1 className={ `${ titleFont.className } antialiased text-4xl my-2 text-gray-700 border-l-4 border-goldenf1 pl-4` } >{ title }</h1>
      { subtitle && <h3 className="text-xl text-slate-500 mb-2">{ subtitle }</h3> }
    </div>
  );
};