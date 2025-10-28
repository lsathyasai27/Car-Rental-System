import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Locations = () => {
  const cities = [
    { name: "Mumbai", cars: "100+" },
    { name: "Delhi", cars: "80+" },
    { name: "Bangalore", cars: "90+" },
    { name: "Hyderabad", cars: "70+" },
    { name: "Chennai", cars: "75+" },
    { name: "Pune", cars: "60+" },
    { name: "Kolkata", cars: "55+" },
    { name: "Ahmedabad", cars: "50+" },
    { name: "Jaipur", cars: "45+" },
    { name: "Goa", cars: "65+" },
    { name: "Chandigarh", cars: "40+" },
    { name: "Kochi", cars: "35+" },
  ];

  return (
    <section id="locations" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            Our Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Available in <span className="text-primary">{cities.length} Cities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find us in major cities across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">{city.name}</div>
                  <div className="text-sm text-muted-foreground">{city.cars} cars</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Don't see your city?</p>
          <button className="text-primary font-semibold hover:underline text-lg">
            Request New Location →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
