import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  BarChart3, 
  Brain, 
  Image as ImageIcon, 
  Lightbulb,
  Database,
  GraduationCap,
  ChevronRight,
  MessageSquare,
  Clock,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Menu,
  X,
  Users,
  Share2,
  Target,
  ArrowUp
} from 'lucide-react';
import BrunoContact from './components/BrunoContact';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import { SERVICES, BENEFITS, CONTACT_INFO, WHATSAPP_LINK } from './utils/constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isScrolled = scrollTop > 50;

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to top button */}
      {scrollTop > 500 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">AutoAsisten</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-gray-600 hover:text-primary-600 transition-colors">
                Servicios
              </a>
              <a href="#beneficios" className="text-gray-600 hover:text-primary-600 transition-colors">
                Beneficios
              </a>
              <a href="#bruno" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contacta con Bruno
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contacto
              </a>
              <Button 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                Consulta Gratuita
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#servicios"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#bruno"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacta con Bruno
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-white bg-primary-600 hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Consulta Gratuita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-dots opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text animate-gradient-x">Transforme su Empresa</span>
              <span className="block mt-2">Con Inteligencia Artificial</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 sm:text-2xl leading-relaxed">
              Soluciones prácticas que aumentan sus ventas y reducen costos. Sin complicaciones técnicas.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <Button
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Consulta Gratuita
              </Button>
              <Button
                href="#servicios"
                variant="outline" 
                size="xl"
              >
                Explorar Soluciones
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text mb-6">Beneficios para su Empresa</h2>
            <p className="text-xl text-gray-600">Resultados comprobados que impactan su negocio</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <Card key={index} variant="glass" className="backdrop-blur-lg">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text mb-6">Nuestras Soluciones</h2>
            <p className="text-xl text-gray-600">Tecnología de punta adaptada a su negocio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index}>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-primary-600" })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="mb-6 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary-600">{service.price}</span>
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Cotizar <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bruno Contact Section */}
      <BrunoContact />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500"></div>
        <div className="absolute inset-0 bg-gradient-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
              ¿Listo para modernizar su negocio?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="xl"
                className="glass-card backdrop-blur-lg bg-white/20 hover:bg-white/30 border-white/10 text-white"
                icon={<MessageSquare className="w-6 h-6" />}
                iconPosition="left"
              >
                Chatear por WhatsApp
              </Button>
              <Button
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="xl"
                className="glass-card backdrop-blur-lg bg-white/20 hover:bg-white/30 border-white/10 text-white"
                icon={<Clock className="w-6 h-6" />}
                iconPosition="left"
              >
                Agendar Consultoría
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text mb-6">Contáctenos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarle a crecer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="p-4 rounded-full bg-primary-100 mb-4">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
                <span className="text-gray-700 hover:text-primary-600">
                  {CONTACT_INFO.email}
                </span>
              </a>
            </Card>
            <Card className="text-center">
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="p-4 rounded-full bg-primary-100 mb-4">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Teléfono</h3>
                <span className="text-gray-700 hover:text-primary-600">
                  {CONTACT_INFO.phone}
                </span>
              </a>
            </Card>
            <Card className="text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-4 rounded-full bg-primary-100 mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ubicación</h3>
                <span className="text-gray-700">
                  {CONTACT_INFO.location}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-400 text-transparent bg-clip-text mb-6">AutoAsisten</h3>
              <p className="text-gray-400 text-lg">
                Somos un equipo de expertos respaldado por agentes de IA, construyendo el futuro de las empresas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contacto</h3>
              <p className="text-gray-400 text-lg space-y-2">
                <span className="block">Email: {CONTACT_INFO.email}</span>
                <span className="block">Tel: {CONTACT_INFO.phone}</span>
                <span className="block">{CONTACT_INFO.location}</span>
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2025 AutoAsisten. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;