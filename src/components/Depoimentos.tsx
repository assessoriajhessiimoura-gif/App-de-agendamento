import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Juliana Silva',
    texto:
      'Experiência incrível! A Bianca é extremamente profissional e cuidadosa. Meus cílios ficaram perfeitos e naturais, exatamente como eu queria.',
    estrelas: 5,
  },
  {
    nome: 'Mariana Costa',
    texto:
      'Melhor lash designer de BH! Ambiente impecável, atendimento nota 10 e resultado surpreendente. Já indiquei para todas as amigas.',
    estrelas: 5,
  },
  {
    nome: 'Fernanda Oliveira',
    texto:
      'Apaixonada pelo trabalho da Bianca! Ela entende exatamente o que queremos e o resultado é sempre impecável. Super recomendo!',
    estrelas: 5,
  },
  {
    nome: 'Camila Rodrigues',
    texto:
      'Profissional excepcional! Técnica perfeita, produtos de qualidade e um cuidado especial com cada detalhe. Não troco por nada!',
    estrelas: 5,
  },
  {
    nome: 'Beatriz Almeida',
    texto:
      'Simplesmente perfeito! A Bianca é muito atenciosa e caprichosa. Meus cílios duram muito e o efeito é maravilhoso. Vale cada centavo!',
    estrelas: 5,
  },
  {
    nome: 'Amanda Santos',
    texto:
      'Trabalho impecável! Sempre saio de lá me sentindo linda e confiante. A Bianca é uma artista, realmente ama o que faz.',
    estrelas: 5,
  },
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#EDE6DF] to-[#FAF8F5] px-6 bg-pattern">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-5xl text-[#3A2E2A] mb-4 font-bold">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#C6A75E] via-[#C6A75E] to-transparent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-subtle-float border border-[#C6A75E]/20" key={currentIndex}>
            <div className="mb-6 animate-slide-up">
              <p className="text-[#C6A75E] font-semibold text-center text-lg mb-4">
                {depoimentos[currentIndex].nome}
              </p>
              <div className="flex justify-center gap-1">
                {[...Array(depoimentos[currentIndex].estrelas)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C6A75E] text-[#C6A75E] animate-gentle-sway"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
            <p className="text-[#3A2E2A] text-lg md:text-xl leading-relaxed text-center min-h-[120px] font-light animate-fade-in">
              "{depoimentos[currentIndex].texto}"
            </p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-[#3A2E2A] p-3 rounded-full shadow-lg hover:bg-[#C6A75E] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-[#3A2E2A] p-3 rounded-full shadow-lg hover:bg-[#C6A75E] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#C6A75E] w-8'
                    : 'bg-[#C6A75E]/30 hover:bg-[#C6A75E]/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
