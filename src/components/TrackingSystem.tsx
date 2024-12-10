import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackingSystem = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStatus('En proceso - Esperando documentación');
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Rastrear Trámite
      </h3>
      <form onSubmit={handleTracking} className="space-y-4">
        <div>
          <label htmlFor="tracking" className="block text-sm font-medium text-gray-700">
            Número de Seguimiento
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="tracking"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ej: TRM-2024-001"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading || !trackingId}
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {loading ? (
            <Loader className="animate-spin h-5 w-5" />
          ) : (
            'Consultar Estado'
          )}
        </button>
      </form>
      {status && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Estado:</span> {status}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default TrackingSystem;