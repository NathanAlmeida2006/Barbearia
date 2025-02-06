const team = [
  {
    name: "Arthur",
    role: "Barbeiro Master",
    image: "/placeholder.svg"
  }
];

export const Team = () => {
  return (
    <div className="bg-secondary py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="animate-fade-up">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img 
                  src={team[0].image} 
                  alt={team[0].name}
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-left animate-fade-up delay-100">
            <h3 className="text-primary uppercase tracking-wider mb-4 text-sm font-semibold">Nossa Equipe</h3>
            <h2 className="text-6xl font-bold text-white mb-8">Nosso Profissional</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6">
              <h3 className="text-white text-3xl font-bold">{team[0].name}</h3>
              <p className="text-primary text-xl font-medium tracking-wide">{team[0].role}</p>
              <p className="text-gray-400 leading-relaxed">
                Com anos de experiência em barbearia, oferecemos um serviço premium e personalizado para cada cliente. 
                Especializado em cortes clássicos e modernos, barba e tratamentos capilares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};