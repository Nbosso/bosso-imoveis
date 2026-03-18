import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { mockServices } from '../data/services';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-200">
              Consultoria completa para incorporadoras, investidores e empresas
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 max-w-6xl mx-auto">
          {mockServices.filter((s) => s.active).map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-[var(--bosso-black)] mb-3">{service.title}</h2>
                <p className="text-[var(--bosso-graphite)] text-lg mb-6">{service.subtitle}</p>
                <p className="text-[var(--bosso-graphite)] mb-6">{service.longDescription}</p>
                
                {service.benefits && service.benefits.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Benefícios:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[var(--bosso-gold)] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[var(--bosso-graphite)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to={`/servicos/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--bosso-gold)] font-semibold hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="aspect-[4/3] bg-[var(--bosso-sand)] rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1454165804606-c3d57bc86b40' : '1560518883-ce09059eeffa'}?w=800&h=600&fit=crop`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
