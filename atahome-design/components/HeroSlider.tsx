'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    type: 'image', // 'image' of 'video'
    src: '/images/slide1.jpg',
    title: 'Bezoek de grootste showrooms van de Benelux',
    text: 'Loop vrijblijvend binnen en ontdek het ruime badkamer- en tegelassortiment of maak een afspraak voor persoonlijk advies.',
    buttonText: 'Maak een afspraak',
    buttonLink: '/afspraak',
  },
  {
    type: 'image',
    src: '/images/slide2.jpg',
    title: 'Inspiratie voor elke ruimte',
    text: 'Ontdek onze stijlvolle en functionele oplossingen voor jouw badkamer.',
    buttonText: 'Bekijk Inspiratie',
    buttonLink: '/inspiratie',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide wisselt elke 5 seconden

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative rounded-[20px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              className="w-full h-[500px] object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 text-white space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm md:text-lg">{slide.text}</p>
            <a
              href={slide.buttonLink}
              className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
