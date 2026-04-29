import { useState, useEffect, useRef } from 'react';
import { Shield, Star, Crown, GlassWater, Users, Car, Sparkles, Check } from 'lucide-react';

const VIPServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePackage, setActivePackage] = useState(1);
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

  const packages = [
    {
      id: 1,
      name: 'Paddock Club',
      subtitle: 'The Ultimate F1 Experience',
      description: 'Experience Formula 1 from the heart of the action with unparalleled trackside views from the team garages.',
      price: 'From £5,000',
      features: [
        'Prime position above team garages',
        'Pit lane walk access',
        'Champagne and gourmet cuisine',
        'Driver meet & greet opportunities',
        'Exclusive Paddock Club merchandise',
        'Dedicated concierge service',
      ],
      image: 'https://images.unsplash.com/photo-1541344999736-4a98982f342f?w=1200&q=80',
      popular: true,
    },
    {
      id: 2,
      name: 'Champions Suite',
      subtitle: 'Elite Hospitality',
      description: 'Premium suite access with dedicated hospitality team, fine dining, and stunning views of the action.',
      price: 'From £12,000',
      features: [
        'Private suite with track views',
        'Five-star dining experience',
        'Premium wine and spirits',
        'Celebrity and driver appearances',
        'VIP parking privileges',
        'Personal concierge 24/7',
      ],
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80',
      popular: false,
    },
    {
      id: 3,
      name: 'Platinum Experience',
      subtitle: 'Complete Luxury',
      description: 'Our most exclusive offering with every amenity imaginable, creating an unforgettable experience.',
      price: 'Price on Request',
      features: [
        'All Champions Suite benefits',
        'Helicopter transfers',
        'Luxury yacht access',
        'Private after-party access',
        'Custom curated itinerary',
        'Unlimited budget flexibility',
      ],
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80',
      popular: false,
    },
  ];

  const inclusions = [
    { icon: Crown, title: 'Royal Treatment', description: 'White-glove service from dedicated concierge team' },
    { icon: GlassWater, title: 'Fine Dining', description: 'Michelin-star catering and premium beverage selection' },
    { icon: Car, title: 'VIP Transport', description: 'Luxury vehicle transfers and helicopter options' },
    { icon: Users, title: 'Meet & Greet', description: 'Exclusive access to drivers, celebrities, and VIPs' },
    { icon: Star, title: 'Premium Access', description: 'Pit lane walks, paddock tours, and exclusive areas' },
    { icon: Shield, title: 'Guaranteed Entry', description: 'Secured tickets even for sold-out events' },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-luxury-charcoal to-luxury-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-luxury-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-luxury-gold/5 to-transparent pointer-events-none" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
            VIP Access
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hospitality <span className="text-luxury-gold">Packages</span>
          </h2>
          <p className="text-luxury-platinum/80 max-w-2xl mx-auto text-lg">
            Discover our range of exclusive hospitality experiences, each designed to deliver unforgettable moments at the world's most prestigious events.
          </p>
        </div>

        {/* Package Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex p-1 bg-luxury-dark/80 backdrop-blur-sm rounded-full border border-luxury-gray/30">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                className={`px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  activePackage === pkg.id
                    ? 'bg-luxury-gold text-luxury-black'
                    : 'text-luxury-silver hover:text-white'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Package */}
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              activePackage === pkg.id ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
            }`}
          >
            {/* Content */}
            <div className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${activePackage === pkg.id ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {pkg.popular && (
                <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 text-luxury-gold text-sm font-medium rounded-full mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-luxury-gold text-lg mb-4">{pkg.subtitle}</p>
              <p className="text-luxury-platinum/80 mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-luxury-gold" />
                    </div>
                    <span className="text-luxury-silver text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-luxury-silver text-sm">Starting from</span>
                  <p className="text-luxury-gold font-serif text-3xl font-bold">{pkg.price}</p>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-semibold tracking-wide rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Image */}
            <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${activePackage === pkg.id ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-luxury-gold/10 rounded-3xl blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-luxury-gold/30 rounded-2xl" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-luxury-gold/10 rounded-xl" />
              </div>
            </div>
          </div>
        ))}

        {/* Inclusions Grid */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              All Packages Include
            </h3>
            <p className="text-luxury-platinum/70">
              Premium amenities and services across every experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-luxury-dark/50 backdrop-blur-sm border border-luxury-gray/30 rounded-xl hover:border-luxury-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-luxury-silver text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPServices;
