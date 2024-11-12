'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    type: 'image',
    src: '/images/slide1.webp',
    title: 'Bezoek de grootste showrooms van de Benelux',
    text: 'Ontdek het badkamer- en tegelassortiment.',
    buttonText: 'Maak een afspraak',
    buttonLink: '/afspraak',
  },
  {
    type: 'image',
    src: '/images/slide2.webp',
    title: 'Inspiratie voor elke ruimte',
    text: 'Stijlvolle oplossingen voor je badkamer.',
    buttonText: 'Bekijk Inspiratie',
    buttonLink: '/inspiratie',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
        >
          {slide.type === 'image' ? (
            <img src={slide.src} alt={slide.title} className="w-full h-auto" />
          ) : (
            <video src={slide.src} autoPlay muted loop className="w-full h-auto" />
          )}
          <div>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <a href={slide.buttonLink}>{slide.buttonText}</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
