import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const eventData = [
  {
    id: 1,
    title: "Rede de Jovens IDE",
    description: "Um culto dinâmico e profundo que fortalece os fundamentos da fé através de louvor e mensagens bíblicas relevantes.",
    imageUrl: "IMG_02.png",
    schedule: "Todos os sábados",
    time: "18:00",
    location: "R Dinahi, 3 - Tancredo Neves"
  },
  {
    id: 2,
    title: "Culto de Família",
    description: "Um encontro cheio de atividades divertidas e desafios que promovem a comunhão e o aprendizado bíblico de forma lúdica.",
    imageUrl: "IMG_01.png",
    schedule: "Último domingo do mês",
    time: "16:00",
    location: "Quadra esportiva"
  },
  {
    id: 3,
    title: "Encontro de Adoração e Intercessão",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://images.pexels.com/photos/256472/pexels-photo-256472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Quintas-feiras",
    time: "20:00",
    location: "Sala de oração"
  },
  {
    id: 4,
    title: "Célula de Meninas",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://images.pexels.com/photos/256472/pexels-photo-256472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Quintas-feiras",
    time: "20:00",
    location: "Sala de oração"
  },
  {
    id: 5,
    title: "Célula de Meninos",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://images.pexels.com/photos/256472/pexels-photo-256472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Quintas-feiras",
    time: "20:00",
    location: "Sala de oração"
  },
  {
    id: 6,
    title: "Eventos de Área",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://images.pexels.com/photos/256472/pexels-photo-256472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    schedule: "Quintas-feiras",
    time: "20:00",
    location: "Sala de oração"
  }
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-950">
            Nossos Eventos
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Conheça nossos encontros e cultos especiais, criados para fortalecer sua fé e promover momentos
            de comunhão, aprendizado e crescimento espiritual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-900">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <CalendarDays className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{event.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;