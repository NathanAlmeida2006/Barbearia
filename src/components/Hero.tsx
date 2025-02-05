import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/placeholder.svg')`,
          filter: 'brightness(0.5)'
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <img 
          src="/placeholder.svg" 
          alt="Logo da Barbearia" 
          className="w-48 mb-8 animate-fade-up"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-up">
          EXCELÊNCIA EM CADA DETALHE
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl animate-fade-up">
          A melhor barbearia de Blumenau para quem busca estilo com os melhores profissionais
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-fade-up"
          onClick={() => console.log("Agendar clicked")}
        >
          AGENDAR AGORA
        </Button>
      </div>
    </div>
  );
};