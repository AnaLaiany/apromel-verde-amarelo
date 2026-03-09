import logoApromel from "@/assets/logo-apromel.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src={logoApromel} alt="APROMEL" className="h-8 w-8 object-contain" />
          <span className="font-heading text-sm font-bold text-primary-foreground">APROMEL</span>
        </div>
        <p className="font-body text-xs text-primary-foreground/70">© 2026 APROMEL — Todos os direitos reservados.

        </p>
      </div>
    </footer>);

};

export default Footer;