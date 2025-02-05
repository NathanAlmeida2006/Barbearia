import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "André Oliveira",
    rating: 5,
    text: "Excelente serviço! Muito profissional e atencioso. Recomendo!"
  },
  {
    name: "Bruno Pereira",
    rating: 5,
    text: "Melhor barbearia que já frequentei! Profissionais excepcionais."
  },
  {
    name: "Carlos Silva",
    rating: 5,
    text: "Ambiente agradável e ótimo atendimento. Voltarei sempre!"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-primary uppercase tracking-wider text-center mb-2">Depoimentos</h3>
        <h2 className="text-4xl font-bold text-white text-center mb-12">O Que Nossos Clientes Dizem</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 p-6 w-full md:w-[350px]">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/90 mb-4">{testimonial.text}</p>
              <p className="text-primary font-semibold">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};