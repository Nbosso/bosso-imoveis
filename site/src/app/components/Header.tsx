import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Heart, Phone, MessageSquare, Home, Info, Briefcase, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { useFavorites } from '../context/FavoritesContext';
import { cn } from './ui/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { favoritesCount } = useFavorites();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/sobre', label: 'Sobre nós', icon: Info },
    { path: '/servicos', label: 'Serviços', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: FileText },
    { path: '/favoritos', label: 'Favoritos', icon: Heart, badge: favoritesCount },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--bosso-black)' }}>
                BOSSO
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--bosso-gold)' }}>
                Negócios Imobiliários
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-2 transition-colors relative group',
                    isActive(item.path)
                      ? 'text-[var(--bosso-gold)]'
                      : 'text-[var(--bosso-black)] hover:text-[var(--bosso-gold)]'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[var(--bosso-gold)] text-[var(--bosso-black)] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--bosso-gold)] transform origin-left transition-transform',
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)] hover:text-[var(--bosso-black)]"
            >
              <Link to="/contato">
                <MessageSquare className="w-4 h-4 mr-2" />
                Falar com especialista
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90"
            >
              <a href={`https://wa.me/5511990000000`} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link to="/favoritos" className="relative">
              <Heart className="w-6 h-6 text-[var(--bosso-black)]" />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--bosso-gold)] text-[var(--bosso-black)] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--bosso-black)]"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--bosso-warm-gray)]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 py-2 px-4 rounded-lg transition-colors',
                      isActive(item.path)
                        ? 'bg-[var(--bosso-sand)] text-[var(--bosso-gold)]'
                        : 'text-[var(--bosso-black)] hover:bg-[var(--bosso-sand)]'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="ml-auto bg-[var(--bosso-gold)] text-[var(--bosso-black)] text-xs rounded-full px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                variant="outline"
                className="w-full border-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)] hover:text-[var(--bosso-black)]"
                asChild
              >
                <Link to="/contato">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Falar com especialista
                </Link>
              </Button>
              <Button
                className="w-full bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90"
                asChild
              >
                <a href={`https://wa.me/5511990000000`} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
