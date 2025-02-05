const team = [
  {
    name: "Arthur",
    role: "Barbeiro Master",
    image: "/placeholder.svg"
  }
];

export const Team = () => {
  return (
    <div className="bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-primary uppercase tracking-wider mb-3 text-sm font-semibold">Nossa Equipe</h3>
          <h2 className="text-5xl font-bold text-white mb-6">Nosso Profissional</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="text-center max-w-sm animate-fade-up"
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl mb-6 transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{member.name}</h3>
              <p className="text-primary text-lg font-medium tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};