// Tipos principais do sistema Bosso

export interface Property {
  id: string;
  reference: string;
  title: string;
  subtitle?: string;
  slug: string;
  category: PropertyCategory;
  type: string;
  subtype?: string;
  profile?: string;
  tags: string[];
  featured: boolean;
  offMarket: boolean;
  exclusive: boolean;
  status: PropertyStatus;
  
  // Comercial
  operation: 'venda' | 'locacao' | 'bts' | 'permuta' | 'parceria';
  price?: number;
  pricePerSqm?: number;
  priceRange?: string;
  priceOnRequest: boolean;
  acceptsExchange: boolean;
  exchangePercentage?: number;
  acceptsFinancing: boolean;
  condominium?: number;
  iptu?: number;
  
  // Localização
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address?: string;
  number?: string;
  complement?: string;
  zipCode?: string;
  coordinates?: { lat: number; lng: number };
  hideAddress: boolean;
  logisticsDescription?: string;
  
  // Áreas e medidas
  totalArea?: number;
  privateArea?: number;
  usableArea?: number;
  builtArea?: number;
  landArea?: number;
  yardArea?: number;
  leasableArea?: number;
  frontage?: number;
  depth?: number;
  rightSide?: number;
  leftSide?: number;
  ceilingHeight?: number;
  docks?: number;
  parkingSpaces?: number;
  rooms?: number;
  offices?: number;
  bathrooms?: number;
  
  // Características físicas
  topography?: string;
  terrain?: string;
  solarOrientation?: string;
  corner: boolean;
  walled: boolean;
  fenced: boolean;
  pavement?: string;
  infrastructure?: string[];
  electricity: boolean;
  threePhase: boolean;
  water: boolean;
  sewer: boolean;
  gas: boolean;
  telecom: boolean;
  drainage: boolean;
  earthwork: boolean;
  propertyCondition?: string;
  age?: number;
  furnished: boolean;
  constructionStandard?: string;
  
  // Zoneamento e potencial
  zoning?: string;
  permittedUse?: string[];
  buildingCoefficient?: number;
  occupancyRate?: number;
  maxHeight?: number;
  setbacks?: string;
  taxDesignation?: string;
  buildingPotential?: string;
  preliminaryStudy?: string;
  suggestedTypology?: string;
  estimatedGSV?: number;
  projectedUsableArea?: number;
  propertyVocation?: string;
  btsAvailable: boolean;
  urbanRestrictions?: string;
  environmentalRestrictions?: string;
  environmentalLiability?: string;
  existingLicenses?: string[];
  feasibilityNotes?: string;
  
  // Documentação
  registered: boolean;
  recorded: boolean;
  regularRegistry: boolean;
  certificates?: string[];
  environmentalCompliance?: string;
  urbanCompliance?: string;
  ownershipStatus?: string;
  attachedDocuments?: string[];
  legalNotes?: string;
  
  // Mídia
  coverImage: string;
  gallery: PropertyMedia[];
  video?: string;
  droneVideo?: string;
  virtualTour?: string;
  floorPlan?: string[];
  sitePlan?: string[];
  map?: string;
  pdfTeaser?: string;
  pdfComplete?: string;
  presentation?: string;
  zoningImage?: string;
  sketch?: string;
  attachments?: string[];
  
  // Conteúdo
  shortDescription: string;
  longDescription: string;
  highlights?: string[];
  differentials?: string[];
  exchangeDescription?: string;
  technicalBlock?: string;
  locationDescription?: string;
  neighborhoodDescription?: string;
  cityDescription?: string;
  regionDescription?: string;
  relatedProperties?: string[];
  relatedArticles?: string[];
  customCTA?: string;
  faq?: FAQ[];
  legalNotice?: string;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  seoSlug?: string;
  ogImage?: string;
  canonical?: string;
  noIndex: boolean;
  
  // Sistema
  publishedAt?: Date;
  updatedAt?: Date;
  author?: string;
  editor?: string;
  broker?: string;
  capturer?: string;
  views: number;
  leads: number;
}

export type PropertyCategory = 'terreno' | 'area' | 'galpao' | 'comercial' | 'residencial' | 'rural' | 'industrial' | 'logistico';
export type PropertyStatus = 'draft' | 'review' | 'published' | 'archived' | 'sold' | 'rented';

export interface PropertyMedia {
  id: string;
  type: 'photo' | 'video' | 'drone' | 'floorplan' | 'map' | 'document';
  url: string;
  thumbnail?: string;
  caption?: string;
  order: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  coAuthors?: string[];
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  featuredOnHome: boolean;
  relatedProperties?: string[];
  relatedServices?: string[];
  relatedArticles?: string[];
  status: 'draft' | 'review' | 'published' | 'archived';
  publishedAt?: Date;
  updatedAt?: Date;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  canonical?: string;
  
  views: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  longDescription: string;
  benefits?: string[];
  targetAudience?: string;
  deliverables?: string[];
  icon?: string;
  image?: string;
  featured: boolean;
  faq?: FAQ[];
  relatedProperties?: string[];
  relatedArticles?: string[];
  cta?: string;
  order: number;
  active: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category?: string;
  description?: string;
  order: number;
  active: boolean;
  showOnHome: boolean;
}

export interface CompanyInfo {
  legalName: string;
  tradeName: string;
  cnpj: string;
  creci?: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  hours?: string;
  copyright: string;
}

export interface FilterOptions {
  regions?: string[];
  cities?: string[];
  neighborhoods?: string[];
  categories?: PropertyCategory[];
  types?: string[];
  profiles?: string[];
  minArea?: number;
  maxArea?: number;
  minPrice?: number;
  maxPrice?: number;
  minPricePerSqm?: number;
  maxPricePerSqm?: number;
  minFrontage?: number;
  zoning?: string[];
  operation?: string[];
  acceptsExchange?: boolean;
  offMarket?: boolean;
  featured?: boolean;
  registered?: boolean;
  btsAvailable?: boolean;
  searchTerm?: string;
}

export interface SearchFilters extends FilterOptions {
  sortBy?: 'relevance' | 'recent' | 'area-desc' | 'price-asc' | 'price-desc' | 'price-sqm-asc' | 'featured';
  page?: number;
  limit?: number;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  objective?: string;
  message?: string;
  propertyRef?: string;
  propertyTitle?: string;
  pageUrl?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  interestedInVisit?: boolean;
  interestedInStudy?: boolean;
  consent: boolean;
}
