const team = [
  {
    name: "Arthur",
    role: "Barbeiro Senior",
    image: "/placeholder.svg"
  },
  {
    name: "Amanda",
    role: "Especialista em Cortes",
    image: "/placeholder.svg"
  },
  {
    name: "Gabriel",
    role: "Barbeiro Master",
    image: "/placeholder.svg"
  }
];

export const Team = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-primary uppercase tracking-wider text-center mb-2">Nossa Equipe</h3>
        <h2 className="text-4xl font-bold text-white text-center mb-12">Nossos Profissionais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};