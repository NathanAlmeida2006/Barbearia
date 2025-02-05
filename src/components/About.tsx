export const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="text-primary uppercase tracking-wider mb-2">Sobre Nós</h3>
          <h2 className="text-4xl font-bold mb-6">A Melhor Barbearia de Blumenau</h2>
          <p className="text-gray-600 mb-6">
            Barbearia tradicional na cidade de Blumenau - Santa Catarina.
            Nossa estrutura permite a você ter a melhor experiência com os
            melhores profissionais da área.
          </p>
          <p className="text-gray-600">
            Aqui você encontra os melhores profissionais, que são especialistas em cortes clássicos e modernos. Oferecemos um ambiente agradável e descontraído, com uma equipe altamente qualificada para proporcionar a melhor experiência de barbearia.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/placeholder.svg"
            alt="Ambiente da Barbearia" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};