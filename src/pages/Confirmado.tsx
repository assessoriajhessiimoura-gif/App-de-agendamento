import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Confirmado() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center px-6 py-12">
      <div
        className={`bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CheckCircle className="w-24 h-24 text-[#2E7D32] animate-scale-in" />
            <div className="absolute inset-0 bg-[#2E7D32] opacity-20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        <h1 className="font-serif text-4xl text-[#3A2E2A] mb-4 font-bold">
          Pagamento confirmado com sucesso!
        </h1>

        <p className="text-[#3A2E2A] text-lg mb-8 leading-relaxed">
          Obrigada por escolher nossos serviços. Agora vamos confirmar seu
          horário pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/5531991028853?text=Oi acabei de pagar o sinal na Bianca Moura Lash Designer e quero confirmar meu horário"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C6A75E] text-white px-10 py-4 rounded-lg hover:bg-[#A08947] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold"
        >
          Confirmar Horário no WhatsApp
        </a>

        <div className="mt-8 pt-8 border-t border-[#C6A75E]/20">
          <a
            href="/"
            className="text-[#3A2E2A] hover:text-[#C6A75E] transition-colors duration-300 text-sm"
          >
            ← Voltar para o site
          </a>
        </div>
      </div>
    </div>
  );
}
