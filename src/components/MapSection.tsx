import { MapPin } from "lucide-react";

const sectors = [
  { name: "Chácaras Benvinda" },
  { name: "Chácaras Brasil" },
  { name: "Chácaras Santa Maria" },
  { name: "Chácaras Santa Marina" },
];

const MapSection = () => {
  return (
    <section id="mapa" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm font-semibold uppercase tracking-wider">
              Localização
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mapa dos Setores
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Conheça a localização dos setores de chácaras em Valparaíso de Goiás
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-border shadow-lg">
          <iframe
            title="Mapa dos Setores - Valparaíso de Goiás"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-47.995%2C-16.085%2C-47.955%2C-16.055&layer=mapnik&marker=-16.07%2C-47.973"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border"
            >
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">
                {sector.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 bg-card rounded-lg p-4 border border-border max-w-xl mx-auto">
          <MapPin className="h-5 w-5 text-primary shrink-0" />
          <p className="font-body text-sm text-foreground">
            R. Potengy, Q. 3 - L. 28, S/N - Chácara Benvinda, Valparaíso de Goiás - GO, 72875-160
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
