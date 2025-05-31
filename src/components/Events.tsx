import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const eventData = [
  {
    id: 1,
    title: "Rede de Jovens IDE",
    description: "Um culto dinâmico e profundo que fortalece os fundamentos da fé através de louvor e mensagens bíblicas relevantes.",
    imageUrl: "https://res.cloudinary.com/dzf56esap/image/upload/v1748721066/IMG_4420_rqfrhn.jpg",
    schedule: "Todos os Sábados",
    time: "18:00",
    location: "R Dinahi, 3 - Tancredo Neves"
  },
  {
    id: 2,
    title: "Culto de Família",
    description: `Um momento especial de comunhão, louvor e edificação para toda a família!, buscamos fortalecer os laços familiares à luz da Palavra de Deus, com ministrações inspiradas, 
    cânticos de adoração e oração.`,
    imageUrl: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761288/RDJ_ICONS_cccaz6.png",
    schedule: "Todos os Domingos",
    time: "18:00",
    location: "R Dinahi, 3 - Tancredo Neves"
  },
  // {
  //   id: 3,
  //   title: "Encontro de Adoração e Intercessão",
  //   description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
  //   imageUrl: "IMG_01.png",
  //   schedule: "Quintas-feiras",
  //   time: "20:00",
  //   location: "Sala de oração"
  // },
  {
    id: 4,
    title: "Célula de Meninas",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761778/celula_meninas_lmpkag.jpg",
    schedule: "Sábados",
    time: "16:30",
    location: "Rua Jasmin, 23, Tancredo Neves"
  },
  {
    id: 5,
    title: "Célula de Meninos",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761779/celula_meninos_djyhbb.jpg",
    schedule: "Sexta-feiras",
    time: "18:00",
    location: "Não definida (visitamos casas)"
  },
  {
    id: 6,
    title: "Eventos de Área",
    description: "Momentos dedicados à adoração profunda e oração, buscando intimidade com Deus e fortalecimento espiritual.",
    imageUrl: "https://res.cloudinary.com/dzf56esap/image/upload/v1746761780/eventos_area_h3awzb.jpg",
    schedule: "Sábados",
    time: "18:00",
    location: "Sede área 143"
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