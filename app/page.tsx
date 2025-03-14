'use client'

import Image from "next/image"
import { Navbar } from "./components/Navbar"
import { Services } from "./components/Services"
import { Newsletter } from "./components/Newsletter"
import { AboutUs } from "./components/AboutUs"
import { Contact } from "./components/Contact"
import { WhatsAppButton } from "./components/WhatsAppButton"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E0F2F1] via-[#B2DFDB] to-[#80CBC4]">
      <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-emerald-500/5 pointer-events-none"></div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo Container */}
            <div className="relative w-full max-w-[800px] aspect-[3/1] mb-16">
              <Image
                src="https://i.imgur.com/Tr134KA.png"
                alt="ACG Auditores Consultores"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-10"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-[#014D40] drop-shadow-sm">Excelencia en</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 font-extrabold">
                    Auditoría y
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-cyan-500 font-extrabold">
                    Consultoría
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#014D40]/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide">
                  Soluciones financieras y empresariales adaptadas a tus necesidades,
                  <br className="hidden md:block" />
                  respaldadas por años de experiencia y profesionalismo.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-6 justify-center pt-8"
              >
                <button className="group relative px-8 py-4 bg-teal-700 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 transition-transform duration-300 group-hover:scale-105"></div>
                  <span className="relative z-10 text-white font-bold text-lg tracking-wide">
                    Conoce nuestros servicios
                  </span>
                </button>
                <button className="group relative px-8 py-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 border-2 border-teal-700 rounded-full transition-all duration-300 group-hover:border-teal-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <span className="relative z-10 font-bold text-lg text-teal-700 group-hover:text-white transition-colors duration-300 tracking-wide">
                    Contáctanos
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-teal-700 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1 h-3 bg-teal-700 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <div className="relative z-10">
        <Services />
        <Newsletter />
        <AboutUs />
        <Contact />
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}

