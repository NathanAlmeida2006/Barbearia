import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;