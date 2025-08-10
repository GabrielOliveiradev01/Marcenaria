import React from 'react';
import { Award, Users, Wrench, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência",
      description: "Comprometidos com a mais alta qualidade em cada projeto"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece uma solução exclusiva"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Precisão Técnica",
      description: "Medidas exatas e acabamento impecável em cada detalhe"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pelo Design",
      description: "Transformamos espaços com amor e dedicação"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display']">
                <span className="text-white">Quem</span>{' '}
                <span className="text-yellow-500">Somos</span>
              </h2>
              <div className="w-20 h-1 bg-yellow-500"></div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A <strong className="text-yellow-500">BASSART</strong> nasceu da paixão por transformar espaços 
                em ambientes únicos e funcionais. Com mais de 15 anos de experiência no mercado de 
                móveis planejados, somos especialistas em criar soluções personalizadas que combinam 
                design sofisticado com a mais alta qualidade.
              </p>
              
              <p>
                Nossa expertise abrange desde cozinhas modernas e elegantes até closets organizados 
                e banheiros luxuosos. Cada projeto é desenvolvido com atenção aos mínimos detalhes, 
                utilizando materiais premium e tecnologia de ponta para garantir durabilidade e beleza.
              </p>

              <p>
                Na BASSART, acreditamos que cada ambiente deve refletir a personalidade de quem o habita. 
                Por isso, trabalhamos lado a lado com nossos clientes, desde a concepção até a instalação, 
                garantindo que cada móvel seja uma extensão dos seus sonhos.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Workspace"
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-yellow-500/20 rounded-2xl z-0"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
            >
              <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;