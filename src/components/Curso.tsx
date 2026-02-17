import { Award, Star, Headphones, MessageCircle } from 'lucide-react';

export default function Curso() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#E8DFD7] to-[#F5EFE6] px-6 bg-pattern">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative animate-parallax order-2 md:order-1 group">
            <img
              src="/images/WhatsApp_Image_2026-02-16_at_12.53.19.jpeg"
              alt="Bianca Moura"
              className="rounded-2xl shadow-2xl w-full group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#C6A75E] opacity-20 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-[#C6A75E] opacity-10 rounded-2xl"></div>
          </div>

          <div className="space-y-8 order-1 md:order-2 animate-slide-in-right">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3A2E2A] mb-4 font-bold">
                Curso de Extensão de Cílios
              </h2>
              <p className="text-[#C6A75E] text-lg font-semibold">
                com certificado
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Award className="text-[#C6A75E] w-10 h-10 mb-3 animate-gentle-sway" />
                <p className="text-[#3A2E2A] font-semibold">
                  Certificado reconhecido
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Star className="text-[#C6A75E] w-10 h-10 mb-3 animate-gentle-sway" />
                <p className="text-[#3A2E2A] font-semibold">Curso VIP</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Headphones className="text-[#C6A75E] w-10 h-10 mb-3 animate-gentle-sway" />
                <p className="text-[#3A2E2A] font-semibold">Suporte completo</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="text-[#C6A75E] w-10 h-10 mb-3 animate-gentle-sway" />
                <p className="text-[#3A2E2A] font-semibold">Suporte pós curso</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-serif text-2xl text-[#3A2E2A] mb-6 font-semibold">
                O que você vai aprender
              </h3>
              <ul className="space-y-4 text-[#3A2E2A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] font-bold text-xl">•</span>
                  <span>Técnicas de alongamento e fios tecnológicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] font-bold text-xl">•</span>
                  <span>Alinhamento e direcionamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] font-bold text-xl">•</span>
                  <span>Cuidados e manutenção</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] font-bold text-xl">•</span>
                  <span>Lista de materiais (materiais a parte)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#C6A75E] to-[#A08947] p-8 rounded-xl shadow-2xl text-white">
              <h3 className="font-serif text-2xl mb-4 font-semibold">
                Investimento
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/80 text-sm">1 dia</p>
                  <p className="text-3xl font-bold">R$ 650</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">2 dias</p>
                  <p className="text-3xl font-bold">R$ 850</p>
                </div>
              </div>
              <a
                href="https://wa.me/5531991028853?text=Oi quero informações sobre o curso de extensão de cílios!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#2E7D32] text-white text-center py-4 rounded-lg hover:bg-[#1B5E20] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Quero me inscrever
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
