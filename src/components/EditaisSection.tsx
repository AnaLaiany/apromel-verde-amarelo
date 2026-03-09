import { FileText, Calendar } from "lucide-react";

const editais = [
  {
    title: "Edital nº 001/2026 — Assembleia Geral Ordinária",
    date: "15 de Março de 2026",
    description: "Convocação para assembleia geral ordinária para prestação de contas e eleição da nova diretoria.",
  },
  {
    title: "Edital nº 002/2026 — Manutenção de Estradas",
    date: "01 de Abril de 2026",
    description: "Comunicado sobre o início das obras de manutenção das estradas vicinais do setor.",
  },
  {
    title: "Edital nº 003/2026 — Programa de Regularização",
    date: "20 de Abril de 2026",
    description: "Abertura do programa de regularização fundiária para moradores do setor de chácaras.",
  },
];

const EditaisSection = () => {
  return (
    <section id="editais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Editais
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Fique por dentro dos comunicados e editais oficiais da APROMEL.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {editais.map((edital, index) => (
            <article
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {edital.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">{edital.date}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {edital.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditaisSection;
