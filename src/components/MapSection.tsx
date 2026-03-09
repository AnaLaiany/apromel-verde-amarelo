import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mapa1 from "@/assets/mapa-1.png";

const mapImages = [
  { src: mapa1, alt: "Mapa do Setor 1" },
  { src: "/placeholder.svg", alt: "Mapa do Setor 2" },
  { src: "/placeholder.svg", alt: "Mapa do Setor 3" },
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

        <div className="max-w-3xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {mapImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[500px] object-contain bg-muted"
                    />
                  </div>
                  <p className="font-body text-sm text-muted-foreground text-center mt-3">
                    {image.alt}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
