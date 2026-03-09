import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, alt: "Reunião da comunidade ao ar livre" },
  { src: gallery2, alt: "Estradas do setor de chácaras" },
  { src: gallery3, alt: "Assembleia dos moradores" },
  { src: gallery4, alt: "Chácaras e pomares da região" },
  { src: gallery5, alt: "Festa comunitária" },
  { src: gallery6, alt: "Plantio de mudas pela comunidade" },
];

const INSTAGRAM_URL = "https://www.instagram.com/apromel2001";

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Galeria
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Confira os registros da nossa comunidade. Siga-nos no Instagram para mais!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {photos.map((photo, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
