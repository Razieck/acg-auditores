'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const contactInfo = [
    {
      icon: faPhone,
      title: "Teléfono",
      info: "+56 953470684",
      href: "tel:+56953470684"
    },
    {
      icon: faEnvelope,
      title: "Correo Electrónico",
      info: "car760@acgauditoreschilespa.cl",
      href: "mailto:car760@acgauditoreschilespa.cl"
    },
    {
      icon: faLocationDot,
      title: "Ubicación",
      info: "Santiago, Chile",
      href: "https://maps.google.com/?q=Santiago,Chile"
    }
  ]

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-600/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-600/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#014D40] mb-6 tracking-tight">
              Contáctanos
            </h2>
            <p className="text-lg md:text-xl text-[#014D40]/80 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos potenciar el crecimiento de tu empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-transparent rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
                <a 
                  href={item.href}
                  target={item.icon === faLocationDot ? "_blank" : "_self"}
                  rel={item.icon === faLocationDot ? "noopener noreferrer" : ""}
                  className="relative block"
                >
                  <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-teal-600/10 hover:border-teal-600/20 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-teal-700 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <FontAwesomeIcon icon={item.icon} className="text-white text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-[#014D40] mb-4 tracking-tight group-hover:text-teal-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#014D40]/70 leading-relaxed tracking-wide group-hover:text-[#014D40]/90 transition-colors duration-300">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Button */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center p-[1px] rounded-full bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 group cursor-pointer">
              <div className="px-8 py-3 rounded-full bg-white/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-transparent">
                <span className="text-[#014D40] font-medium group-hover:text-white transition-colors duration-300">
                  Envíanos un mensaje
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

