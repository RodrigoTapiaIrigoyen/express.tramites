import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "¡Hola! Soy el asistente virtual de GestoresExpress. ¿En qué puedo ayudarte? Aquí tienes algunos de nuestros servicios: Apostillas, Legalización de Documentos, Registro Civil, Registro Público, Títulos Académicos, Relaciones Exteriores, y Servicios de Mensajería.",
    isBot: true,
  },
];

const services = [
  "Apostillas: Actas (nacimiento, matrimonio, defunción), Títulos profesionales, Certificados de estudios, Cartas de antecedentes no penales.",
  "Legalización de Documentos: Certificación para documentos utilizados en el extranjero.",
  "Registro Civil: Emisión de actas, Constancia de soltería.",
  "Registro Público: Certificados de libertad o gravamen, Folios reales y mercantiles.",
  "Títulos Académicos: Constancia de Registro de Título, Constancia de Grado Académico, Certificado de No Sanción.",
  "Relaciones Exteriores: Constancia de emisión de pasaporte.",
  "Servicios de Mensajería: Envío y recepción de documentos, Seguimiento de trámites.",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simular respuesta del bot
    setTimeout(() => {
      let botResponse = "Disculpa, no entiendo tu consulta. ¿Puedes ser más específico?";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("apostilla")) {
        botResponse = services[0];
      } else if (lowerInput.includes("legalización")) {
        botResponse = services[1];
      } else if (lowerInput.includes("registro civil")) {
        botResponse = services[2];
      } else if (lowerInput.includes("registro público")) {
        botResponse = services[3];
      } else if (lowerInput.includes("títulos académicos")) {
        botResponse = services[4];
      } else if (lowerInput.includes("relaciones exteriores")) {
        botResponse = services[5];
      } else if (lowerInput.includes("mensajería")) {
        botResponse = services[6];
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 ${isOpen ? "hidden" : "flex"} left-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg items-center justify-center transition-colors duration-300`}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="ml-2 hidden md:inline">Chat</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-8 z-50 w-80 md:w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-medium">Chat de Ayuda</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
