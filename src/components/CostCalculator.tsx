import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const services = {
  apostilla: { name: 'Apostilla', base: 1500 },
  legalizacion: { name: 'Legalización', base: 2000 },
  registroCivil: { name: 'Registro Civil', base: 800 },
  titulos: { name: 'Títulos y Grados', base: 2500 },
};

const states = {
  cdmx: { name: 'Ciudad de México', multiplier: 1 },
  estado: { name: 'Estado de México', multiplier: 1.2 },
  otros: { name: 'Otros Estados', multiplier: 1.5 },
};

const CostCalculator = () => {
  const [service, setService] = useState('');
  const [state, setState] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  const calculateCost = () => {
    if (!service || !state) return;
    
    const basePrice = services[service as keyof typeof services].base;
    const stateMultiplier = states[state as keyof typeof states].multiplier;
    const urgentMultiplier = urgent ? 1.5 : 1;
    
    setTotal(basePrice * stateMultiplier * urgentMultiplier);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">
          Calculadora de Costos
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Trámite
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Seleccionar trámite</option>
            {Object.entries(services).map(([key, { name }]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Seleccionar estado</option>
            {Object.entries(states).map(([key, { name }]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="urgent"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="urgent" className="ml-2 block text-sm text-gray-700">
            Trámite urgente (+50%)
          </label>
        </div>

        <button
          onClick={calculateCost}
          disabled={!service || !state}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          Calcular Costo
        </button>

        {total !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-lg font-medium text-blue-900">
              Costo Estimado: ${total.toLocaleString('es-MX')} MXN
            </p>
            <p className="text-sm text-blue-600 mt-1">
              *Precios sujetos a cambios según características específicas del trámite
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CostCalculator;