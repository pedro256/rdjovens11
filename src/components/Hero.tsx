import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-indigo-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg_t.png" 
          alt="Jovens G11" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conectando jovens através da
            <span className="text-purple-400"> fé</span> e 
            <span className="text-purple-400"> propósito</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Rede de jovem centrado em Cristo, construindo uma geração transformada pelo amor de Deus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#about" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors duration-300"
            >
              Conheça nossa rede
            </a>
            <a 
              href="#events" 
              className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-400/20 rounded-full font-medium transition-colors duration-300"
            >
              Nossos eventos
            </a>
          </div>
        </motion.div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;