import { Building2, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre a Bosso</h1>
            <p className="text-xl text-gray-200">
              Especialistas em negócios imobiliários estratégicos
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-[var(--bosso-graphite)] text-lg leading-relaxed mb-6">
              A <strong>Bosso Negócios Imobiliários</strong> é especializada em terrenos para incorporação, áreas para empresas e oportunidades estratégicas no mercado imobiliário.
            </p>
            <p className="text-[var(--bosso-graphite)] text-lg leading-relaxed mb-6">
              Com profundo conhecimento de mercado e análise técnica rigorosa, conectamos investidores, incorporadoras e empresas às melhores oportunidades imobiliárias, oferecendo inteligência de negócio e suporte completo em todas as etapas.
            </p>
            <p className="text-[var(--bosso-graphite)] text-lg leading-relaxed">
              Nossa atuação é pautada por <strong>transparência, expertise técnica e visão estratégica</strong>, garantindo que cada cliente tome decisões fundamentadas e seguras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[var(--bosso-sand)] p-8 rounded-lg">
              <Target className="w-12 h-12 text-[var(--bosso-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-[var(--bosso-graphite)]">
                Conectar oportunidades imobiliárias estratégicas a investidores e empresas, com inteligência de mercado, análise técnica e consultoria especializada.
              </p>
            </div>

            <div className="bg-[var(--bosso-sand)] p-8 rounded-lg">
              <TrendingUp className="w-12 h-12 text-[var(--bosso-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossa Visão</h3>
              <p className="text-[var(--bosso-graphite)]">
                Ser referência nacional em negócios imobiliários estratégicos, reconhecida pela qualidade técnica e pela geração de valor aos nossos clientes.
              </p>
            </div>
          </div>

          <div className="bg-[var(--bosso-off-white)] rounded-lg p-10 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Diferenciais Bosso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Building2 className="w-10 h-10 text-[var(--bosso-gold)] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Análise Técnica Completa</h4>
                <p className="text-sm text-[var(--bosso-graphite)]">
                  Estudos de viabilidade, análise urbanística e projeção de VGV
                </p>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-[var(--bosso-gold)] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Oportunidades Exclusivas</h4>
                <p className="text-sm text-[var(--bosso-graphite)]">
                  Acesso a imóveis off-market e oportunidades não divulgadas
                </p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-[var(--bosso-gold)] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Consultoria Especializada</h4>
                <p className="text-sm text-[var(--bosso-graphite)]">
                  Suporte completo desde a prospecção até o fechamento
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Vamos conversar?</h2>
            <p className="text-[var(--bosso-graphite)] mb-6">
              Entre em contato para saber como podemos ajudar em seu próximo negócio
            </p>
            <Button asChild size="lg" className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
              <Link to="/contato">Falar com especialista</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
