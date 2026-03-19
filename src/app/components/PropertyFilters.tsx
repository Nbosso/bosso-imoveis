import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { SearchFilters } from '../types';
import { cn } from './ui/utils';

interface PropertyFiltersProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  onSearch: () => void;
  variant?: 'hero' | 'page';
}

export function PropertyFilters({ filters, onChange, onSearch, variant = 'page' }: PropertyFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (key: keyof SearchFilters, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const handleClear = () => {
    onChange({});
  };

  const isHero = variant === 'hero';

  return (
    <div className={cn(
      'w-full',
      isHero && 'bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6'
    )}>
      {/* Basic Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="lg:col-span-1">
          <Label htmlFor="category" className="text-sm mb-2 block">Tipo de Imóvel</Label>
          <Select value={filters.categories?.[0]} onValueChange={(value) => handleChange('categories', [value])}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="terreno">Terrenos</SelectItem>
              <SelectItem value="area">Áreas</SelectItem>
              <SelectItem value="galpao">Galpões</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="lg:col-span-1">
          <Label htmlFor="city" className="text-sm mb-2 block">Cidade</Label>
          <Select value={filters.cities?.[0]} onValueChange={(value) => handleChange('cities', [value])}>
            <SelectTrigger id="city">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="São Paulo">São Paulo</SelectItem>
              <SelectItem value="Barueri">Barueri</SelectItem>
              <SelectItem value="Jundiaí">Jundiaí</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="lg:col-span-1">
          <Label htmlFor="minArea" className="text-sm mb-2 block">Área Mínima (m²)</Label>
          <Input
            id="minArea"
            type="number"
            placeholder="Ex: 1000"
            value={filters.minArea || ''}
            onChange={(e) => handleChange('minArea', e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>

        <div className="lg:col-span-1">
          <Label htmlFor="maxPrice" className="text-sm mb-2 block">Valor Máximo</Label>
          <Input
            id="maxPrice"
            type="number"
            placeholder="Ex: 5000000"
            value={filters.maxPrice || ''}
            onChange={(e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-[var(--bosso-graphite)] hover:text-[var(--bosso-gold)]"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          {showAdvanced ? 'Ocultar filtros avançados' : 'Filtros avançados'}
        </Button>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-4 bg-[var(--bosso-sand)] rounded-lg">
          <div>
            <Label htmlFor="operation" className="text-sm mb-2 block">Operação</Label>
            <Select value={filters.operation?.[0]} onValueChange={(value) => handleChange('operation', [value])}>
              <SelectTrigger id="operation">
                <SelectValue placeholder="Todas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="venda">Venda</SelectItem>
                <SelectItem value="locacao">Locação</SelectItem>
                <SelectItem value="bts">BTS</SelectItem>
                <SelectItem value="permuta">Permuta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minFrontage" className="text-sm mb-2 block">Testada Mínima (m)</Label>
            <Input
              id="minFrontage"
              type="number"
              placeholder="Ex: 20"
              value={filters.minFrontage || ''}
              onChange={(e) => handleChange('minFrontage', e.target.value ? Number(e.target.value) : undefined)}
            />
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.featured || false}
                onChange={(e) => handleChange('featured', e.target.checked || undefined)}
                className="w-4 h-4 rounded border-gray-300 text-[var(--bosso-gold)] focus:ring-[var(--bosso-gold)]"
              />
              <span className="text-sm">Apenas destaques</span>
            </label>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onSearch}
          className="flex-1 bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90"
        >
          <Search className="w-4 h-4 mr-2" />
          Buscar imóveis
        </Button>
        <Button
          onClick={handleClear}
          variant="outline"
          className="border-[var(--bosso-graphite)] text-[var(--bosso-graphite)] hover:bg-[var(--bosso-sand)]"
        >
          <X className="w-4 h-4 mr-2" />
          Limpar filtros
        </Button>
      </div>
    </div>
  );
}
