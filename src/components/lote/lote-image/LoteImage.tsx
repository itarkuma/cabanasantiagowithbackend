import Image from 'next/image';

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>[ 'className' ];
  style?: React.StyleHTMLAttributes<HTMLImageElement>[ 'style' ];
  width: number;
  height: number;
  sizes?: string;
}

export const LoteImage = ( {
  src, alt, className, style, width, height, sizes
}: Props ) => {

  const localSrc = ( src )
    ? src.startsWith( 'http' )
      ? src
      : `/img/portadas/${ src }`
    : '/img/placeholder.png';

  return (
    <Image src={ localSrc }
      width={ width }
      height={ height }
      className={ className }
      alt={ alt }
      style={ style }
      priority={ false }
      sizes={ sizes }
      quality={ 100 }
    />
  );
};