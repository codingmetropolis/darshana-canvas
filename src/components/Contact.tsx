import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Reservation Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918722228760?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Please send your reservation request via WhatsApp",
    });
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Come experience authentic Karnataka cuisine. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Hotel Navaratna<br />
                    Kolluru / Shivamogga Road<br />
                    Nittur - 577452<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:08722228760" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 87222 28760
                  </a>
                  {/* <a href="tel:+918722228760" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 87222 28760
                  </a> */}
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                  <a
                    href="https://instagram.com/nittur_navaratna_hotel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @nittur_navaratna_hotel
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload family photo & get 5% discount!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Party Orders</h3>
                  <p className="text-muted-foreground">
                    We take party orders!<br />
                    Call us for special occasions and events.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message or Reservation Details *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              >
                Send via WhatsApp
              </Button>
            </form>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-12">
          <Card className="overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d75.0!3d13.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU0JzAwLjAiTiA3NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Navaratna Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
