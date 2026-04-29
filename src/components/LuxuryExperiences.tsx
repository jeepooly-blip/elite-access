import { useState, useEffect, useRef } from 'react';
import { Globe, MapPin, Plane, Hotel, Anchor, Wine, ChevronRight, ArrowRight } from 'lucide-react';

const LuxuryExperiences = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
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

  const experiences = [
    {
      id: 1,
      title: 'Yacht Experiences',
      subtitle: 'Mediterranean Luxury',
      description: 'Arrive in style aboard our fleet of premium yachts. Enjoy the Monaco Grand Prix from the sparkling Mediterranean waters with full hospitality service.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      features: ['Private deck viewing', 'Gourmet catering', 'Champagne service', 'On-water transfer'],
      icon: Anchor,
    },
    {
      id: 2,
      title: 'Private Aviation',
      subtitle: 'Seamless Travel',
      description: 'Fly privately to any destination. Our fleet of luxury aircraft ensures you arrive refreshed and ready for the experience ahead.',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80',
      features: ['Charter flights', 'Helicopter transfers', 'Airport VIP service', 'Custom itineraries'],
      icon: Plane,
    },
    {
      id: 3,
      title: 'Luxury Accommodation',
      subtitle: 'Five-Star Stays',
      description: 'Hand-selected five-star hotels and private villas offering the finest amenities, concierge services, and prime locations.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      features: ['Premium suites', 'Butler service', 'Spa access', 'Prime locations'],
      icon: Hotel,
    },
    {
      id: 4,
      title: 'Gastronomic Journeys',
      subtitle: 'Culinary Excellence',
      description: 'Exclusive dining experiences at Michelin-starred restaurants, private chef services, and curated wine tastings.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      features: ['Michelin dining', 'Private chef', 'Wine cellar access', 'Cooking classes'],
      icon: Wine,
    },
  ];

  const destinations = [
    { name: 'Monaco', event: 'F1 Grand Prix', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&q=80' },
    { name: 'Wimbledon', event: 'Tennis Championships', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&q=80' },
    { name: 'Royal Ascot', event: 'Horse Racing', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80' },
    { name: 'Las Vegas', event: 'F1 & NFL', image: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&q=80' },
    { name: 'Dubai', event: 'World Cup & More', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
    { name: 'Los Angeles', event: 'Super Bowl', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&q=80' },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-luxury-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
            Beyond Events
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Luxury <span className="text-luxury-gold">Experiences</span>
          </h2>
          <p className="text-luxury-platinum/80 max-w-2xl mx-auto text-lg">
            Complete your event experience with our curated collection of luxury travel services, from private aviation to exclusive accommodations.
          </p>
        </div>

        {/* Experience Cards - Top Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {experiences.slice(0, 2).map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 cursor-pointer h-[400px] lg:h-[450px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
              onMouseEnter={() => setActiveExperience(exp.id - 1)}
            >
              <div className="absolute inset-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-xl bg-luxury-gold/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <exp.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <span className="text-luxury-gold text-sm tracking-wider uppercase mb-2">{exp.subtitle}</span>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-luxury-platinum/80 mb-5 line-clamp-2 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-luxury-gold font-medium group/btn">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Experience Cards - Bottom Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {experiences.slice(2, 4).map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 cursor-pointer h-[320px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-lg bg-luxury-gold/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <span className="text-luxury-gold text-xs tracking-wider uppercase mb-2">{exp.subtitle}</span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-luxury-platinum/80 mb-5 text-sm line-clamp-2">{exp.description}</p>
                <button className="inline-flex items-center text-luxury-gold text-sm font-medium group/btn">
                  <span>Discover</span>
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Destinations */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
              Global Access
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Premier <span className="text-luxury-gold">Destinations</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className="group relative overflow-hidden rounded-xl cursor-pointer h-48"
                style={{ transitionDelay: `${index * 50 + 800}ms` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="flex items-center space-x-1 text-luxury-gold mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium">{dest.name}</span>
                  </div>
                  <p className="text-white text-sm font-semibold">{dest.event}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-luxury-platinum/70 mb-6">
            Ready to create your bespoke luxury experience?
          </p>
          <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-semibold tracking-wide rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <Globe className="w-5 h-5" />
            <span>Plan Your Experience</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperiences;
