import { Link } from 'react-router';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bosso-black)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre a Bosso */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">BOSSO</h3>
              <p className="text-[var(--bosso-gold)] text-sm tracking-widest uppercase">
                Negócios Imobiliários
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em terrenos para incorporação, áreas para empresas e oportunidades estratégicas no mercado imobiliário.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-6 text-[var(--bosso-gold)]">Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Buscar imóveis
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-6 text-[var(--bosso-gold)]">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/terrenos-para-incorporacao" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Terrenos para Incorporação
                </Link>
              </li>
              <li>
                <Link to="/servicos/areas-para-empresas" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Áreas para Empresas
                </Link>
              </li>
              <li>
                <Link to="/servicos/analise-de-viabilidade" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Análise de Viabilidade
                </Link>
              </li>
              <li>
                <Link to="/servicos/oportunidades-off-market" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Off-Market
                </Link>
              </li>
              <li>
                <Link to="/servicos/advisory-imobiliario" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  Advisory Imobiliário
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-6 text-[var(--bosso-gold)]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--bosso-gold)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--bosso-gold)] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[var(--bosso-gold)] flex-shrink-0" />
                <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--bosso-gold)] flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mt-6">
              {companyInfo.social.instagram && (
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {companyInfo.social.linkedin && (
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {companyInfo.social.facebook && (
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--bosso-gold)] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>{companyInfo.copyright}</p>
              <span className="hidden md:inline">•</span>
              <p>{companyInfo.legalName}</p>
              <span className="hidden md:inline">•</span>
              <p>CNPJ: {companyInfo.cnpj}</p>
              {companyInfo.creci && (
                <>
                  <span className="hidden md:inline">•</span>
                  <p>{companyInfo.creci}</p>
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link to="/privacidade" className="hover:text-[var(--bosso-gold)] transition-colors">
                Privacidade
              </Link>
              <span>•</span>
              <Link to="/termos" className="hover:text-[var(--bosso-gold)] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[var(--bosso-gold)] text-[var(--bosso-black)] p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
