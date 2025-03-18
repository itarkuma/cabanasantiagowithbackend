

import logosantiago from "../../../public/img/santiago/logo_santiago_dorado.png";
import imgsantiago from "../../../public/img/santiago/santiago.jpg";
import imgsantiago1 from "../../../public/img/santiago/photo1.png";
import imgsantiago2 from "../../../public/img/santiago/photo2.png";
import imgsantiago3 from "../../../public/img/santiago/photo4.png";

import logonosotros from "../../../public/img/nosotros/logo_rematefa.png";
import imgnosotros from "../../../public/img/nosotros/nosotros0.png";
import imgnosotros1 from "../../../public/img/nosotros/about1.jpg";
import imgnosotros2 from "../../../public/img/nosotros/about2.jpg";
import imgnosotros3 from "../../../public/img/nosotros/about3.jpg";
import imgnosotros4 from "../../../public/img/nosotros/galeria4.jpeg";
import imgnosotros5 from "../../../public/img/nosotros/galeria5.jpeg";
import imgnosotros6 from "../../../public/img/nosotros/galeria7.jpeg";

import imgauspician from "../../../public/img/auspician/ganadero.png";
import imgauspician2 from "../../../public/img/auspician/au2.png";
import imgauspician3 from "../../../public/img/auspician/fridosa.png";
import imgauspician4 from "../../../public/img/auspician/genevitro.png";


import imgpatrocinan2 from "../../../public/img/patrocinador/AUSPICIADORES_2.png";

// import imginvitado from "../../../public/img/invitados/jenecheru_dorado.png";

// import imgapoyan1 from "../../../public/img/apoyan/fercogan_apoyan.png";
// import imgapoyan2 from "../../../public/img/apoyan/apoyan_ferreira.png";
// import imgapoyan3 from "../../../public/img/apoyan/apoyan_360.png";




const benefitThree = {
  title: "Cabaña Santiago",
  desc: "Se dedica a la cría y mejoramiento genético de ganado de élite de razas cebuinas. Comenzó en Beni y con el tiempo se expandió a Santa Cruz. Desde 2021, ha estado participando en exposiciones, logrando convertirse en el mejor expositor en las últimas seis ferias y el mejor criador en las últimas tres. Por ello, Cabaña Santiago ahora apunta a compartir su genética al mercado internacional.",
  image: imgsantiago,
  bullets: [
    {
      icon: imgsantiago1,
    },
    {
      icon: imgsantiago2,
    },
    {
      icon: imgsantiago3,
    },
  ],
  logo: logosantiago
};

const nosotros = {
  title: "Un evento que marcó la diferencia",
  desc: "La 1ª Edición del Remate Selección Élite Santiago fue un rotundo éxito, reuniendo a las mejores cabañas y ejemplares del país. Con gran concurrencia, transacciones destacadas y un ambiente exclusivo, se posicionó como un referente en el sector ganadero.",
  image: imgnosotros,
  bullets: [
    {
      icon: imgnosotros1,
    },
    {
      icon: imgnosotros2,
    },
    {
      icon: imgnosotros3,
    },
    {
      icon: imgnosotros4,
    },
    {
      icon: imgnosotros5,
    },
    {
      icon: imgnosotros6,
    },
  ],
  logo: logonosotros
};

// const apoyan = {
//   title: "APOYAN:",
//   images: [
//     {
//       logo: imgapoyan1,
//     },
//     {
//       logo: imgapoyan2,
//     },
//     {
//       logo: imgapoyan3,
//     },
//   ],
//   size: "w-32",
// };

// const invitados = {
//   title: "CABAÑAS INVITADAS",
//   images: [
//     {
//       logo: imginvitado,
//     },
//   ],
// };

const patrocinan = {
  title: "PATROCINAN:",
  images: [
    {
      logo: imgpatrocinan2
    }
  ],
  size: "w-96",
};

const auspiciadores = {
  title: "AUSPICIAN:",
  images: [
    {
      logo: imgauspician,
    },
    {
      logo: imgauspician2,
    },
    {
      logo: imgauspician3,
    },
    {
      logo: imgauspician4,
    },

  ],
  size: "w-52",
};


//export {  apoyan, invitados, auspiciadores, , nosotros };
export { benefitThree, nosotros, patrocinan, auspiciadores };
