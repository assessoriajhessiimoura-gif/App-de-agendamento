import { useState } from 'react';
import { X } from 'lucide-react';

interface Procedimento {
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
  precoAplicacao: number;
  precoManutencao: number;
}

const procedimentos: Procedimento[] = [
  {
    nome: 'Volume Brasileiro',
    preco: 'R$ 165',
    descricao: 'Técnica brasileira que valoriza o olhar com volume natural e sofisticado.',
    imagem: '/images/WhatsApp Image 2026-02-16 at 12.14.05.jpeg',
    precoAplicacao: 165,
    precoManutencao: 110,
  },
  {
    nome: 'Volume Fox',
    preco: 'R$ 165',
    descricao: 'Olhar felino e marcante, alongando os cantos externos com elegância.',
    imagem: '/WhatsApp Image 2026-02-16 at 12.14.06 (1).jpeg',
    precoAplicacao: 165,
    precoManutencao: 110,
  },
  {
    nome: 'Volume Fox Marrom',
    preco: 'R$ 165',
    descricao: 'Efeito fox em tons marrom para um visual mais suave e natural.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.06.jpeg',
    precoAplicacao: 165,
    precoManutencao: 110,
  },
  {
    nome: 'Volume Express',
    preco: 'R$ 165',
    descricao: 'Resultado rápido e impactante para o dia a dia com praticidade.',
    imagem: '/WhatsApp Image 2026-02-16 at 14.40.49 (1).jpeg',
    precoAplicacao: 165,
    precoManutencao: 110,
  },
  {
    nome: 'Mega Volume',
    preco: 'R$ 180',
    descricao: 'Máxima densidade e volume para um olhar dramático e luxuoso.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.07.jpeg',
    precoAplicacao: 180,
    precoManutencao: 120,
  },
];

export default function Procedimentos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProcedimento, setSelectedProcedimento] =
    useState<Procedimento | null>(null);

  const handleAgendar = (proc: Procedimento) => {
    setSelectedProcedimento(proc);
    setModalOpen(true);
  };

  const handleModalChoice = (tipo: 'aplicacao' | 'manutencao') => {
    if (selectedProcedimento) {
      window.open('https://pag.ae/81vUL4Buv', '_blank');
      setModalOpen(false);
    }
  };

  return (
    <>
      <section id="procedimentos" className="py-24 bg-gradient-to-b from-[#FAF8F5] to-[#EDE6DF] px-6 bg-pattern">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-serif text-5xl text-[#3A2E2A] mb-4 font-bold">
              Procedimentos
            </h2>
            <p className="text-[#3A2E2A] text-lg font-light max-w-2xl mx-auto">
              Técnicas exclusivas e sofisticadas para realçar sua beleza com
              naturalidade e elegância
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedimentos.map((proc, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] overflow-hidden border border-[#C6A75E] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-subtle-float group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={proc.imagem}
                    alt={proc.nome}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-2xl text-[#3A2E2A] font-semibold">
                    {proc.nome}
                  </h3>
                  <p className="text-[#C6A75E] text-xl font-semibold">
                    {proc.preco}
                  </p>
                  <p className="text-[#3A2E2A] leading-relaxed font-light">
                    {proc.descricao}
                  </p>
                  <button
                    onClick={() => handleAgendar(proc)}
                    className="w-full bg-[#2E7D32] text-white py-3 rounded-lg hover:bg-[#1B5E20] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && selectedProcedimento && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#3A2E2A] hover:text-[#C6A75E] transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="font-serif text-3xl text-[#3A2E2A] mb-6 font-bold">
              {selectedProcedimento.nome}
            </h3>
            <p className="text-[#3A2E2A] mb-8 leading-relaxed">
              Escolha o tipo de serviço que deseja agendar:
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleModalChoice('aplicacao')}
                className="w-full bg-[#F5EFE6] border-2 border-[#C6A75E] text-[#3A2E2A] py-4 rounded-lg hover:bg-[#C6A75E] hover:text-white transition-all duration-300 font-semibold"
              >
                Aplicação - R$ {selectedProcedimento.precoAplicacao}
              </button>
              <button
                onClick={() => handleModalChoice('manutencao')}
                className="w-full bg-[#F5EFE6] border-2 border-[#C6A75E] text-[#3A2E2A] py-4 rounded-lg hover:bg-[#C6A75E] hover:text-white transition-all duration-300 font-semibold"
              >
                Manutenção - R$ {selectedProcedimento.precoManutencao}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
