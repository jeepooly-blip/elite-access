import { useEffect, useState } from 'react';
import { ChevronDown, Play, Award, Crown, Star } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1541344999736-4a98982f342f?w=1920&q=80',
      title: 'Monaco Grand Prix',
      subtitle: 'Paddock Club Access',
      description: 'Experience the pinnacle of motorsport from the most exclusive vantage point',
    },
    {
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80',
      title: 'Wimbledon',
      subtitle: 'Royal Box Experience',
      description: 'Tennis at its most prestigious, where tradition meets excellence',
    },
    {
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&q=80',
      title: 'Royal Ascot',
      subtitle: 'Private Hospitality',
      description: 'Where British elegance and equestrian tradition converge',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[6000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-luxury-black/40" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-luxury-gold/50 to-transparent animate-float" />
      <div className="absolute top-1/3 right-20 w-px h-24 bg-gradient-to-b from-transparent via-luxury-gold/30 to-transparent animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Slide Indicator */}
            <div className="flex items-center space-x-3 mb-8 animate-fade-in">
              <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase">
                {heroSlides[currentSlide].subtitle}
              </span>
              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-8 h-0.5 transition-all duration-300 ${
                      index === currentSlide ? 'bg-luxury-gold w-12' : 'bg-luxury-silver/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Main Title - Using Playfair Display (serif font) */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-slide-up text-white">
              <span className="block leading-tight">
                {heroSlides[currentSlide].title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-luxury-platinum/90 mb-10 max-w-xl animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-semibold tracking-wide rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Explore Packages</span>
                <Crown className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group px-8 py-4 border border-luxury-gold/50 text-luxury-gold font-medium tracking-wide rounded-full hover:bg-luxury-gold/10 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
              >
                <Play className="w-5 h-5" />
                <span>Watch Experience</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              {[
                { icon: Award, text: 'Official Partner' },
                { icon: Star, text: '15+ Years Excellence' },
                { icon: Crown, text: 'Exclusive Access' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-luxury-silver">
                  <badge.icon className="w-4 h-4 text-luxury-gold" />
                  <span className="text-sm tracking-wide">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-luxury-silver hover:text-luxury-gold transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-[0.3em] uppercase mb-2">Discover</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-[500] bg-luxury-black/95 flex items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(false)}>
          <button
            className="absolute top-8 right-8 text-white hover:text-luxury-gold transition-colors cursor-pointer"
            onClick={() => setIsVideoPlaying(false)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-5xl aspect-video bg-luxury-charcoal rounded-lg flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-luxury-silver">Video Experience Coming Soon</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
