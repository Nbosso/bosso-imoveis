import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bosso-off-white)]">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[var(--bosso-gold)] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[var(--bosso-black)] mb-4">Página não encontrada</h2>
        <p className="text-[var(--bosso-graphite)] text-lg mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar para o início
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-[var(--bosso-gold)]">
            <Link to="/imoveis">
              <Search className="w-4 h-4 mr-2" />
              Buscar imóveis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
