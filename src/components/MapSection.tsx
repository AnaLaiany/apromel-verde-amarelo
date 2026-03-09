import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Fix default marker icon issue with leaflet + bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const sectors = [
  {
    name: "Chácaras Benvinda",
    position: [-16.075, -47.975] as [number, number],
    description: "Setor de Chácaras Benvinda",
  },
  {
    name: "Chácaras Brasil",
    position: [-16.072, -47.968] as [number, number],
    description: "Setor de Chácaras Brasil",
  },
  {
    name: "Chácaras Santa Maria",
    position: [-16.068, -47.978] as [number, number],
    description: "Setor de Chácaras Santa Maria",
  },
  {
    name: "Chácaras Santa Marina",
    position: [-16.065, -47.972] as [number, number],
    description: "Setor de Chácaras Santa Marina",
  },
];

const center: [number, number] = [-16.07, -47.973];

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
          <MapContainer
            center={center}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sectors.map((sector) => (
              <Marker key={sector.name} position={sector.position}>
                <Popup>
                  <div className="text-center">
                    <strong className="text-sm">{sector.name}</strong>
                    <p className="text-xs mt-1">{sector.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Valparaíso de Goiás - GO
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
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
      </div>
    </section>
  );
};

export default MapSection;
