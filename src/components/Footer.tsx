import { useState, useEffect } from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const footerLinks = {
    events: {
      title: 'Events',
      links: [
        { name: 'Formula 1', href: '#' },
        { name: 'Monaco Grand Prix', href: '#' },
        { name: 'Wimbledon', href: '#' },
        { name: 'Royal Ascot', href: '#' },
        { name: 'Super Bowl', href: '#' },
        { name: 'Concerts', href: '#' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Paddock Club', href: '#' },
        { name: 'Champions Suite', href: '#' },
        { name: 'Private Aviation', href: '#' },
        { name: 'Luxury Travel', href: '#' },
        { name: 'Meet & Greet', href: '#' },
        { name: 'Yacht Experiences', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Accessibility', href: '#' },
      ],
    },
  };

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className={`bg-luxury-dark border-t border-luxury-gray/20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-luxury-gold via-luxury-champagne to-luxury-gold bg-clip-text text-transparent tracking-wider">
                VELOCE
              </span>
              <span className="text-xs tracking-[0.2em] text-luxury-silver uppercase">
                Concierge
              </span>
            </div>
            <p className="text-luxury-silver/80 mb-6 max-w-sm leading-relaxed">
              The world's premier luxury concierge service delivering exclusive access to the most prestigious events and experiences across the globe.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="tel:+18005551234" className="flex items-center text-luxury-silver hover:text-luxury-gold transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                +1 (800) 555-1234
              </a>
              <a href="mailto:concierge@veloce.com" className="flex items-center text-luxury-silver hover:text-luxury-gold transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                concierge@veloce.com
              </a>
              <div className="flex items-center text-luxury-silver">
                <MapPin className="w-4 h-4 mr-3" />
                Mayfair, London W1K 5AH
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-luxury-gray/30 flex items-center justify-center text-luxury-silver hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-luxury-gold text-sm font-semibold tracking-wider uppercase mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-luxury-silver/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-6">
            <div className="bg-luxury-charcoal/50 border border-luxury-gray/20 rounded-2xl p-8 mt-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">
                    Exclusive Updates
                  </h4>
                  <p className="text-luxury-silver/80">
                    Be the first to know about priority access to sold-out events and special VIP offers.
                  </p>
                </div>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 bg-luxury-dark border border-luxury-gray/30 rounded-full text-white placeholder-luxury-silver/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-luxury-gold text-luxury-black font-semibold rounded-full hover:bg-luxury-champagne transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gray/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-luxury-silver/60">
              <span>© 2026 VELOCE Concierge. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/100px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-6 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-luxury-gold text-luxury-black rounded-full shadow-gold flex items-center justify-center hover:bg-luxury-champagne transition-all duration-300 transform hover:scale-110 opacity-0 invisible"
        id="scrollTop"
        style={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? 'visible' : 'hidden' }}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
