import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-[#F5EFE6] via-[#F5EFE6] to-[#F5F1EC] pt-32 pb-20 px-6 flex items-center bg-pattern"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div
            className={`space-y-6 transition-all duration-1200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="font-serif text-6xl md:text-7xl text-[#3A2E2A] font-bold leading-tight animate-text-reveal">
              BIANCA MOURA
            </h1>

            <p className="text-sm uppercase tracking-[0.3em] text-[#3A2E2A] font-light">
              Lash Designer
            </p>

            <div className="w-24 h-0.5 bg-gradient-to-r from-[#C6A75E] to-transparent animate-gentle-sway"></div>

            <p className="text-lg text-[#3A2E2A] leading-relaxed max-w-md font-light">
              Experiência sofisticada em extensão de cílios, onde técnica e arte
              se encontram para realçar sua beleza natural com elegância e exclusividade.
            </p>

            {/* BOTÕES */}
            <div className="flex gap-4 pt-4">

              {/* VER PROCEDIMENTOS */}
              <button
                onClick={() => scrollToSection('procedimentos')}
                className="bg-[#2E7D32] text-white px-8 py-4 rounded-lg hover:bg-[#1B5E20] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Ver Procedimentos
              </button>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/bianca.cilioss"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-[#C6A75E] text-[#3A2E2A] hover:bg-[#C6A75E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                📷 Instagram
              </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative animate-float">
              <img
                src="/images/WhatsApp_Image_2026-02-16_at_12.53.19.jpeg"
                alt="Bianca Moura Lash Designer"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
