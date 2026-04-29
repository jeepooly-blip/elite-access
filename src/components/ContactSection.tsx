import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-luxury-black to-luxury-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-luxury-gold text-sm tracking-[0.4em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your <span className="text-luxury-gold">VIP</span> Journey
            </h2>
            <p className="text-luxury-platinum/80 mb-10 leading-relaxed">
              Our dedicated concierge team is available around the clock to craft your bespoke luxury experience. From exclusive event access to personalized travel arrangements, we handle every detail with discretion and excellence.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Global Hotline</p>
                  <a href="tel:+18005551234" className="text-luxury-silver hover:text-luxury-gold transition-colors">
                    +1 (800) 555-1234
                  </a>
                  <p className="text-luxury-silver text-sm mt-1">24/7 Availability</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email Us</p>
                  <a href="mailto:concierge@veloce.com" className="text-luxury-silver hover:text-luxury-gold transition-colors">
                    concierge@veloce.com
                  </a>
                  <p className="text-luxury-silver text-sm mt-1">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">London Office</p>
                  <p className="text-luxury-silver">Mayfair, London W1K 5AH</p>
                  <p className="text-luxury-silver text-sm mt-1">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Operating Hours</p>
                  <p className="text-luxury-silver">24 hours, 7 days a week</p>
                  <p className="text-luxury-silver text-sm mt-1">Global concierge service</p>
                </div>
              </div>
            </div>

            {/* Quick Event Links */}
            <div>
              <p className="text-luxury-silver text-sm mb-4">Popular Enquiries</p>
              <div className="flex flex-wrap gap-3">
                {['Monaco GP', 'Wimbledon', 'Royal Ascot', 'Super Bowl', 'F1 Paddock Club'].map((event) => (
                  <button
                    key={event}
                    className="px-4 py-2 bg-luxury-dark/80 border border-luxury-gray/30 text-luxury-silver text-sm rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
                  >
                    {event}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-luxury-dark/80 backdrop-blur-xl border border-luxury-gray/30 rounded-3xl p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">Enquiry Received</h3>
                  <p className="text-luxury-silver mb-6">
                    Thank you for your interest. A member of our concierge team will contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-luxury-gold hover:text-white transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-luxury-silver text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-gray/30 rounded-xl text-white placeholder-luxury-silver/50 focus:border-luxury-gold focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-luxury-silver text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-gray/30 rounded-xl text-white placeholder-luxury-silver/50 focus:border-luxury-gold focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-luxury-silver text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-gray/30 rounded-xl text-white placeholder-luxury-silver/50 focus:border-luxury-gold focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-luxury-silver text-sm mb-2">Event Interest</label>
                      <select
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-gray/30 rounded-xl text-white focus:border-luxury-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select an event</option>
                        <option value="monaco">Monaco Grand Prix</option>
                        <option value="wimbledon">Wimbledon</option>
                        <option value="ascot">Royal Ascot</option>
                        <option value="cota">COTA Grand Prix</option>
                        <option value="superbowl">Super Bowl</option>
                        <option value="other">Other Event</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-luxury-silver text-sm mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-gray/30 rounded-xl text-white placeholder-luxury-silver/50 focus:border-luxury-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-semibold tracking-wide rounded-xl hover:shadow-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-luxury-black/30 border-t-luxury-black rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-luxury-silver/60 text-xs text-center">
                    By submitting, you agree to our privacy policy. Your information is handled with complete discretion.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
