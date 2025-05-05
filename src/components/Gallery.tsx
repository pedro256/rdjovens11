import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1486648/pexels-photo-1486648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Grupo de jovens"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Momento de adoração"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Estudo bíblico"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Atividade em grupo"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Momento de oração"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2853736/pexels-photo-2853736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Evento jovem"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-950">
            Nossa Galeria
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Confira momentos especiais da nossa comunidade, celebrações e atividades
            que marcam nossa jornada de fé e comunhão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openImage(image.src, image.alt)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl max-h-[90vh]"
          >
            <button 
              className="absolute -top-10 right-0 text-white"
              onClick={closeImage}
              aria-label="Fechar imagem"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-2">{selectedImage.alt}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;