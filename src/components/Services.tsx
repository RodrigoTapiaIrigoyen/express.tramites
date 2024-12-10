import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Stamp, 
  FileText, 
  GraduationCap, 
  Scale, 
  Mail, 
  UserCheck,
  Building,
  Plane,
  Send
} from 'lucide-react';

const tramites = [
  {
    icon: Stamp,
    title: 'Apostillas',
    items: [
      'Actas (nacimiento, matrimonio, defunción)',
      'Títulos profesionales',
      'Certificados de estudios',
      'Cartas de antecedentes no penales'
    ]
  },
  {
    icon: FileText,
    title: 'Legalización de Documentos',
    items: [
      'Certificación para documentos utilizados en el extranjero'
    ]
  },
  {
    icon: UserCheck,
    title: 'Registro Civil',
    items: [
      'Emisión de actas',
      'Constancia de soltería'
    ]
  },
  {
    icon: Building,
    title: 'Registro Público',
    items: [
      'Certificados de libertad o gravamen',
      'Folios reales y mercantiles'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Títulos Académicos',
    items: [
      'Constancia de Registro de Título',
      'Constancia de Grado Académico',
      'Certificado de No Sanción'
    ]
  },
  {
    icon: Plane,
    title: 'Relaciones Exteriores',
    items: [
      'Constancia de emisión de pasaporte'
    ]
  },
  {
    icon: Send,
    title: 'Servicios de Mensajería',
    items: [
      'Envío y recepción de documentos',
      'Seguimiento de trámites'
    ]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Nuestros Trámites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Gestión profesional de documentos oficiales
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tramites.map((tramite, index) => (
            <motion.div
              key={tramite.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <tramite.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {tramite.title}
              </h3>
              <ul className="space-y-2">
                {tramite.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Consulta el estado de tus trámites en línea y realiza pagos de forma segura.
            <br />
            Para mayor información, contáctanos por teléfono, WhatsApp o correo electrónico.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;