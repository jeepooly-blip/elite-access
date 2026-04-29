import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight, Ticket, Users, ChevronRight } from 'lucide-react';

const EventsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const events = [
    {
      id: 1,
      category: 'Formula 1',
      name: 'Monaco Grand Prix',
      date: 'May 22-25, 2026',
      location: 'Monte Carlo, Monaco',
      image: 'https://images.unsplash.com/photo-1541344999736-4a98982f342f?w=800&q=80',
      price: 'From €15,000',
      featured: true,
    },
    {
      id: 2,
      category: 'Tennis',
      name: 'Wimbledon',
      date: 'June 28 - July 11, 2026',
      location: 'London, England',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
      price: 'From £8,500',
      featured: true,
    },
    {
      id: 3,
      category: 'Horse Racing',
      name: 'Royal Ascot',
      date: 'June 16-20, 2026',
      location: 'Ascot, England',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80',
      price: 'From £12,000',
      featured: true,
    },
    {
      id: 4,
      category: 'Motorsport',
      name: 'COTA Grand Prix',
      date: 'October 31 - November 2, 2026',
      location: 'Austin, Texas',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      price: 'From $8,000',
      featured: false,
    },
    {
      id: 5,
      category: 'Concerts',
      name: 'Wembley Stadium',
      date: 'Summer 2026',
      location: 'London, England',
      image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=80',
      price: 'From £5,000',
      featured: false,
    },
    {
      id: 6,
      category: 'NFL',
      name: 'Super Bowl LXI',
      date: 'February 14, 2027',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80',
      price: 'From $25,000',
      featured: true,
    },
  ];

  const categories = ['All Events', 'Formula 1', 'Tennis', 'Horse Racing', 'Concerts', 'NFL'];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-luxury-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
            Curated Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium <span className="text-luxury-gold">Events</span>
          </h2>
          <p className="text-luxury-platinum/80 max-w-2xl mx-auto text-lg">
            Access the world's most prestigious sporting and entertainment events through our exclusive VIP packages
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2.5 text-sm tracking-wide rounded-full transition-all duration-300 ${
                index === 0
                  ? 'bg-luxury-gold text-luxury-black font-medium'
                  : 'bg-luxury-charcoal text-luxury-silver hover:bg-luxury-gray hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Event Card */}
              <div className={`relative overflow-hidden rounded-2xl bg-luxury-charcoal border border-luxury-gray/30 hover:border-luxury-gold/50 transition-all duration-500 ${
                event.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-luxury-gold/90 text-luxury-black text-xs font-semibold tracking-wide rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-luxury-black/60 backdrop-blur-sm text-luxury-gold text-xs font-medium tracking-wide rounded-full">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {event.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-luxury-silver text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-luxury-gold/70" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-luxury-silver text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-luxury-gold/70" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-luxury-gray/30">
                    <div>
                      <span className="text-luxury-silver text-sm">Starting from</span>
                      <p className="text-luxury-gold font-semibold text-lg">{event.price}</p>
                    </div>
                    <button className="group/btn flex items-center space-x-2 text-luxury-gold hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">View Package</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group inline-flex items-center space-x-3 px-8 py-4 border border-luxury-gold/50 text-luxury-gold font-medium tracking-wide rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
            <span>View All Events</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-luxury-gray/20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '500+', label: 'Exclusive Events', icon: Ticket },
            { number: '15K+', label: 'VIP Clients', icon: Users },
            { number: '25+', label: 'Countries', icon: MapPin },
            { number: '98%', label: 'Satisfaction', icon: ArrowRight },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-luxury-gold/50 mx-auto mb-3" />
              <p className="font-serif text-4xl font-bold text-luxury-gold mb-2">{stat.number}</p>
              <p className="text-luxury-silver text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsShowcase;
