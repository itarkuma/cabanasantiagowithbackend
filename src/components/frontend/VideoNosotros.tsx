"use client";

import { Container } from "@/components/frontend/Container";

interface VideoProps {
  videoId: string;
}

export function VideoNosotros( { videoId = "os2shl1k2bwzfr0jfppx" }: Readonly<VideoProps> ) {

  if ( !videoId ) return null;

  return (
    <Container className="p-0" >
      <div className="relative w-full h-auto  max-w-4xl mx-auto overflow-hidden lg:mb-0 rounded-md  cursor-pointer  bg-cover  lg:max-w-full">

        <video controls width="600"
          poster="https://res.cloudinary.com/djivfq1jh/image/upload/v1739396938/p5hyfht9gvy0ez6mamod.jpg"
        >
          <source src="https://res.cloudinary.com/djivfq1jh/video/upload/v1739392014/os2shl1k2bwzfr0jfppx.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>



      </div>
    </Container>
  );
}
