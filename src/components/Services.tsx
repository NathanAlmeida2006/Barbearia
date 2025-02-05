import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export const Services = () => {
  const services = [
    "Corte de Cabelo",
    "Barba",
    "Acabamentos",
    "Tratamentos Capilares",
    "Design de Sobrancelha",
    "Pigmentação"
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-primary uppercase tracking-wider text-center mb-2">Nossos Serviços</h3>
        <h2 className="text-4xl font-bold text-center mb-12">Serviços Profissionais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="text-lg">{service}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => console.log("Agendar clicked")}
          >
            AGENDAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};