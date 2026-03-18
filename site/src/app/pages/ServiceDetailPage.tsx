import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { mockServices } from '../data/services';
import { Button } from '../components/ui/button';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = mockServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
          <Button asChild>
            <Link to="/servicos">Voltar para serviços</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 26, 0.75)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-6 text-white hover:text-[var(--bosso-gold)]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-gray-200">{service.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--bosso-graphite)] text-lg leading-relaxed">{service.longDescription}</p>
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div className="bg-[var(--bosso-off-white)] rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Benefícios</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--bosso-gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--bosso-graphite)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.targetAudience && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Para quem é este serviço</h2>
              <p className="text-[var(--bosso-graphite)] text-lg">{service.targetAudience}</p>
            </div>
          )}

          {service.deliverables && service.deliverables.length > 0 && (
            <div className="bg-[var(--bosso-sand)] rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">O que entregamos</h2>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--bosso-gold)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--bosso-graphite)]">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center bg-white border-2 border-[var(--bosso-gold)] rounded-lg p-10">
            <h2 className="text-2xl font-bold mb-4">Interessado neste serviço?</h2>
            <p className="text-[var(--bosso-graphite)] mb-6">
              Entre em contato para saber como podemos ajudar
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
