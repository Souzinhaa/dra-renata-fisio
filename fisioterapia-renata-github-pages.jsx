import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Shield, User, Zap, Clock, Heart, Leaf, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DraRenataFisioterapia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const profissional = {
    nome: 'Dra. Renata Almeida',
    crefito: '247581',
    especialidade: 'Fisioterapia Home Care',
    lema: 'Atendimento personalizado no conforto do seu lar!',
    descricao: 'Atendimento home care humanizado, com conforto, segurança e qualidade para todas as idades.'
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: 'Mais conforto',
      desc: 'Evite deslocamentos e receba o tratamento no conforto do seu lar.'
    },
    {
      icon: Shield,
      title: 'Mais segurança',
      desc: 'Ambiente familiar e seguro, reduzindo riscos de quedas e infecções.'
    },
    {
      icon: User,
      title: 'Atenção individualizada',
      desc: 'Tratamento 100% personalizado para suas necessidades.'
    },
    {
      icon: Zap,
      title: 'Recuperação eficaz',
      desc: 'Mais adesão ao tratamento e melhores resultados funcionais.'
    },
    {
      icon: Clock,
      title: 'Economia de tempo',
      desc: 'Atendimento no horário que melhor se adapta à sua rotina.'
    }
  ];

  const services = [
    {
      icon: '🦴',
      title: 'Fisioterapia Ortopédica',
      desc: 'Tratamento de dores musculares, lesões, pós-operatórios e reabilitação funcional.'
    },
    {
      icon: '🫀',
      title: 'Fisioterapia Geriátrica',
      desc: 'Prevenção de quedas, melhoria do equilíbrio, força, mobilidade e autonomia do idoso.'
    },
    {
      icon: '🧠',
      title: 'Fisioterapia Neurológica',
      desc: 'Reabilitação para AVC, Parkinson, Esclerose Múltipla, lesões medulares e outras condições neurológicas.'
    },
    {
      icon: '👶',
      title: 'Fisioterapia Pediátrica',
      desc: 'Acompanhamento do desenvolvimento motor, condições neurológicas e respiratórias em crianças.'
    },
    {
      icon: '💚',
      title: 'Fisioterapia Cardiorrespiratória',
      desc: 'Prevenção e reabilitação de condições cardíacas e pulmonares.'
    },
    {
      icon: '✨',
      title: 'Terapias Complementares',
      desc: 'Liberação miofascial, ventosoterapia, alongamentos e exercícios terapêuticos.'
    }
  ];

  const posgracoes = [
    'Fisioterapia Ortopédica e Traumatologia',
    'Fisioterapia Cardiorrespiratória',
    'Fisioterapia Dermatofuncional'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-full px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-teal-600 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-teal-600" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-light text-teal-700 tracking-widest uppercase">Fisioterapia</div>
              <div className="text-sm font-serif text-gray-800">Dra. Renata Almeida</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Início', 'Benefícios', 'Serviços', 'Contato'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-stone-200">
            <div className="px-4 py-3 space-y-2">
              {['Início', 'Benefícios', 'Serviços', 'Contato'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-stone-100 rounded transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="início" className="relative pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Professional Name & Title */}
          <div className="space-y-2 mb-6">
            <p className="text-base sm:text-lg text-teal-600 font-semibold tracking-wide">
              {profissional.nome}
            </p>
            <p className="text-sm sm:text-base text-teal-700 font-light uppercase tracking-widest">
              {profissional.especialidade}
            </p>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Fisioterapia que cuida de <span className="italic text-teal-600">você</span>, onde você <span className="italic text-teal-600">estiver</span>.
            </h1>
            
            {/* Quick Info Box */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <Home className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-800 font-light">{profissional.descricao}</p>
              </div>
            </div>

            {/* Three Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
                <User className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Atendimento<br />personalizado</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
                <Home className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Conforto do<br />seu lar</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Profissional<br />especializada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section id="benefícios" className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Benefícios</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
              Por que escolher a fisioterapia home care?
            </h2>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-6 sm:p-7 border border-stone-200 hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 font-light">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section id="serviços" className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Serviços</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
              Como posso te ajudar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200 hover:border-teal-300 transition-colors hover:shadow-md">
                <div className="flex gap-4">
                  <span className="text-4xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-700 font-light">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES SECTION */}
      <section id="especialidades" className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-7 sm:p-10 border border-teal-200 space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                Formação de Excelência
              </h2>
              <p className="text-base text-gray-800 font-light italic">
                "Atendimento humanizado, com ética, empatia e dedicação em cada detalhe do seu cuidado."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Pós-Graduações */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">Pós-Graduações</h3>
                <div className="space-y-3">
                  {posgracoes.map((esp, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <span className="text-lg font-serif font-bold text-teal-600 flex-shrink-0 group-hover:text-teal-700">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm text-gray-800 font-light pt-1">{esp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">Credenciais</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/50 rounded-lg p-4 border border-teal-100">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-800 font-light">Atendimento em Belo Horizonte e região metropolitana</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/50 rounded-lg p-4 border border-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-800 font-light">Profissional registrada com excelência e compromisso</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 border border-teal-100">
                    <p className="text-xs text-teal-700 font-light uppercase tracking-wide">Crefito {profissional.crefito}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
              Vamos cuidar de você?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-light">
              Entre em contato e agende seu atendimento.<br className="hidden sm:block" />Será um prazer te ajudar!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/5531987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all text-sm sm:text-base shadow-lg"
            >
              💬 FALAR NO WHATSAPP
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full font-semibold transition-all text-sm sm:text-base shadow-lg"
            >
              📷 ME ACOMPANHE NO INSTAGRAM
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Dicas, exercícios e muito mais!
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-700 text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Info */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg">{profissional.nome}</h3>
              <p className="text-sm text-teal-100 font-light">{profissional.especialidade}</p>
              <p className="text-xs text-teal-100">Crefito {profissional.crefito}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-teal-600"></div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-sm text-teal-100 font-light">© 2024 {profissional.nome}. Todos os direitos reservados.</p>
              <p className="text-xs text-teal-100">Cuidado de você é a nossa missão. ✨</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@300;400;500&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }

        body {
          font-family: 'Lora', serif;
        }

        @media (max-width: 768px) {
          section { scroll-margin-top: 56px; }
        }

        @media (min-width: 769px) {
          section { scroll-margin-top: 64px; }
        }
      `}</style>
    </div>
  );
}