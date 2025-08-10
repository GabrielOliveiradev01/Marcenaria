import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Cozinha Moderna Premium",
      category: "Cozinha",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Closet Minimalista",
      category: "Closet",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Banheiro Luxuoso",
      category: "Banheiro",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Sala de Estar Contemporânea",
      category: "Sala",
      image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Escritório Planejado",
      category: "Escritório",
      image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Área Gourmet Externa",
      category: "Área Externa",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(portfolioItems[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(portfolioItems[prevIndex].image);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-white">Nosso</span>{' '}
            <span className="text-yellow-500">Portfólio</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada projeto é uma obra de arte única, criada com paixão e precisão para transformar seus ambientes
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item.image, index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage}
                alt="Portfolio Item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-yellow-500 transition-colors"
              >
                <span className="text-2xl">✕</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;