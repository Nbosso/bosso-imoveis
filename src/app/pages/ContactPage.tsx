import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { companyInfo } from '../data/company';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bosso-off-white)]">
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fale Conosco</h1>
            <p className="text-xl text-gray-200">
              Estamos prontos para atender você. Entre em contato pelos canais abaixo ou preencha o formulário.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--bosso-gold)] p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-[var(--bosso-black)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-[var(--bosso-graphite)] text-sm">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[var(--bosso-gold)] p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-[var(--bosso-black)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <a href={`tel:${companyInfo.phone}`} className="text-[var(--bosso-graphite)] text-sm hover:text-[var(--bosso-gold)]">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[var(--bosso-gold)] p-3 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-[var(--bosso-black)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--bosso-graphite)] text-sm hover:text-[var(--bosso-gold)]"
                    >
                      {companyInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[var(--bosso-gold)] p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-[var(--bosso-black)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-[var(--bosso-graphite)] text-sm hover:text-[var(--bosso-gold)]">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {companyInfo.hours && (
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--bosso-gold)] p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-[var(--bosso-black)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Horário</h4>
                      <p className="text-[var(--bosso-graphite)] text-sm">{companyInfo.hours}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[var(--bosso-sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-3">Atendimento Rápido</h3>
              <p className="text-sm text-[var(--bosso-graphite)] mb-4">
                Prefere falar diretamente? Clique no botão abaixo para iniciar uma conversa no WhatsApp.
              </p>
              <Button asChild className="w-full bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
                <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[var(--bosso-warm-gray)]">
              <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome completo*</Label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail*</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefone*</Label>
                    <Input id="phone" type="tel" placeholder="(11) 99999-9999" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Assunto*</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terreno">Terreno para incorporação</SelectItem>
                      <SelectItem value="area">Área para empresa</SelectItem>
                      <SelectItem value="viabilidade">Análise de viabilidade</SelectItem>
                      <SelectItem value="consultoria">Consultoria</SelectItem>
                      <SelectItem value="vender">Quero vender um imóvel</SelectItem>
                      <SelectItem value="outro">Outro assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem*</Label>
                  <Textarea id="message" placeholder="Conte-nos como podemos ajudar..." rows={6} required />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-1" />
                  <Label htmlFor="consent" className="text-sm text-[var(--bosso-graphite)] font-normal cursor-pointer">
                    Concordo com o tratamento dos meus dados conforme a LGPD e autorizo o contato da Bosso.
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90" size="lg">
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
