import { Link } from 'react-router';
import { useFavorites } from '../context/FavoritesContext';
import { mockProperties } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { Heart } from 'lucide-react';

export function FavoritesPage() {
  const { favorites, clearFavorites, favoritesCount } = useFavorites();
  
  const favoriteProperties = mockProperties.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[var(--bosso-off-white)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)] mb-2">Imóveis Favoritos</h1>
              <p className="text-[var(--bosso-graphite)] text-lg">
                Você tem {favoritesCount} {favoritesCount === 1 ? 'imóvel favoritado' : 'imóveis favoritados'}
              </p>
            </div>
            {favoritesCount > 0 && (
              <Button variant="outline" onClick={clearFavorites} className="border-[var(--bosso-graphite)]">
                Limpar todos
              </Button>
            )}
          </div>

          {favoriteProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-[var(--bosso-warm-gray)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[var(--bosso-black)] mb-2">Nenhum imóvel favoritado</h2>
              <p className="text-[var(--bosso-graphite)] mb-6">
                Comece a favoritar imóveis para acessá-los rapidamente depois
              </p>
              <Button asChild className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
                <Link to="/imoveis">Buscar imóveis</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
