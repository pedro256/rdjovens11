import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryMedia = [
  {
    id: 1,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761336/IMG-20250330-WA0251_pughcn.jpg",
    alt: "Grupo de jovens"
  },
  {
    id: 2,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761335/4e6a8c0d-bdd6-4328-a6a1-6d69e53dad23_ofras1.jpg",
    alt: "Vídeo institucional"
  },
  {
    id: 3,
    type: 'video',
    src: "https://res.cloudinary.com/dzf56esap/video/upload/v1746761312/0b51faa7-15d7-46af-ba8a-7e66150f8c53_hydre2.mp4",
    alt: "Estudo bíblico"
  },
  {
    id: 4,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761314/IMG_9968_nfb5rb.jpg",
    alt: "Atividade em grupo"
  },
  {
    id: 5,
    type: 'video',
    src: "https://res.cloudinary.com/dzf56esap/video/upload/v1746762166/copy_70564B7B-1913-41E4-89B3-B71F27066048_keof3i.mov",
    alt: "Vídeo de celebração"
  },
  {
    id: 6,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761288/qsomos_hybs1c.png",
    alt: "Evento jovemaaa"
  },
  {
    id: 7,
    type: 'video',
    src: "https://res.cloudinary.com/dzf56esap/video/upload/v1746761337/IMG_9324_wkbqh8.mov",
    alt: "Vídeo de celebração"
  },
  {
    id: 8,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761335/IMG-20250330-WA0232_uon5rz.jpg",
    alt: "Evento jovemaaa"
  },
  {
    id: 9,
    type: 'image',
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763408/RDJ_ICONS_kg9ulc.png",
    alt: "Evento jovemaaa"

  },
  {
    id: 10,
    type: 'image',
    alt: "Evento jovemaaa",
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763257/664da01f-8c38-49a9-b7f5-6307f22bbea2_hn0do6.jpg"
  },
  {
    id: 11,
    type: 'image',
    alt: "Evento jovemaaa",
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763585/cdf7fcad-67c5-4172-a96e-4bfe6b68cdb9_iydjzp.jpg"
  },
  {
    id: 12,
    type: 'image',
    alt: "Evento jovemaaa",
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763702/RDJ_ICONS_1_zhiave.png"
  }, {
    id: 13,
    type: 'image',
    alt: "Evento jovemaaa",
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763868/1_4_xwv1lz.png"

  }, {
    id: 14,
    type: 'image',
    alt: "Evento jovemaaa",
    src: "https://res.cloudinary.com/dzf56esap/image/upload/v1746763870/Imagem_do_WhatsApp_de_2025-05-01_%C3%A0_s_15.23.30_663c1da1_v5y719.jpg"

  },
  {
    id: 15,
    type: 'yt_iframe',
    alt: "Evento jovemaaa",
    content:  (
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/c9fbStvx2JA?si=P8j28w-XZk4BWy6T"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>

    )

  }




  //

];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<null | typeof galleryMedia[0]>(null);

  const openMedia = (media: typeof galleryMedia[0]) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-950">Nossa Galeria</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Confira momentos especiais da nossa comunidade, celebrações e atividades.
          </p>
        </motion.div>

        {/* Masonry-like layout com columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => openMedia(media)}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : undefined}
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  className="w-full rounded"
                  controls
                  onClick={(e) => e.preventDefault()} // evita abrir ao clicar nos controles
                />
              ) : undefined}
              {media.type === 'yt_iframe' && media.content }

            </motion.div>
          ))}
          <motion.div
            key="XZk4BWy6T"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1 * 0.1 }}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md"
          // onClick={() => openMedia(media)}
          >

          </motion.div>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMedia();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
            >
              <button
                className="absolute -top-10 right-0 text-white"
                onClick={closeMedia}
                aria-label="Fechar mídia"
              >
                <X className="h-8 w-8" />
              </button>

              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
              <p className="text-white text-center mt-2">{selectedMedia.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
