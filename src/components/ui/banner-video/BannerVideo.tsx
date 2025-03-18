
export const BannerVideo = () => {
  return (
    <main className="mt-0 mb-10 z-40 relative bg-green-500/20">
      <div>
        <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center   ">

          <div className="mx-auto px-0 py-0 text-center relative w-full ">
            <div id="hero" className="-z-10">
              <video
                loop
                muted
                autoPlay
                preload="auto"
                poster="/img/cover.png"
              >
                <source src="/img/video_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="caption">

                <h1 className='mb-2-2 title animated fadeInUp' >Publicidad 360º</h1>
                <h2 className='mb-2-2 title animated fadeInUp' >PARA REMATES DE ÉLITE</h2>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};