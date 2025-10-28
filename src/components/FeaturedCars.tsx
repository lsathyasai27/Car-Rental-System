import CarCard from "./CarCard";
import sedanImage from "@/assets/sedan-luxury.jpg";
import suvImage from "@/assets/suv-red.jpg";
import hatchbackImage from "@/assets/hatchback-white.jpg";

const FeaturedCars = () => {
  const cars = [
    {
      name: "Hyundai Creta",
      type: "SUV",
      image: suvImage,
      price: 2499,
      seats: 5,
      transmission: "Auto",
      fuel: "Diesel",
    },
    {
      name: "Honda City",
      type: "Sedan",
      image: sedanImage,
      price: 1899,
      seats: 5,
      transmission: "Auto",
      fuel: "Petrol",
    },
    {
      name: "Maruti Swift",
      type: "Hatchback",
      image: hatchbackImage,
      price: 1299,
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
    },
  ];

  return (
    <section id="cars" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            Our Fleet
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={car.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CarCard {...car} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-primary font-semibold hover:underline text-lg">
            View All Vehicles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
