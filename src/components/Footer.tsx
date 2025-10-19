import { Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-gold">
              Hotel Navaratna
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Pure Vegetarian Family Restaurant serving authentic South Indian, Chinese, and Punjabi cuisine in Nittur, Karnataka.
            </p>
            <p className="text-sm text-primary-foreground/60">
              GSTIN: 29CJSPS7344A1ZN
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="tel:08185200988"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Make a Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Kolluru/Shivamogga Road, Nittur - 577452
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <a href="tel:08185200988" className="hover:text-gold transition-colors block">
                    08185200988
                  </a>
                  <a href="tel:8971925238" className="hover:text-gold transition-colors block">
                    8971925238
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="https://instagram.com/nittur_navaratna_hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  @nittur_navaratna_hotel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Hotel Navaratna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
