import { Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/30 to-accent/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
              ✨ India's Most Trusted Car Rental
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Drive Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dream Car Today
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium cars at affordable prices. Book instantly, drive happily across India.
            </p>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Pickup Location
                  </label>
                  <Input placeholder="Enter city" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Pickup Date
                  </label>
                  <Input type="date" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Return Date
                  </label>
                  <Input type="date" className="bg-background" />
                </div>
              </div>
              <Button className="w-full h-12 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <Search className="w-5 h-5 mr-2" />
                Search Available Cars
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroCarImage}
              alt="Premium car rental"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground mt-2">Cars Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground mt-2">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground mt-2">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground mt-2">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
