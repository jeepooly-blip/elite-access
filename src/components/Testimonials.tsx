import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'James Harrison',
      role: 'CEO, Harrison Capital',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      quote: 'VELOCE transformed our Monaco Grand Prix experience into something truly extraordinary. The Paddock Club access and private yacht arrangement exceeded all expectations.',
      event: 'Monaco Grand Prix 2025',
      rating: 5,
    },
    {
      id: 2,
      name: 'Victoria Chen',
      role: 'Managing Director, Global Ventures',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      quote: 'From Wimbledon hospitality to our Super Bowl suite, every event has been flawlessly orchestrated. Their attention to detail and personal touch is unmatched.',
      event: 'Multiple Events 2024-2025',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Rothschild',
      role: 'Founder, Rothschild Entertainment',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      quote: 'The level of exclusivity and service VELOCE provides is exceptional. We have hosted clients at Royal Ascot and F1 events – all unforgettable experiences.',
      event: 'Royal Ascot & F1 2025',
      rating: 5,
    },
    {
      id: 4,
      name: 'Sarah Mitchell',
      role: 'Partner, Mitchell & Associates',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      quote: 'Working with VELOCE for our corporate entertainment has elevated our client relationships significantly. Their VIP access and hospitality are truly world-class.',
      event: 'Annual Corporate Events',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-luxury-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-luxury-gold/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-luxury-gold">Clients</span> Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-luxury-dark/80 backdrop-blur-xl border border-luxury-gray/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8">
                <Quote className="w-16 h-16 text-luxury-gold/10" />
              </div>

              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold/30 mr-4"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-luxury-silver text-sm">{testimonials[currentIndex].role}</p>
                    <p className="text-luxury-gold text-xs mt-1 tracking-wide">
                      {testimonials[currentIndex].event}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-luxury-gold/20 rounded-tl-3xl" />
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-luxury-gray/30 flex items-center justify-center text-luxury-silver hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-luxury-gold' : 'bg-luxury-gray/50 hover:bg-luxury-silver/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-luxury-gray/30 flex items-center justify-center text-luxury-silver hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className={`mt-20 pt-16 border-t border-luxury-gray/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-center text-luxury-silver text-sm tracking-wider mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {['Harrison Capital', 'Global Ventures', 'Rothschild', 'Mitchell & Co', 'Sterling Group'].map((brand) => (
              <span key={brand} className="text-white text-lg font-light tracking-widest">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
