import { Shield, Clock, IndianRupee, Headphones, CheckCircle, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "Transparent pricing with no hidden charges. Get the best deals in India.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Booking",
      description: "Book instantly online or via phone. Easy cancellation and rescheduling.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified & Safe",
      description: "All cars are sanitized, insured, and regularly maintained for your safety.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support in Hindi, English, and regional languages.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Easy Documentation",
      description: "Minimal paperwork. Just your license and Aadhaar to get started.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Fleet",
      description: "Latest models from top brands. Well-maintained and comfortable rides.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            India's Most <span className="text-primary">Trusted</span> Car Rental
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience hassle-free car rentals with premium service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
