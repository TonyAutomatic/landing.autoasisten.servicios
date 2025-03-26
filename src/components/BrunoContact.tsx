import React, { useState } from 'react';
import { Card } from './ui/Card';
import Button from './ui/Button';
import { BRUNO_QUESTIONS, WHATSAPP_LINK } from '../utils/constants';
import { MessageSquare, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const BrunoContact: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="bruno" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hero-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">Contacta con Bruno</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Bruno es nuestro asistente virtual especializado en soluciones de IA para empresas. 
                Responderá tus dudas y te ayudará a encontrar la solución perfecta para tu negocio.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {BRUNO_QUESTIONS.map((q: Question) => (
                <Card 
                  key={q.id} 
                  variant="outline" 
                  className="overflow-hidden"
                  padding="none"
                  hover={false}
                >
                  <button 
                    className="w-full p-4 text-left flex justify-between items-center"
                    onClick={() => toggleQuestion(q.id)}
                  >
                    <span className="font-medium text-gray-800">
                      {q.question}
                    </span>
                    {expandedId === q.id ? (
                      <ChevronDown className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-primary-600" />
                    )}
                  </button>
                  
                  {expandedId === q.id && (
                    <div className="p-4 pt-0 bg-gray-50 text-gray-700 border-t border-gray-100">
                      {q.answer}
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="left"
              >
                Habla con Bruno ahora
              </Button>
              
              <Button 
                href="#contacto" 
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Más opciones de contacto
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-full opacity-30 blur-xl animate-pulse-slow"></div>
              <div className="relative">
                <img 
                  src="/images/bruno.png" 
                  alt="Bruno - Asistente Virtual" 
                  className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-xl animate-float" 
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrunoContact; 