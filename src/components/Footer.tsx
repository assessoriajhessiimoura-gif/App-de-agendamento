import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#3A2E2A] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4 font-bold">
              BIANCA MOURA
            </h3>
            <p className="text-white/80 font-light">
              Lash Designer em Belo Horizonte
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#C6A75E]">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5531991028853"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[#C6A75E] transition-colors duration-300"
              >
                <MessageCircle size={20} />
                <span>(31) 99102-8853</span>
              </a>
              <a
                href="mailto:assessoriabiancamoura@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#C6A75E] transition-colors duration-300"
              >
                <Mail size={20} />
                <span>assessoriabiancamoura@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#C6A75E]">
              Redes Sociais
            </h4>
            <a
              href="https://www.instagram.com/bianca.cilioss?igsh=MW0yeWJ2Yjh5b2g4bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-[#C6A75E] transition-colors duration-300"
            >
              <Instagram size={20} />
              <span>@bianca.cilioss</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2026 Bianca Moura Lash Designer Belo Horizonte. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
