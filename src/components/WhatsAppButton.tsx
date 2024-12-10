import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/529991422125"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#4caf50] hover:bg-[#43a047] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Chatear ahora</span>
    </motion.a>
  );
};

export default WhatsAppButton;