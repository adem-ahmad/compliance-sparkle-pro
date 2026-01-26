import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-2">Mériem</h3>
            <p className="text-primary font-subheading text-sm mb-4">
              Consultante Formation
            </p>
            <p className="text-white/70 font-body text-sm max-w-md">
              Accompagnement réglementaire, administratif et stratégique pour les activités de formation professionnelle en France.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-subheading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-white/70 hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/ebook" className="text-white/70 hover:text-primary transition-colors">
                  Ebooks & Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-subheading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-body mb-4">
              <li>
                <a
                  href="mailto:contact@meriem-formation.fr"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  contact@meriem-formation.fr
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm font-body">
            © {currentYear} Mériem Consultante Formation. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm font-body">
            <a href="#" className="text-white/50 hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-white/50 hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/50 hover:text-primary transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
