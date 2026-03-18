import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyFilters } from '../components/PropertyFilters';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { SearchFilters } from '../types';
import { mockProperties } from '../data/properties';
import { LayoutGrid, List } from 'lucide-react';

export function PropertyListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [filters, setFilters] = useState<SearchFilters>(() => ({
    categories: searchParams.get('category') ? [searchParams.get('category') as any] : undefined,
    cities: searchParams.get('city') ? [searchParams.get('city')] : undefined,
    minArea: searchParams.get('minArea') ? Number(searchParams.get('minArea')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    featured: searchParams.get('featured') === 'true' ? true : undefined,
    sortBy: (searchParams.get('sort') as any) || 'relevance',
  }));

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.categories?.length) params.append('category', filters.categories[0]);
    if (filters.cities?.length) params.append('city', filters.cities[0]);
    if (filters.minArea) params.append('minArea', filters.minArea.toString());
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters.featured) params.append('featured', 'true');
    if (filters.sortBy) params.append('sort', filters.sortBy);
    setSearchParams(params);
  };

  const filteredProperties = useMemo(() => {
    let result = [...mockProperties];

    if (filters.categories?.length && filters.categories[0] !== 'all') {
      result = result.filter((p) => filters.categories!.includes(p.category));
    }

    if (filters.cities?.length && filters.cities[0] !== 'all') {
      result = result.filter((p) => filters.cities!.includes(p.city));
    }

    if (filters.minArea) {
      result = result.filter((p) => (p.totalArea || 0) >= filters.minArea!);
    }

    if (filters.maxPrice) {
      result = result.filter((p) => !p.price || p.price <= filters.maxPrice!);
    }

    if (filters.featured) {
      result = result.filter((p) => p.featured);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'recent':
        result.sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
        break;
      case 'area-desc':
        result.sort((a, b) => (b.totalArea || 0) - (a.totalArea || 0));
        break;
      case 'price-asc':
        result.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-[var(--bosso-off-white)] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--bosso-black)] mb-3">Buscar Imóveis</h1>
          <p className="text-[var(--bosso-graphite)] text-lg">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <PropertyFilters filters={filters} onChange={setFilters} onSearch={handleSearch} />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[var(--bosso-graphite)]">
              Exibindo <span className="font-semibold text-[var(--bosso-black)]">{filteredProperties.length}</span> resultado{filteredProperties.length !== 1 && 's'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select
              value={filters.sortBy}
              onValueChange={(value) => setFilters({ ...filters, sortBy: value as any })}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Mais relevantes</SelectItem>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="area-desc">Maior área</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="featured">Destaques</SelectItem>
              </SelectContent>
            </Select>

            <div className="hidden sm:flex items-center gap-2 border border-[var(--bosso-warm-gray)] rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-[var(--bosso-sand)]' : ''}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-[var(--bosso-sand)]' : ''}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[var(--bosso-graphite)] mb-4">Nenhum imóvel encontrado</p>
            <Button onClick={() => setFilters({})} variant="outline" className="border-[var(--bosso-gold)]">
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
