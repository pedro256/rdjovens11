import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  // Exemplo de coordenadas - substitua pelas coordenadas reais da igreja
  const position = [-3.0546202, -59.9462473];
  //

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-950">
            Nossa Localização
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Venha nos visitar e participar dos nossos encontros. Estamos esperando por você!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              /> */}
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={position}>
                <Popup>
                  Rede de Jovens <br /> Igreja Renovada
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-900">Informações</h3>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-1">Endereço</h4>
                  <p className="text-gray-700">
                    R Dinahi, 3 <br />
                    Tancredo Neves, Manaus - AM <br />
                    69087-130
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-1">Contato</h4>
                  <p className="text-gray-700">
                    {/* Telefone: (11) 9999-9999 <br /> */}
                    Email: rdjovens143@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-1">Horários</h4>
                  <p className="text-gray-700">
                    <strong>Culto Jovem:</strong> Sábados às 18:00 <br />
                    <strong>Estudo Bíblico:</strong> Terça às 19:00 <br />
                    <strong>Culto de Família:</strong> Domingos às 18:00
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              Estamos localizados em uma região de fácil acesso, em frente à Escola Municipal Presidente Tancredo Neves.
            </p>

            <a
              href="https://maps.app.goo.gl/Qes8g9xFU98ug4ar5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Ver no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;