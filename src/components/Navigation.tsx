import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Events', hasDropdown: true },
    { name: 'VIP Access', hasDropdown: true },
    { name: 'Experiences', hasDropdown: false },
    { name: 'About', hasDropdown: false },
  ];

  const eventDropdowns = [
    { name: 'Formula 1', items: ['Monaco Grand Prix', 'Paddock Club', 'All F1 Events'] },
    { name: 'Tennis', items: ['Wimbledon', 'US Open', 'French Open'] },
    { name: 'Horse Racing', items: ['Royal Ascot', 'Kentucky Derby', 'Melbourne Cup'] },
    { name: 'Concerts', items: ['Wembley Stadium', 'Madison Square Garden', 'Dodger Stadium'] },
    { name: 'NFL & Sports', items: ['Super Bowl', 'NBA Finals', 'Wimbledon'] },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-black/95 backdrop-blur-xl border-b border-luxury-gold/20 shadow-luxury'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <span className="font-serif text-2xl lg:text-3xl font-bold bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold bg-clip-text text-transparent tracking-wider">
                VELOCE
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-transparent group-hover:w-full transition-all duration-500"></span>
            </div>
            <span className="hidden lg:block text-xs tracking-[0.3em] text-luxury-silver uppercase">
              Concierge
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 flex items-center space-x-1 group ${
                    isScrolled ? 'text-white/80 hover:text-luxury-gold' : 'text-white/90 hover:text-luxury-gold'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && item.name === 'Events' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-luxury-dark/98 backdrop-blur-xl border border-luxury-gold/20 shadow-luxury rounded-lg overflow-hidden animate-fade-in">
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {eventDropdowns.map((category) => (
                          <div key={category.name}>
                            <h3 className="text-luxury-gold text-sm font-medium mb-3 tracking-wider uppercase">
                              {category.name}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((subItem) => (
                                <li key={subItem}>
                                  <a
                                    href="#"
                                    className="text-sm text-luxury-silver hover:text-white transition-colors duration-200 block py-1"
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.hasDropdown && activeDropdown === item.name && item.name === 'VIP Access' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-luxury-dark/98 backdrop-blur-xl border border-luxury-gold/20 shadow-luxury rounded-lg overflow-hidden animate-fade-in">
                    <div className="p-4">
                      <ul className="space-y-1">
                        {['Paddock Club', 'Champions Suite', 'Hospitality Packages', 'Meet & Greet', 'Yacht Experiences'].map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="text-sm text-luxury-silver hover:text-white hover:bg-luxury-gray/50 transition-all duration-200 block px-4 py-3 rounded-lg"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+18005551234"
              className="text-sm text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
            >
              +1 (800) 555-1234
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black text-sm font-semibold tracking-wide rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105">
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-luxury-dark/98 backdrop-blur-xl border-t border-luxury-gold/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <button className="w-full text-left py-3 text-lg text-white/90 hover:text-luxury-gold transition-colors">
                {item.name}
              </button>
              {item.hasDropdown && (
                <div className="pl-4 space-y-2 mt-2">
                  {(item.name === 'Events' ? eventDropdowns : []).flatMap((category) =>
                    category.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-2 text-sm text-luxury-silver hover:text-white transition-colors"
                      >
                        {subItem}
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-luxury-gray/30">
            <button className="w-full py-3 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-semibold tracking-wide rounded-full">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
