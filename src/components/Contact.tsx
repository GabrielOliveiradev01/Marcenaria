import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(11) 99999-9999",
      link: "tel:11999999999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "contato@bassart.com.br",
      link: "mailto:contato@bassart.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Rua das Marcenarias, 123 - São Paulo/SP",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-white">Entre em</span>{' '}
            <span className="text-yellow-500">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pronto para transformar seus ambientes? Entre em contato conosco e vamos criar algo incrível juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300 group"
                  >
                    <div className="text-yellow-500 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <MessageCircle className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4 text-sm">
                Fale conosco agora mesmo pelo WhatsApp para um atendimento rápido e personalizado
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tipo de Projeto
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="cozinha">Cozinha Planejada</option>
                      <option value="banheiro">Banheiro</option>
                      <option value="closet">Closet</option>
                      <option value="sala">Sala de Estar</option>
                      <option value="escritorio">Escritório</option>
                      <option value="area-externa">Área Externa</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none"
                    placeholder="Conte-nos sobre seu projeto: dimensões do ambiente, estilo desejado, orçamento aproximado..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-12 bg-gray-800/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Visite nosso Showroom</h3>
          <p className="text-gray-400 mb-6">
            Conheça de perto a qualidade dos nossos materiais e acabamentos. 
            Agende uma visita e inspire-se com nossas exposições.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
            Agendar Visita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;