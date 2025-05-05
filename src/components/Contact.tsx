import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui iria a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-indigo-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Tem alguma dúvida ou quer participar da nossa comunidade? Envie-nos uma mensagem
            ou conecte-se através das nossas redes sociais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-indigo-900 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Conecte-se</h3>
              
              <div className="space-y-6 mb-10">
                <a 
                  href="https://www.instagram.com/rdjovensg11/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  <Instagram className="h-8 w-8 mr-4" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-gray-200">@rdjovensg11</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/559291552832" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <Phone className="h-8 w-8 mr-4" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-gray-200">+55 (92) 9155-2832</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:rdjovens143@gmail.com" 
                  className="flex items-center p-4 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  <Mail className="h-8 w-8 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-200">rdjovens143@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-indigo-900 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Junte-se a nós!</h4>
              <p className="text-gray-300 mb-4">
                Participe dos nossos encontros semanais e faça parte desta comunidade de fé.
                Temos grupos de WhatsApp para manter você atualizado sobre eventos e atividades.
              </p>
              <a 
                href="#events" 
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
              >
                Ver nossos horários 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;