import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, Building2, Landmark, TrendingUp, MessageCircle, FileText, Award } from 'lucide-react';
import { PropertyFilters } from '../components/PropertyFilters';
import { PropertyCard } from '../components/PropertyCard';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/ui/button';
import { SearchFilters } from '../types';
import { mockProperties } from '../data/properties';
import { mockBlogPosts } from '../data/blog';
import { mockServices } from '../data/services';
import { mockPartners } from '../data/partners';

export function HomePage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.categories?.length) params.append('category', filters.categories[0]);
    if (filters.cities?.length) params.append('city', filters.cities[0]);
    if (filters.minArea) params.append('minArea', filters.minArea.toString());
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    navigate(`/imoveis?${params.toString()}`);
  };

  const featuredProperties = mockProperties.filter((p) => p.featured).slice(0, 3);
  const terrenos = mockProperties.filter((p) => p.category === 'terreno').slice(0, 3);
  const areas = mockProperties.filter((p) => p.category === 'area').slice(0, 3);
  const featuredPosts = mockBlogPosts.filter((p) => p.featuredOnHome);
  const featuredServices = mockServices.filter((s) => s.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 26, 0.75)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terrenos e Áreas
              <span className="block text-[var(--bosso-gold)]">para Grandes Negócios</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Especialistas em terrenos para incorporação, áreas empresariais e oportunidades estratégicas com análise técnica completa e inteligência de mercado.
            </p>
          </div>

          {/* Search Filters */}
          <div className="max-w-5xl mx-auto">
            <PropertyFilters filters={filters} onChange={setFilters} onSearch={handleSearch} variant="hero" />
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)] mb-3">
                Imóveis em Destaque
              </h2>
              <p className="text-[var(--bosso-graphite)] text-lg">
                Oportunidades selecionadas com alto potencial
              </p>
            </div>
            <Button asChild variant="outline" className="border-[var(--bosso-gold)] hidden md:flex">
              <Link to="/imoveis?featured=true">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-[var(--bosso-gold)]">
              <Link to="/imoveis?featured=true">
                Ver todos os destaques
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Terrenos */}
      <section className="py-20 bg-[var(--bosso-off-white)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Landmark className="w-8 h-8 text-[var(--bosso-gold)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)]">Terrenos</h2>
              </div>
              <p className="text-[var(--bosso-graphite)] text-lg">
                Terrenos estratégicos para incorporação imobiliária
              </p>
            </div>
            <Button asChild variant="outline" className="border-[var(--bosso-gold)] hidden md:flex">
              <Link to="/imoveis?category=terreno">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terrenos.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-[var(--bosso-gold)]">
              <Link to="/imoveis?category=terreno">
                Ver todos os terrenos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-8 h-8 text-[var(--bosso-gold)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)]">Áreas para Empresas</h2>
              </div>
              <p className="text-[var(--bosso-graphite)] text-lg">
                Espaços estratégicos para operações industriais e logísticas
              </p>
            </div>
            <Button asChild variant="outline" className="border-[var(--bosso-gold)] hidden md:flex">
              <Link to="/imoveis?category=area">
                Ver todas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-[var(--bosso-gold)]">
              <Link to="/imoveis?category=area">
                Ver todas as áreas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-[var(--bosso-sand)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)] mb-4">Nossos Serviços</h2>
            <p className="text-[var(--bosso-graphite)] text-lg">
              Consultoria completa para incorporadoras, investidores e empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                to={`/servicos/${service.slug}`}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all border border-[var(--bosso-warm-gray)] hover:border-[var(--bosso-gold)]"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--bosso-sand)] rounded-lg mb-6 group-hover:bg-[var(--bosso-gold)] transition-colors">
                  <TrendingUp className="w-8 h-8 text-[var(--bosso-gold)] group-hover:text-[var(--bosso-black)] transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[var(--bosso-black)] group-hover:text-[var(--bosso-gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--bosso-graphite)] mb-4 leading-relaxed">{service.shortDescription}</p>
                <div className="flex items-center gap-2 text-[var(--bosso-gold)] font-semibold group-hover:gap-3 transition-all">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[var(--bosso-gold)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)]">Empresas Parceiras</h2>
            </div>
            <p className="text-[var(--bosso-graphite)] text-lg">
              Confiam na Bosso para seus negócios imobiliários
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {mockPartners.filter((p) => p.showOnHome).map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Conteúdos */}
      <section className="py-20 bg-[var(--bosso-off-white)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-8 h-8 text-[var(--bosso-gold)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)]">Conteúdos</h2>
              </div>
              <p className="text-[var(--bosso-graphite)] text-lg">
                Inteligência de mercado e análises estratégicas
              </p>
            </div>
            <Button asChild variant="outline" className="border-[var(--bosso-gold)] hidden md:flex">
              <Link to="/blog">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            {featuredPosts.slice(0, 1).map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(1, 4).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-[var(--bosso-gold)]">
              <Link to="/blog">
                Ver todos os conteúdos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para Encontrar a
              <span className="block text-[var(--bosso-gold)]">Oportunidade Ideal?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Fale com nossos especialistas e receba uma curadoria personalizada de imóveis e terrenos alinhados aos seus objetivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com especialista
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--bosso-black)]">
                <Link to="/imoveis">
                  <Building2 className="w-5 h-5 mr-2" />
                  Buscar imóveis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
