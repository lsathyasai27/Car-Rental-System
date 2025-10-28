import { Car, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DriveIndia
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate('/')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <a href="#cars" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Cars
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              1800-123-4567
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              onClick={() => navigate('/', { state: { scrollTo: 'cars' } })}
            >
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#cars" className="block text-foreground hover:text-primary transition-colors font-medium">
              Our Cars
            </a>
            <a href="#locations" className="block text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary/90"
              onClick={() => navigate('/', { state: { scrollTo: 'cars' } })}
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
