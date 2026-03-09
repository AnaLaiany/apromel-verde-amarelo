import { Users, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Comunidade Unida",
    description: "Reunimos moradores e produtores para fortalecer os interesses do nosso setor.",
  },
  {
    icon: Shield,
    title: "Representação",
    description: "Atuamos junto ao poder público para garantir melhorias e direitos da comunidade.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Valorizamos o meio ambiente e promovemos práticas sustentáveis nas chácaras.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Sobre a APROMEL
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Somos uma associação dedicada a representar e apoiar os moradores e produtores do setor de chácaras, promovendo qualidade de vida e desenvolvimento sustentável.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-lg p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
