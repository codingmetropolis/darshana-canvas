import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-thali.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-maroon/85 to-maroon/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Kannada Text */}
          <p className="text-gold text-xl md:text-2xl font-medium tracking-wide">
            ಹೋಟೆಲ್ ನವರತ್ನ
          </p>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold leading-tight text-balance">
            Hotel Navaratna
          </h1>
          
          <p className="text-2xl md:text-3xl text-secondary font-medium">
            Pure Veg Family Restaurant
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Authentic South Indian, Chinese & Punjabi Cuisine in the Heart of Nittur, Karnataka
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold-light text-foreground font-semibold px-8 py-6 text-lg shadow-elevated transition-all hover:scale-105"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Menu
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              onClick={() => window.location.href = 'tel:08185200988'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call to Reserve
            </Button>
          </div>

          {/* Location Info */}
          <div className="pt-8 flex items-center justify-center gap-2 text-primary-foreground/90">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="text-base md:text-lg">Kolluru/Shivamogga Road, Nittur - 577452</p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
