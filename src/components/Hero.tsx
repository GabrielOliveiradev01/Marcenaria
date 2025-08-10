import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern Kitchen Design"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
              Móveis Planejados de Luxo
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] leading-tight">
            <span className="text-white">Elegância que se</span>
            <br />
            <span className="text-yellow-500">encaixa no seu espaço</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformamos suas ideias em móveis únicos, combinando design sofisticado 
            com funcionalidade excepcional para cada ambiente da sua casa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Ver Portfólio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Fale Conosco</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">15+</div>
              <div className="text-gray-400 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">500+</div>
              <div className="text-gray-400 text-sm">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">100%</div>
              <div className="text-gray-400 text-sm">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;