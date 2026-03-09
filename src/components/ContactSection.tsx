import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Contato
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Entre em contato com a diretoria da APROMEL.
        </p>

        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">E-mail</p>
              <p className="font-body font-medium text-foreground">contato@apromel.org.br</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Telefone</p>
              <p className="font-body font-medium text-foreground">61 996708439</p>
            </div>
          </div>

        </div>
      </div>
    </section>);
};

export default ContactSection;