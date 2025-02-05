import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Localização</h3>
            <div className="flex items-start gap-4 text-gray-400">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <p>
                Alameda Rio Branco, 123<br />
                Blumenau, SC
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="w-6 h-6 text-primary" />
                <p>(47) 99999-9999</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="w-6 h-6 text-primary" />
                <p>contato@hunker.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Horário</h3>
            <p className="text-gray-400">
              Segunda à Sábado<br />
              09:00 - 20:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2024 Hunker Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};