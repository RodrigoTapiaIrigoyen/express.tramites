import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuál es el servicio que ofrecen?",
    answer: "Ofrecemos servicios de gestión y trámites legales, incluyendo apostillas, legalizaciones, trámites ante el Registro Civil, y más. Nos especializamos en facilitar todos los procesos documentales que necesite."
  },
  {
    question: "¿En cuánto tiempo tendré mi documento en mi domicilio?",
    answer: "Los tiempos de entrega varían según el tipo de trámite y la ubicación. Generalmente, el proceso toma entre 3 a 5 días hábiles, más el tiempo de envío. Le proporcionaremos un estimado específico al iniciar su trámite."
  },
  {
    question: "¿Es indispensable que envíe la copia de mi acta?",
    answer: "Sí, es necesario contar con una copia del documento para iniciar el trámite. Esto nos permite verificar la información y asegurar la precisión del proceso."
  },
  {
    question: "¿Por qué no puedo obtener el original de mi acta del Registro Civil?",
    answer: "Los documentos originales permanecen en el Registro Civil como parte del archivo histórico. Lo que se expide son copias certificadas, que tienen la misma validez legal que el original."
  },
  {
    question: "¿Los documentos que entregan son legítimos y legales?",
    answer: "Sí, todos nuestros documentos son 100% legítimos y legales, emitidos por las autoridades correspondientes. Pueden ser utilizados para cualquier trámite oficial, escolar o gubernamental."
  },
  {
    question: "¿Por qué causas se demora un trámite?",
    answer: "Un trámite puede demorarse por diversos factores: documentación incompleta, alta demanda en las dependencias, periodos vacacionales, o necesidad de verificaciones adicionales. Siempre le mantendremos informado sobre el estado de su trámite."
  },
  {
    question: "¿Cuándo se requiere un traslado?",
    answer: "Se requiere un traslado cuando el documento debe gestionarse en una ubicación diferente a la de origen, por ejemplo, cuando un acta necesita ser procesada en otro estado o región."
  },
  {
    question: "¿Si el documento solicitado no se encuentra, me reembolsan mi dinero?",
    answer: "Sí, en caso de que no sea posible obtener el documento solicitado, realizamos el reembolso correspondiente, descontando únicamente los gastos de gestión ya realizados."
  },
  {
    question: "¿Qué diferencia existe entre la apostilla y la legalización de documentos?",
    answer: "La apostilla es válida entre países miembros del Convenio de La Haya, mientras que la legalización se requiere para países no miembros. La apostilla es un trámite más simplificado que la legalización tradicional."
  },
  {
    question: "¿Cómo se hace la entrega de documentos?",
    answer: "Realizamos la entrega a través de servicios de mensajería confiables, con seguimiento en tiempo real. También ofrecemos la opción de recolección en nuestras oficinas si así lo prefiere."
  }
];

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Resolvemos tus dudas sobre nuestros servicios
          </p>
        </motion.div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;