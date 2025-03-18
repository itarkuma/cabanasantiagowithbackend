"use client";

import Link from 'next/link';


interface VideoProps {
  videoId: string;
}

export function VideoPortada( { videoId = "vro1rrbpvfb43uhuvchj" }: Readonly<VideoProps> ) {


  if ( !videoId ) return null;

  return (
    <div className="p-0 mx-auto xl:px-0" >
      <div className="relative h-[calc(100vh-173px)] w-full md:h-[250px] max-w-4xl mx-auto overflow-hidden lg:mb-0 rounded-md  cursor-pointer  bg-cover  lg:max-w-full  lg:h-auto">

        <div id="hero" className="h-[calc(100vh-173px)] md:h-screen" >

          <div className="texture"></div>

          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            poster="https://res.cloudinary.com/djivfq1jh/image/upload/v1740687609/cover_santiagso2_ggv6ud.jpg"
          >
            <source
              src="https://res.cloudinary.com/djivfq1jh/video/upload/v1741297605/video2_cuhtse.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src="https://res.cloudinary.com/djivfq1jh/video/upload/v1739314362/vro1rrbpvfb43uhuvchj.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>



          <div className="caption flex flex-col h-full items-center justify-center ">

            <h1 className='mb-2-2 title animated fadeInUp text-4xl md:text-9xl text-white ' >22.03.2025</h1>
            <h2 className='mt-3 md:mt-0 title animated fadeInUp text-xs md:text-3xl text-golden ' ><b>CABAÑA SANTIAGO</b> - SANTA CRUZ, BOLIVIA</h2>
            <Link href="https://calendar.app.google/RaRvdqFj44uyoaX99" target="_blank" className=" my-4 px-3 py-1 text-white font-extrabold bg-goldenf4 hover:bg-goldenf4/50 rounded-md lg:text-2xl w-fit">
              AGENDAR EVENTO
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
