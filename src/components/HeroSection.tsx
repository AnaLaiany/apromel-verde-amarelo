import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center"
    >
      <img
        src={heroBg}
        alt="Vista aérea do setor de chácaras"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          APROMEL
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Associação Pro-Melhoramento dos setores de chácaras Benvinda, Brasil, Santa Maria, Santa Marina de Valparaíso de Goiás.
        </p>
        <a
          href="#editais"
          className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Ver Editais
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
