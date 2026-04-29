import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Calendar, Users, Star, Info, ChevronRight, Package } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownClick = (itemName: string) => {
    if (activeDropdown === itemName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemName);
      setExpandedItem(itemName);
    }
  };

  const navItems = [
    { name: 'Events', hasDropdown: true, icon: Calendar },
    { name: 'VIP Access', hasDropdown: true, icon: Star },
    { name: 'Experiences', hasDropdown: false, icon: Users },
    { name: 'About', hasDropdown: false, icon: Info },
  ];

  const eventDropdowns = [
    { name: 'Formula 1', items: ['Monaco Grand Prix', 'Paddock Club', 'All F1 Events'] },
    { name: 'Tennis', items: ['Wimbledon', 'US Open', 'French Open'] },
    { name: 'Horse Racing', items: ['Royal Ascot', 'Kentucky Derby', 'Melbourne Cup'] },
    { name: 'Concerts', items: ['Wembley Stadium', 'Madison Square Garden', 'Dodger Stadium'] },
    { name: 'NFL & Sports', items: ['Super Bowl', 'NBA Finals', 'Wimbledon'] },
  ];

  const vipAccessItems = ['Paddock Club', 'Champions Suite', 'Hospitality Packages', 'Meet & Greet', 'Yacht Experiences'];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-black/95 backdrop-blur-xl border-b border-luxury-gold/20 shadow-lg'
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
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => item.hasDropdown && handleDropdownClick(item.name)}
                    className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 flex items-center space-x-1 group ${
                      isScrolled ? 'text-white/80 hover:text-luxury-gold' : 'text-white/90 hover:text-luxury-gold'
                    } ${activeDropdown === item.name ? 'text-luxury-gold' : ''}`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Events Mega Menu */}
                  {item.hasDropdown && activeDropdown === item.name && item.name === 'Events' && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] bg-luxury-dark border border-luxury-gold/30 shadow-2xl rounded-xl overflow-hidden animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                      style={{ zIndex: 150 }}
                    >
                      <div className="p-8">
                        <div className="grid grid-cols-5 gap-6">
                          {eventDropdowns.map((category) => (
                            <div key={category.name} className="group">
                              <h3 className="text-luxury-gold text-sm font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
                                <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                                {category.name}
                              </h3>
                              <ul className="space-y-3">
                                {category.items.map((subItem) => (
                                  <li key={subItem}>
                                    <a
                                      href="#"
                                      className="text-sm text-luxury-silver hover:text-white hover:translate-x-1 transition-all duration-200 block py-1"
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
                      <div className="px-8 py-5 bg-luxury-black border-t border-luxury-gold/10">
                        <a href="#" className="text-sm text-luxury-gold hover:text-luxury-champagne transition-colors flex items-center gap-2 font-medium">
                          View All Events <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* VIP Access Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && item.name === 'VIP Access' && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-luxury-dark border border-luxury-gold/30 shadow-2xl rounded-xl overflow-hidden animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                      style={{ zIndex: 150 }}
                    >
                      <div className="p-5">
                        <ul className="space-y-1">
                          {vipAccessItems.map((vipItem) => (
                            <li key={vipItem}>
                              <a
                                href="#"
                                className="text-sm text-luxury-silver hover:text-white hover:bg-luxury-gray/50 transition-all duration-200 flex items-center justify-between px-4 py-3 rounded-lg"
                              >
                                {vipItem}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-luxury-gold" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-5 py-5 bg-luxury-black border-t border-luxury-gold/10">
                        <a href="#" className="text-sm text-luxury-gold hover:text-luxury-champagne transition-colors flex items-center gap-2 font-medium">
                          View All VIP Packages <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+18005551234"
                className="text-sm text-luxury-silver hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></span>
                +1 (800) 555-1234
              </a>
              <button className="px-8 py-3 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black text-sm font-bold tracking-wide rounded-full hover:shadow-lg hover:shadow-luxury-gold/30 transition-all duration-300 transform hover:scale-105">
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white relative z-[110]"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-luxury-black/90 backdrop-blur-md transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Drawer */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[88%] max-w-[380px] bg-luxury-dark border-l border-luxury-gold/20 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
            <span className="font-serif text-2xl font-bold bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
              VELOCE
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-luxury-silver hover:text-white transition-colors bg-luxury-dark/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
            <div className="flex-1 p-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedItem === item.name;
                
                return (
                  <div key={item.name} className="border-b border-luxury-gray/20 pb-3">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setExpandedItem(isExpanded ? null : item.name)}
                          className="w-full flex items-center justify-between py-4 text-lg text-white/90 hover:text-luxury-gold transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <Icon className="w-5 h-5 text-luxury-gold" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Expandable Submenu */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-11 pb-4 space-y-1">
                            {item.name === 'Events' && eventDropdowns.map((category) => (
                              <div key={category.name} className="pt-3">
                                <span className="text-xs text-luxury-gold uppercase tracking-wider font-semibold">{category.name}</span>
                                <div className="pt-2 space-y-1">
                                  {category.items.map((subItem) => (
                                    <a
                                      key={subItem}
                                      href="#"
                                      className="block py-2 text-sm text-luxury-silver hover:text-white transition-colors flex items-center gap-3"
                                    >
                                      <span className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full"></span>
                                      {subItem}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {item.name === 'VIP Access' && vipAccessItems.map((vipItem) => (
                              <a
                                key={vipItem}
                                href="#"
                                className="block py-3 text-sm text-luxury-silver hover:text-white transition-colors flex items-center gap-3"
                              >
                                <span className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full"></span>
                                {vipItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href="#"
                        className="flex items-center gap-4 py-4 text-lg text-white/90 hover:text-luxury-gold transition-colors"
                      >
                        <Icon className="w-5 h-5 text-luxury-gold" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-luxury-gold/20 bg-luxury-black/50 space-y-4">
              <a 
                href="tel:+18005551234" 
                className="flex items-center justify-center gap-3 py-3 text-sm text-luxury-silver bg-luxury-dark/50 rounded-lg"
              >
                <span className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></span>
                +1 (800) 555-1234
              </a>
              <button className="w-full py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-bold tracking-wide rounded-xl shadow-lg hover:shadow-luxury-gold/30 transition-shadow">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
