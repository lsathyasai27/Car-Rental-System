import { Car, Users, Fuel, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  price: number;
  seats: number;
  transmission: string;
  fuel: string;
}

const CarCard = ({ name, type, image, price, seats, transmission, fuel }: CarCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden bg-secondary/20">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {type}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground">or similar</p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{fuel}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl font-bold text-primary">₹{price}</div>
            <div className="text-sm text-muted-foreground">per day</div>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            onClick={() => navigate('/book', { state: { carName: name } })}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
