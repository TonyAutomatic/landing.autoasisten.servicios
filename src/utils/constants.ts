import { 
  Bot, 
  BarChart3, 
  Brain, 
  Image as ImageIcon, 
  Lightbulb,
  Share2,
  Target,
  Users,
  MessageSquare
} from 'lucide-react';
import React, { ReactElement } from 'react';

export const WHATSAPP_LINK = "https://wa.me/573205581387";

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  price: string;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    icon: <Bot className="w-12 h-12 text-primary-600" />,
    title: "Chatbots y Asistentes Virtuales",
    description: "Automatice la atención al cliente, ventas y agendamiento 24/7 con IA avanzada.",
    price: "Desde $100/mes",
    benefits: ["Integración WhatsApp", "Ventas Automatizadas", "Agendamiento"]
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-primary-600" />,
    title: "Análisis de Datos e Informes",
    description: "Informes automatizados y análisis predictivo para decisiones estratégicas.",
    price: "Desde $50/mes",
    benefits: ["Informes Personalizados", "Predicciones", "Visualización"]
  },
  {
    icon: <Brain className="w-12 h-12 text-primary-600" />,
    title: "Gestión de Información",
    description: "Centralice y acceda a su información empresarial con IA.",
    price: "Desde $50/mes",
    benefits: ["Búsqueda Avanzada", "Resúmenes", "Control de Acceso"]
  },
  {
    icon: <ImageIcon className="w-12 h-12 text-primary-600" />,
    title: "Procesamiento de Imágenes",
    description: "Automatice la edición y análisis de imágenes para su negocio.",
    price: "Desde $50/mes",
    benefits: ["Edición Masiva", "Reconocimiento", "Optimización"]
  },
  {
    icon: <Share2 className="w-12 h-12 text-primary-600" />,
    title: "Contenido para Redes",
    description: "Creación y gestión automatizada de contenido para redes sociales.",
    price: "Desde $400/mes",
    benefits: ["20 Posts", "60 Historias", "4 Campañas"]
  },
  {
    icon: <Target className="w-12 h-12 text-primary-600" />,
    title: "Generación de Leads B2B",
    description: "Encuentre y contacte prospectos calificados automáticamente.",
    price: "Desde $80/mes",
    benefits: ["250 Contactos/Semana", "Mensajes Personalizados", "Seguimiento"]
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-primary-600" />,
    title: "Asesoría en IA",
    description: "Consultoría experta para implementar IA en su negocio.",
    price: "$98 por asesoría",
    benefits: ["Plan Personalizado", "ROI Garantizado", "Implementación"]
  },
  {
    icon: <Users className="w-12 h-12 text-primary-600" />,
    title: "Capacitación en IA",
    description: "Formación práctica en IA para equipos empresariales.",
    price: "$25/hora",
    benefits: ["Grupos Reducidos", "Casos Prácticos", "Certificación"]
  }
];

export const BENEFITS = [
  "Reducción de costos operativos hasta un 40%",
  "Automatización de tareas repetitivas",
  "Atención al cliente 24/7",
  "Decisiones basadas en datos",
  "Escalabilidad garantizada",
  "ROI medible y transparente"
];

export const CONTACT_INFO = {
  email: "TonyAlarcon@autoasisten.com",
  phone: "+57 320 558 1387",
  location: "Medellín, Colombia"
};

interface BrunoQuestion {
  id: number;
  question: string;
  answer: string;
}

export const BRUNO_QUESTIONS: BrunoQuestion[] = [
  {
    id: 1,
    question: "¿Cómo puede ayudarme la IA en mi negocio?",
    answer: "Bruno puede explicarte cómo la inteligencia artificial puede automatizar procesos, reducir costos y aumentar tus ventas."
  },
  {
    id: 2,
    question: "¿Cuánto cuesta implementar IA?",
    answer: "Bruno te dará un presupuesto personalizado basado en las necesidades específicas de tu empresa."
  },
  {
    id: 3, 
    question: "¿Qué resultados puedo esperar?", 
    answer: "Bruno te mostrará casos de éxito y estimaciones de ROI basadas en tu industria y tamaño de empresa."
  },
  {
    id: 4,
    question: "¿Cuánto tiempo toma implementar?",
    answer: "Bruno te explicará los plazos realistas para cada tipo de proyecto de IA."
  }
]; 