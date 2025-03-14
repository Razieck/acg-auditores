'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop, faChartLine, faShieldAlt, faUsers } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export function Services() {
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

  const services = [
    {
      icon: faLaptop,
      title: "Auditoría Financiera",
      description: "Servicios profesionales de auditoría y revisión de estados financieros con los más altos estándares de calidad.",
    },
    {
      icon: faChartLine,
      title: "Gestión Financiera",
      description: "Asesoría especializada en gestión financiera y administrativa para optimizar el rendimiento de su organización.",
    },
    {
      icon: faShieldAlt,
      title: "Control Interno",
      description: "Implementación y desarrollo de sistemas de control interno robustos y eficientes para su empresa.",
    },
    {
      icon: faUsers,
      title: "Gestión de RRHH",
      description: "Gestión integral de recursos humanos y procesos de remuneraciones adaptados a sus necesidades.",
    },
  ]

  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-600/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/5 to-cyan-500/5 rounded-full blur-3xl"></div>
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
              Nuestros Servicios
            </h2>
            <p className="text-lg md:text-xl text-[#014D40]/80 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Ofrecemos soluciones integrales y personalizadas para potenciar el crecimiento y la eficiencia de su empresa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-transparent rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-teal-600/10 hover:border-teal-600/20 transition-all duration-300 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-br from-teal-700 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#014D40] mb-4 tracking-tight group-hover:text-teal-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#014D40]/70 leading-relaxed tracking-wide group-hover:text-[#014D40]/90 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <button className="text-teal-700 font-medium hover:text-teal-600 transition-colors flex items-center gap-2 group">
                        Más información
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

