'use client';
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface Props {
  videoId: string;
}

export const VideoYoutube = ( { videoId }: Props ) => {
  return (
    <LiteYouTubeEmbed
      key={ videoId }
      aspectHeight={ 9 }
      aspectWidth={ 16 }
      id={ videoId }
      title="lote"
    />
  );
};