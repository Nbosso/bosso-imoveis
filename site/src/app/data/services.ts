import { Service } from '../types';

export const mockServices: Service[] = [
  {
    id: '1',
    slug: 'terrenos-para-incorporacao',
    title: 'Terrenos para Incorporação',
    subtitle: 'Curadoria especializada de terrenos com alto potencial construtivo',
    shortDescription: 'Prospecção e análise de terrenos estratégicos para incorporação imobiliária',
    longDescription: `A Bosso oferece serviço completo de prospecção e análise de terrenos para incorporadoras e investidores que buscam oportunidades de desenvolvimento imobiliário.

Nossa expertise inclui análise detalhada de potencial construtivo, viabilidade urbanística, estudos de mercado e projeção de VGV.

Trabalhamos com um pipeline exclusivo de oportunidades on e off-market, identificando terrenos que atendam aos critérios específicos de cada cliente.`,
    
    benefits: [
      'Acesso a oportunidades exclusivas e off-market',
      'Análise técnica completa de viabilidade',
      'Estudo preliminar de massa e produto',
      'Projeção de VGV e análise de retorno',
      'Acompanhamento em todo processo de aquisição',
      'Network com proprietários e corretores especializados',
    ],
    
    targetAudience: 'Incorporadoras, construtoras, fundos de investimento e investidores',
    
    deliverables: [
      'Curadoria de terrenos alinhados ao perfil do cliente',
      'Análise de indicadores urbanísticos',
      'Estudo preliminar de viabilidade',
      'Projeção de VGV e análise financeira',
      'Suporte na negociação',
    ],
    
    featured: true,
    order: 1,
    active: true,
  },
  
  {
    id: '2',
    slug: 'areas-para-empresas',
    title: 'Áreas para Empresas',
    subtitle: 'Soluções imobiliárias para operações industriais, logísticas e corporativas',
    shortDescription: 'Prospecção de áreas e imóveis estratégicos para expansão empresarial',
    longDescription: `Auxiliamos empresas na identificação e aquisição de áreas para operações industriais, centros de distribuição, sedes corporativas e projetos Build to Suit.

Nossa consultoria considera aspectos logísticos, urbanísticos, fiscais e operacionais para garantir que a localização escolhida atenda plenamente às necessidades do negócio.

Temos experiência em atender desde startups em expansão até multinacionais estabelecendo novas unidades.`,
    
    benefits: [
      'Análise de localização considerando logística e operação',
      'Avaliação de infraestrutura e utilidades disponíveis',
      'Análise de zoneamento e licenciamento',
      'Comparativo de alternativas',
      'Negociação e estruturação da aquisição ou locação',
      'Apoio em operações Build to Suit',
    ],
    
    targetAudience: 'Indústrias, operadores logísticos, redes de varejo, empresas em expansão',
    
    deliverables: [
      'Mapeamento de áreas disponíveis',
      'Análise comparativa de localizações',
      'Estudo de viabilidade técnica e operacional',
      'Projeção de custos e retorno',
      'Estruturação da operação',
    ],
    
    featured: true,
    order: 2,
    active: true,
  },
  
  {
    id: '3',
    slug: 'analise-de-viabilidade',
    title: 'Análise de Viabilidade',
    subtitle: 'Estudos técnicos e econômicos para tomada de decisão',
    shortDescription: 'Análise completa de viabilidade técnica, urbanística e econômica',
    longDescription: `Oferecemos estudos aprofundados de viabilidade para terrenos e empreendimentos, combinando análise urbanística, estudo de massa, análise de mercado e projeções financeiras.

Nossos estudos fornecem todas as informações necessárias para uma tomada de decisão segura e fundamentada.`,
    
    benefits: [
      'Análise de indicadores urbanísticos',
      'Estudo de massa preliminar',
      'Análise de mercado e concorrência',
      'Projeção de VGV',
      'Análise de custos de construção',
      'Projeção de retorno sobre investimento',
    ],
    
    targetAudience: 'Incorporadoras, investidores, empresas',
    
    deliverables: [
      'Relatório completo de viabilidade',
      'Estudo de massa',
      'Análise financeira',
      'Projeção de VGV',
      'Recomendações estratégicas',
    ],
    
    featured: true,
    order: 3,
    active: true,
  },
  
  {
    id: '4',
    slug: 'oportunidades-off-market',
    title: 'Oportunidades Off-Market',
    subtitle: 'Acesso a imóveis e terrenos fora do mercado tradicional',
    shortDescription: 'Prospecção e intermediação de oportunidades exclusivas não divulgadas',
    longDescription: `Operamos uma rede exclusiva de oportunidades off-market, conectando vendedores que buscam discrição com compradores qualificados.

Essas oportunidades geralmente oferecem condições diferenciadas por não estarem expostas ao mercado aberto.`,
    
    benefits: [
      'Acesso a oportunidades exclusivas',
      'Menor competição com outros compradores',
      'Possibilidade de condições diferenciadas',
      'Processo discreto e confidencial',
      'Curadoria prévia da oportunidade',
    ],
    
    targetAudience: 'Investidores, incorporadoras, family offices',
    
    featured: true,
    order: 4,
    active: true,
  },
  
  {
    id: '5',
    slug: 'advisory-imobiliario',
    title: 'Advisory Imobiliário',
    subtitle: 'Consultoria estratégica para decisões imobiliárias',
    shortDescription: 'Assessoria completa em estratégia imobiliária e patrimonial',
    longDescription: `Consultoria estratégica para empresas e investidores que buscam otimizar seu portfólio imobiliário, estruturar operações complexas ou definir estratégias de expansão.

Atuamos como parceiro estratégico de longo prazo, oferecendo visão de mercado, inteligência de dados e execução.`,
    
    benefits: [
      'Visão estratégica de mercado',
      'Análise de portfólio',
      'Estruturação de operações complexas',
      'Planejamento de expansão',
      'Inteligência de mercado',
      'Network e relacionamento',
    ],
    
    targetAudience: 'Empresas, investidores institucionais, family offices',
    
    featured: true,
    order: 5,
    active: true,
  },
  
  {
    id: '6',
    slug: 'gestao-patrimonial',
    title: 'Gestão Patrimonial Imobiliária',
    subtitle: 'Administração e valorização de portfólios imobiliários',
    shortDescription: 'Gestão ativa de ativos imobiliários para maximização de retorno',
    longDescription: `Gerenciamos portfólios imobiliários com foco na maximização de retorno, incluindo estratégias de locação, venda, desenvolvimento e valorização.

Ideal para investidores que possuem múltiplos ativos e buscam gestão profissional.`,
    
    benefits: [
      'Gestão ativa do portfólio',
      'Estratégias de valorização',
      'Análise de oportunidades de otimização',
      'Acompanhamento de mercado',
      'Relatórios periódicos',
      'Suporte em decisões estratégicas',
    ],
    
    targetAudience: 'Investidores, family offices, fundos',
    
    featured: false,
    order: 6,
    active: true,
  },
];
