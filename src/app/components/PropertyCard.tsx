import { Link } from 'react-router';
import { Heart, MapPin, Maximize, DollarSign, TrendingUp, ExternalLink, Share2 } from 'lucide-react';
import { Property } from '../types';
import { useFavorites } from '../context/FavoritesContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from './ui/utils';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const formatPrice = (price?: number) => {
    if (!price) return 'Sob consulta';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatArea = (area?: number) => {
    if (!area) return null;
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(area);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(property.id);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.shortDescription,
        url: `/imovel/${property.slug}`,
      });
    }
  };

  return (
    <Link
      to={`/imovel/${property.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--bosso-warm-gray)] hover:border-[var(--bosso-gold)]"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bosso-sand)]">
        <img
          src={property.coverImage}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {property.featured && (
            <Badge className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] border-0">
              Destaque
            </Badge>
          )}
          {property.offMarket && (
            <Badge variant="secondary" className="bg-[var(--bosso-black)] text-white border-0">
              Off-Market
            </Badge>
          )}
          {property.exclusive && (
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              Exclusivo
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleShareClick}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            aria-label="Compartilhar"
          >
            <Share2 className="w-4 h-4 text-[var(--bosso-black)]" />
          </button>
          <button
            onClick={handleFavoriteClick}
            className={cn(
              'bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all',
              favorite && 'bg-[var(--bosso-gold)]'
            )}
            aria-label="Favoritar"
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-colors',
                favorite ? 'fill-[var(--bosso-black)] text-[var(--bosso-black)]' : 'text-[var(--bosso-black)]'
              )}
            />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-[var(--bosso-black)] border-0 capitalize">
            {property.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Reference */}
        <p className="text-xs text-[var(--bosso-graphite)] mb-1">Ref: {property.reference}</p>

        {/* Title */}
        <h3 className="font-semibold text-lg text-[var(--bosso-black)] mb-2 line-clamp-2 group-hover:text-[var(--bosso-gold)] transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-[var(--bosso-graphite)] mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">
            {property.neighborhood}, {property.city} - {property.state}
          </span>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[var(--bosso-warm-gray)]">
          {property.totalArea && (
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 text-[var(--bosso-gold)] flex-shrink-0" />
              <div>
                <p className="text-xs text-[var(--bosso-graphite)]">Área Total</p>
                <p className="text-sm font-semibold text-[var(--bosso-black)]">{formatArea(property.totalArea)} m²</p>
              </div>
            </div>
          )}
          {property.frontage && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[var(--bosso-gold)] flex-shrink-0" />
              <div>
                <p className="text-xs text-[var(--bosso-graphite)]">Testada</p>
                <p className="text-sm font-semibold text-[var(--bosso-black)]">{formatArea(property.frontage)} m</p>
              </div>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-[var(--bosso-gold)]" />
            <span className="text-xs text-[var(--bosso-graphite)]">Valor</span>
          </div>
          <p className="text-xl font-bold text-[var(--bosso-black)]">
            {property.priceOnRequest ? 'Sob Consulta' : formatPrice(property.price)}
          </p>
          {property.pricePerSqm && !property.priceOnRequest && (
            <p className="text-sm text-[var(--bosso-graphite)]">
              {formatPrice(property.pricePerSqm)}/m²
            </p>
          )}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          className="w-full border-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)] hover:text-[var(--bosso-black)] group-hover:bg-[var(--bosso-gold)] group-hover:text-[var(--bosso-black)]"
        >
          Ver detalhes
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Link>
  );
}
