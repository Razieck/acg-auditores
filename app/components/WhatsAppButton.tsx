'use client'

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://wa.me/56953470684"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25"></div>
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md">
          <FontAwesomeIcon 
            icon={faWhatsapp} 
            className="text-2xl" 
          />
          <span className="font-medium opacity-0 max-w-0 transition-all duration-300 group-hover:max-w-[200px] group-hover:opacity-100 whitespace-nowrap overflow-hidden">
            ¡Contáctanos!
          </span>
        </div>
      </a>
    </motion.div>
  )
} 