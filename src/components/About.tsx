import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Star, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-purple-500" />,
      title: 'Comunhão',
      description: 'Cultivamos relacionamentos genuínos baseados no amor de Cristo.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Discipulado',
      description: 'Crescemos juntos no conhecimento da Palavra e na maturidade espiritual.'
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: 'Adoração',
      description: 'Expressamos nosso amor a Deus através da música e das artes.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      title: 'Eventos',
      description: 'Promovemos encontros edificantes e recreativos para jovens.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-950">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              A <span className="text-purple-400 font-bold">Rede de Jovens Geração 11</span> é um ministério dedicado a capacitar e inspirar jovens a viverem uma fé autêntica e transformador fazendo o <span className="text-purple-400 font-bold">IDE</span> por onde quer que estivermos.
              Estamos comprometidos em criar um ambiente acolhedor onde os jovens possam crescer espiritualmente,
              desenvolver seus dons e talentos, e impactar o mundo ao seu redor.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.imgur.com/GPLsrCm.png"
              alt="Jovens em comunidade"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">Nossa Missão</h3>
            <p className="text-gray-700 mb-8">
              Formamos uma comunidade vibrante e acolhedora que incentiva jovens a
              descobrir seu potencial em Cristo. Através de cultos dinâmicos, estudos bíblicos,
              projetos sociais e momentos de lazer, buscamos fortalecer a fé e formar
              líderes que impactem positivamente a sociedade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-indigo-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;