import { Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    reference: 'TER-001',
    title: 'Terreno para Incorporação - Zona Mista',
    subtitle: 'Alto potencial construtivo em região valorizada',
    slug: 'terreno-incorporacao-zona-mista-jardins',
    category: 'terreno',
    type: 'Terreno Urbano',
    profile: 'Incorporação Residencial',
    tags: ['incorporação', 'alto padrão', 'zona mista', 'jardins'],
    featured: true,
    offMarket: false,
    exclusive: true,
    status: 'published',
    
    operation: 'venda',
    price: 12500000,
    pricePerSqm: 5000,
    priceOnRequest: false,
    acceptsExchange: true,
    exchangePercentage: 30,
    acceptsFinancing: true,
    
    country: 'Brasil',
    state: 'SP',
    city: 'São Paulo',
    neighborhood: 'Jardins',
    hideAddress: false,
    
    totalArea: 2500,
    frontage: 25,
    depth: 100,
    
    topography: 'Plano',
    corner: true,
    walled: true,
    fenced: false,
    pavement: 'Asfaltado',
    infrastructure: ['Água', 'Esgoto', 'Energia Trifásica', 'Gás', 'Fibra Ótica'],
    electricity: true,
    threePhase: true,
    water: true,
    sewer: true,
    gas: true,
    telecom: true,
    
    zoning: 'ZM-2',
    permittedUse: ['Residencial', 'Comercial', 'Serviços'],
    buildingCoefficient: 3.5,
    occupancyRate: 0.6,
    maxHeight: 48,
    buildingPotential: '8.750m² de área construída',
    suggestedTypology: 'Residencial Alto Padrão ou Uso Misto',
    estimatedGSV: 52500000,
    projectedUsableArea: 7000,
    propertyVocation: 'Incorporação residencial de médio/alto padrão',
    btsAvailable: false,
    
    registered: true,
    recorded: true,
    regularRegistry: true,
    certificates: ['Certidão Negativa de Débitos', 'Matrícula Atualizada'],
    
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        order: 1,
      },
      {
        id: '2',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        order: 2,
      },
    ],
    
    shortDescription: 'Terreno plano de 2.500m² em localização premium nos Jardins, com alto potencial construtivo e infraestrutura completa.',
    longDescription: `Excelente oportunidade de incorporação em uma das regiões mais valorizadas de São Paulo. 
    
    Terreno de 2.500m² perfeitamente plano, com 25m de frente e 100m de fundo, localizado em esquina privilegiada nos Jardins. 
    
    O imóvel está em zona mista ZM-2, permitindo coeficiente de aproveitamento de 3.5x, o que possibilita a construção de até 8.750m² de área total. Com taxa de ocupação de 60% e gabarito de até 48 metros, o terreno é ideal para empreendimentos residenciais de médio e alto padrão ou uso misto.
    
    Toda infraestrutura urbana disponível: água, esgoto, energia trifásica, gás encanado e fibra ótica. Documentação completamente regular, com matrícula atualizada e certidões negativas.
    
    Estudo preliminar de viabilidade indica potencial para VGV superior a R$ 52 milhões, com área útil privativa estimada em 7.000m².`,
    
    highlights: [
      'Localização premium nos Jardins',
      'Terreno plano de esquina com 2.500m²',
      'Alto coeficiente de aproveitamento (3.5x)',
      'Potencial construtivo de 8.750m²',
      'VGV estimado acima de R$ 52 milhões',
      'Documentação 100% regular',
      'Infraestrutura completa',
      'Aceita permuta de até 30%',
    ],
    
    neighborhoodDescription: 'Os Jardins representam uma das regiões mais nobres e valorizadas de São Paulo, com excelente infraestrutura comercial, gastronômica e de serviços.',
    
    metaTitle: 'Terreno para Incorporação nos Jardins - 2.500m² - Bosso Imóveis',
    metaDescription: 'Terreno de 2.500m² para incorporação nos Jardins, SP. Alto potencial construtivo, localização premium. Aceita permuta.',
    
    publishedAt: new Date('2026-03-15'),
    updatedAt: new Date('2026-03-18'),
    views: 342,
    leads: 18,
    noIndex: false,
  },
  
  {
    id: '2',
    reference: 'ARE-002',
    title: 'Área Industrial com Galpão Logístico',
    subtitle: 'Complexo logístico estratégico próximo a rodovias',
    slug: 'area-industrial-galpao-logistico-jundiai',
    category: 'area',
    type: 'Área Industrial',
    subtype: 'Logística',
    profile: 'Operação Logística',
    tags: ['logística', 'galpão', 'industrial', 'rodovia'],
    featured: true,
    offMarket: false,
    exclusive: false,
    status: 'published',
    
    operation: 'venda',
    price: 28000000,
    pricePerSqm: 1400,
    priceOnRequest: false,
    acceptsExchange: true,
    exchangePercentage: 20,
    acceptsFinancing: false,
    
    country: 'Brasil',
    state: 'SP',
    city: 'Jundiaí',
    neighborhood: 'Distrito Industrial',
    hideAddress: false,
    logisticsDescription: 'Acesso direto pela Rodovia Anhanguera (SP-330), a 5km do trevo de Jundiaí. Distância de 60km da capital.',
    
    totalArea: 20000,
    builtArea: 12000,
    yardArea: 8000,
    frontage: 80,
    ceilingHeight: 12,
    docks: 8,
    parkingSpaces: 50,
    
    topography: 'Plano',
    corner: false,
    walled: true,
    fenced: true,
    pavement: 'Concreto reforçado',
    infrastructure: ['Água', 'Esgoto', 'Energia Trifásica 380V', 'Telecom'],
    electricity: true,
    threePhase: true,
    water: true,
    sewer: true,
    telecom: true,
    propertyCondition: 'Excelente estado',
    age: 5,
    
    zoning: 'ZI-1',
    permittedUse: ['Industrial', 'Logística', 'Armazenagem'],
    
    registered: true,
    recorded: true,
    regularRegistry: true,
    environmentalCompliance: 'Licença de operação válida',
    
    coverImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop',
        order: 1,
      },
      {
        id: '2',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
        order: 2,
      },
    ],
    
    shortDescription: 'Complexo logístico de 20.000m² com galpão de 12.000m², 8 docas e localização estratégica em Jundiaí.',
    longDescription: `Oportunidade estratégica para operação logística de grande porte em Jundiaí, um dos principais polos logísticos do interior paulista.
    
    O complexo conta com 20.000m² de área total, sendo 12.000m² de galpão industrial/logístico e 8.000m² de pátio operacional. Galpão com pé-direito de 12 metros, estrutura metálica, piso de concreto reforçado e 8 docas niveladoras.
    
    Localização privilegiada com acesso direto pela Rodovia Anhanguera (SP-330), a apenas 5km do principal entroncamento viário de Jundiaí e 60km da capital paulista. Posicionamento estratégico para distribuição regional e nacional.
    
    Infraestrutura completa: energia trifásica 380V, sistema de combate a incêndio, câmeras de segurança, portaria 24h e 50 vagas de estacionamento. Toda documentação ambiental e urbanística regular, incluindo licença de operação válida.
    
    Imóvel em excelente estado de conservação, ideal para operadores logísticos, centros de distribuição, e-commerce ou indústrias que demandam espaço e acessibilidade.`,
    
    highlights: [
      'Localização estratégica em Jundiaí',
      'Acesso direto pela Rodovia Anhanguera',
      '12.000m² de galpão + 8.000m² de pátio',
      'Pé-direito de 12 metros',
      '8 docas niveladoras',
      'Energia trifásica 380V',
      'Documentação e licenças regulares',
      'Aceita permuta de até 20%',
    ],
    
    cityDescription: 'Jundiaí é um dos principais polos logísticos e industriais do Estado de São Paulo, com excelente malha viária e proximidade dos grandes centros consumidores.',
    
    metaTitle: 'Área Industrial Logística Jundiaí - 20.000m² - Bosso Imóveis',
    metaDescription: 'Complexo logístico em Jundiaí: 12.000m² de galpão, 8 docas, acesso pela Anhanguera. Ideal para CD e operações logísticas.',
    
    publishedAt: new Date('2026-03-10'),
    updatedAt: new Date('2026-03-17'),
    views: 568,
    leads: 24,
    noIndex: false,
  },
  
  {
    id: '3',
    reference: 'TER-003',
    title: 'Terreno Estratégico para BTS Comercial',
    subtitle: 'Oportunidade para desenvolvimento customizado',
    slug: 'terreno-bts-comercial-alphaville',
    category: 'terreno',
    type: 'Terreno Comercial',
    profile: 'Build to Suit',
    tags: ['bts', 'comercial', 'alphaville', 'corporativo'],
    featured: true,
    offMarket: false,
    exclusive: true,
    status: 'published',
    
    operation: 'bts',
    price: 8500000,
    pricePerSqm: 3400,
    priceOnRequest: false,
    acceptsExchange: false,
    acceptsFinancing: false,
    
    country: 'Brasil',
    state: 'SP',
    city: 'Barueri',
    neighborhood: 'Alphaville Industrial',
    hideAddress: false,
    
    totalArea: 2500,
    frontage: 50,
    depth: 50,
    
    topography: 'Plano',
    corner: true,
    walled: false,
    fenced: false,
    pavement: 'Asfaltado',
    infrastructure: ['Água', 'Esgoto', 'Energia Trifásica', 'Gás', 'Fibra Ótica'],
    electricity: true,
    threePhase: true,
    water: true,
    sewer: true,
    gas: true,
    telecom: true,
    
    zoning: 'ZCS',
    permittedUse: ['Comercial', 'Serviços', 'Institucional'],
    buildingCoefficient: 2.5,
    occupancyRate: 0.5,
    maxHeight: 28,
    buildingPotential: '6.250m² de área construída',
    suggestedTypology: 'Edifício Corporativo ou Centro de Serviços',
    propertyVocation: 'Build to Suit para operações corporativas',
    btsAvailable: true,
    
    registered: true,
    recorded: true,
    regularRegistry: true,
    
    coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
        order: 1,
      },
      {
        id: '2',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
        order: 2,
      },
    ],
    
    shortDescription: 'Terreno de 2.500m² em Alphaville, ideal para BTS corporativo. Localização premium com infraestrutura completa.',
    longDescription: `Terreno corporativo estratégico em Alphaville Industrial, posicionado para operações Build to Suit de empresas que buscam sede própria ou centro de operações customizado.
    
    Área de 2.500m² perfeitamente plana, em esquina privilegiada com 50m de frente, oferecendo excelente visibilidade e acessibilidade. Zoneamento ZCS permite coeficiente de aproveitamento de 2.5x, viabilizando até 6.250m² de construção.
    
    Localização premium em Alphaville, região consolidada como polo corporativo e empresarial, com acesso facilitado às principais rodovias (Castelo Branco e Rodoanel), próximo a hotéis, restaurantes e serviços executivos.
    
    Infraestrutura urbana completa disponível no local. Toda documentação regular e pronta para aprovação de projetos.
    
    Ideal para empresas que desejam construir sede própria sob medida, centros de serviços compartilhados, institutos de ensino ou operações corporativas que valorizem localização estratégica e flexibilidade construtiva.
    
    Bosso oferece serviço completo de estruturação da operação BTS, incluindo análise de viabilidade, aprovações e acompanhamento de obra.`,
    
    highlights: [
      'Localização premium em Alphaville',
      'Terreno plano de esquina - 2.500m²',
      'Ideal para Build to Suit corporativo',
      'Potencial de 6.250m² de área construída',
      'Acesso facilitado a rodovias principais',
      'Infraestrutura completa',
      'Documentação 100% regular',
      'Acompanhamento Bosso na estruturação BTS',
    ],
    
    neighborhoodDescription: 'Alphaville é reconhecido nacionalmente como um dos principais polos empresariais do Brasil, concentrando sedes de multinacionais e empresas de tecnologia.',
    
    metaTitle: 'Terreno BTS Alphaville - 2.500m² - Build to Suit - Bosso',
    metaDescription: 'Terreno para BTS em Alphaville: 2.500m², localização corporativa premium. Ideal para sede própria customizada.',
    
    publishedAt: new Date('2026-03-12'),
    updatedAt: new Date('2026-03-18'),
    views: 287,
    leads: 15,
    noIndex: false,
  },
  
  {
    id: '4',
    reference: 'TER-004',
    title: 'Terreno Urbano - Uso Misto',
    subtitle: 'Região em expansão com alta demanda',
    slug: 'terreno-uso-misto-vila-mariana',
    category: 'terreno',
    type: 'Terreno Urbano',
    profile: 'Uso Misto',
    tags: ['uso misto', 'vila mariana', 'incorporação'],
    featured: false,
    offMarket: false,
    exclusive: false,
    status: 'published',
    
    operation: 'venda',
    price: 4200000,
    pricePerSqm: 4200,
    priceOnRequest: false,
    acceptsExchange: true,
    exchangePercentage: 25,
    acceptsFinancing: true,
    
    country: 'Brasil',
    state: 'SP',
    city: 'São Paulo',
    neighborhood: 'Vila Mariana',
    hideAddress: false,
    
    totalArea: 1000,
    frontage: 20,
    depth: 50,
    
    topography: 'Plano',
    corner: false,
    walled: true,
    fenced: false,
    pavement: 'Asfaltado',
    electricity: true,
    water: true,
    sewer: true,
    
    zoning: 'ZM-3',
    buildingCoefficient: 2.5,
    occupancyRate: 0.5,
    
    registered: true,
    recorded: true,
    
    coverImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=800&fit=crop',
        order: 1,
      },
    ],
    
    shortDescription: 'Terreno de 1.000m² na Vila Mariana, zona mista com bom potencial construtivo.',
    longDescription: 'Terreno plano de 1.000m² em região consolidada da Vila Mariana. Zoneamento misto permite desenvolvimento residencial ou comercial. Ótima oportunidade para incorporação de médio porte.',
    
    highlights: [
      'Localização Vila Mariana',
      '1.000m² de área total',
      'Terreno plano',
      'Aceita permuta de até 25%',
    ],
    
    publishedAt: new Date('2026-03-08'),
    updatedAt: new Date('2026-03-16'),
    views: 156,
    leads: 7,
    noIndex: false,
  },
  
  {
    id: '5',
    reference: 'ARE-005',
    title: 'Área Comercial de Esquina',
    subtitle: 'Alto fluxo e visibilidade',
    slug: 'area-comercial-esquina-pinheiros',
    category: 'area',
    type: 'Área Comercial',
    profile: 'Comércio e Serviços',
    tags: ['comercial', 'esquina', 'pinheiros', 'alto fluxo'],
    featured: false,
    offMarket: false,
    exclusive: true,
    status: 'published',
    
    operation: 'venda',
    price: 6800000,
    pricePerSqm: 8500,
    priceOnRequest: false,
    acceptsExchange: false,
    acceptsFinancing: true,
    
    country: 'Brasil',
    state: 'SP',
    city: 'São Paulo',
    neighborhood: 'Pinheiros',
    hideAddress: false,
    
    totalArea: 800,
    builtArea: 500,
    frontage: 15,
    
    corner: true,
    walled: true,
    pavement: 'Asfaltado',
    electricity: true,
    water: true,
    sewer: true,
    gas: true,
    
    registered: true,
    recorded: true,
    
    coverImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop',
        order: 1,
      },
    ],
    
    shortDescription: 'Área comercial de 800m² em esquina movimentada de Pinheiros. Alto fluxo e visibilidade.',
    longDescription: 'Excelente ponto comercial em Pinheiros, localizado em esquina de alto fluxo. Área total de 800m² com 500m² de construção existente. Ideal para comércio, serviços ou food service. Região consolidada com forte vocação comercial.',
    
    highlights: [
      'Esquina movimentada em Pinheiros',
      '800m² de área total',
      'Alto fluxo de pedestres e veículos',
      'Documentação regular',
    ],
    
    publishedAt: new Date('2026-03-05'),
    updatedAt: new Date('2026-03-15'),
    views: 223,
    leads: 11,
    noIndex: false,
  },
  
  {
    id: '6',
    reference: 'TER-006',
    title: 'Terreno Off-Market - Oportunidade Exclusiva',
    subtitle: 'Localização privilegiada em região nobre',
    slug: 'terreno-off-market-exclusivo',
    category: 'terreno',
    type: 'Terreno Urbano',
    profile: 'Incorporação',
    tags: ['off-market', 'exclusivo', 'incorporação'],
    featured: false,
    offMarket: true,
    exclusive: true,
    status: 'published',
    
    operation: 'venda',
    priceOnRequest: true,
    acceptsExchange: true,
    acceptsFinancing: false,
    
    country: 'Brasil',
    state: 'SP',
    city: 'São Paulo',
    neighborhood: 'Sob Consulta',
    hideAddress: true,
    
    totalArea: 3500,
    
    topography: 'Plano',
    corner: true,
    
    registered: true,
    
    coverImage: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop',
    gallery: [
      {
        id: '1',
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop',
        order: 1,
      },
    ],
    
    shortDescription: 'Oportunidade off-market em localização privilegiada. Informações mediante cadastro e assinatura de NDA.',
    longDescription: `Oportunidade exclusiva e confidencial de aquisição de terreno premium em região nobre de São Paulo.
    
    Por se tratar de operação off-market, informações detalhadas sobre localização, valores e características técnicas são fornecidas apenas após:
    - Cadastro e qualificação do interessado
    - Assinatura de termo de confidencialidade (NDA)
    - Validação de capacidade financeira
    
    Entre em contato com nossos especialistas para mais informações.`,
    
    highlights: [
      'Oportunidade off-market exclusiva',
      'Localização premium',
      'Alto potencial de valorização',
      'Informações sob NDA',
    ],
    
    publishedAt: new Date('2026-03-14'),
    updatedAt: new Date('2026-03-18'),
    views: 89,
    leads: 12,
    noIndex: true,
  },
];
