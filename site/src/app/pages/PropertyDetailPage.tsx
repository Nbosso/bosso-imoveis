import { useParams, Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { Heart, Share2, MapPin, Maximize, TrendingUp, Building, FileText, Phone, MessageCircle, Download, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockProperties } from '../data/properties';
import { useFavorites } from '../context/FavoritesContext';
import { Button } from '../components/ui/button';
import { PropertyCard } from '../components/PropertyCard';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { cn } from '../components/ui/utils';

export function PropertyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = mockProperties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Imóvel não encontrado</h1>
          <Button asChild>
            <Link to="/imoveis">Voltar para listagem</Link>
          </Button>
        </div>
      </div>
    );
  }

  const favorite = isFavorite(property.id);
  const similarProperties = mockProperties.filter((p) => 
    p.id !== property.id && 
    (p.category === property.category || p.city === property.city)
  ).slice(0, 3);

  const formatPrice = (price?: number) => {
    if (!price) return 'Sob consulta';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatArea = (area?: number) => {
    if (!area) return null;
    return new Intl.NumberFormat('pt-BR').format(area);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[var(--bosso-off-white)] border-b border-[var(--bosso-warm-gray)]">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <nav className="flex items-center gap-2 text-sm text-[var(--bosso-graphite)]">
            <Link to="/" className="hover:text-[var(--bosso-gold)]">Início</Link>
            <span>/</span>
            <Link to="/imoveis" className="hover:text-[var(--bosso-gold)]">Imóveis</Link>
            <span>/</span>
            <span className="text-[var(--bosso-black)]">{property.reference}</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative aspect-[21/9] bg-[var(--bosso-black)]">
        <img
          src={property.gallery[currentImageIndex].url}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {property.gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--bosso-black)]/75 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {property.gallery.length}
            </div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {property.featured && (
                  <Badge className="bg-[var(--bosso-gold)] text-[var(--bosso-black)]">Destaque</Badge>
                )}
                {property.offMarket && (
                  <Badge variant="secondary" className="bg-[var(--bosso-black)] text-white">Off-Market</Badge>
                )}
                {property.exclusive && (
                  <Badge variant="outline">Exclusivo</Badge>
                )}
                <Badge variant="secondary" className="capitalize">{property.category}</Badge>
              </div>

              <p className="text-sm text-[var(--bosso-graphite)] mb-2">Ref: {property.reference}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)] mb-3">{property.title}</h1>
              {property.subtitle && (
                <p className="text-xl text-[var(--bosso-graphite)] mb-4">{property.subtitle}</p>
              )}

              <div className="flex items-center gap-2 text-[var(--bosso-graphite)] mb-6">
                <MapPin className="w-5 h-5" />
                <span>{property.neighborhood}, {property.city} - {property.state}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant={favorite ? 'default' : 'outline'}
                  onClick={() => toggleFavorite(property.id)}
                  className={cn(
                    favorite && 'bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90'
                  )}
                >
                  <Heart className={cn('w-4 h-4 mr-2', favorite && 'fill-current')} />
                  {favorite ? 'Favoritado' : 'Favoritar'}
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar PDF
                </Button>
              </div>
            </div>

            {/* Price and Key Metrics */}
            <div className="bg-[var(--bosso-sand)] rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[var(--bosso-graphite)] mb-1">Valor</p>
                  <p className="text-3xl font-bold text-[var(--bosso-black)]">
                    {property.priceOnRequest ? 'Sob Consulta' : formatPrice(property.price)}
                  </p>
                  {property.pricePerSqm && !property.priceOnRequest && (
                    <p className="text-[var(--bosso-graphite)] mt-1">{formatPrice(property.pricePerSqm)}/m²</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {property.totalArea && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Maximize className="w-4 h-4 text-[var(--bosso-gold)]" />
                        <p className="text-sm text-[var(--bosso-graphite)]">Área Total</p>
                      </div>
                      <p className="text-xl font-semibold">{formatArea(property.totalArea)} m²</p>
                    </div>
                  )}
                  {property.frontage && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-[var(--bosso-gold)]" />
                        <p className="text-sm text-[var(--bosso-graphite)]">Testada</p>
                      </div>
                      <p className="text-xl font-semibold">{formatArea(property.frontage)} m</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Descrição</h2>
              <div className="prose prose-lg max-w-none text-[var(--bosso-graphite)] leading-relaxed whitespace-pre-line">
                {property.longDescription}
              </div>
            </div>

            {/* Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Destaques</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {property.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--bosso-gold)] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[var(--bosso-graphite)]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Details */}
            {(property.zoning || property.buildingCoefficient) && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Informações Técnicas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.zoning && (
                    <div className="bg-[var(--bosso-off-white)] p-4 rounded-lg">
                      <p className="text-sm text-[var(--bosso-graphite)] mb-1">Zoneamento</p>
                      <p className="font-semibold">{property.zoning}</p>
                    </div>
                  )}
                  {property.buildingCoefficient && (
                    <div className="bg-[var(--bosso-off-white)] p-4 rounded-lg">
                      <p className="text-sm text-[var(--bosso-graphite)] mb-1">Coeficiente de Aproveitamento</p>
                      <p className="font-semibold">{property.buildingCoefficient}x</p>
                    </div>
                  )}
                  {property.buildingPotential && (
                    <div className="bg-[var(--bosso-off-white)] p-4 rounded-lg md:col-span-2">
                      <p className="text-sm text-[var(--bosso-graphite)] mb-1">Potencial Construtivo</p>
                      <p className="font-semibold">{property.buildingPotential}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Contact Form */}
              <div className="bg-white border-2 border-[var(--bosso-gold)] rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Interessado?</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome*</Label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail*</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone*</Label>
                    <Input id="phone" type="tel" placeholder="(11) 99999-9999" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Gostaria de mais informações..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>

                <div className="mt-4 pt-4 border-t border-[var(--bosso-warm-gray)]">
                  <Button asChild variant="outline" className="w-full border-[var(--bosso-gold)]">
                    <a href="https://wa.me/5511990000000" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-[var(--bosso-sand)] rounded-lg p-6">
                <h4 className="font-semibold mb-4">Informações Rápidas</h4>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--bosso-graphite)]">Referência:</dt>
                    <dd className="font-semibold">{property.reference}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--bosso-graphite)]">Operação:</dt>
                    <dd className="font-semibold capitalize">{property.operation}</dd>
                  </div>
                  {property.acceptsExchange && (
                    <div className="flex justify-between">
                      <dt className="text-[var(--bosso-graphite)]">Aceita Permuta:</dt>
                      <dd className="font-semibold">Sim</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Imóveis Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
