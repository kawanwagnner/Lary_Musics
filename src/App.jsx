import { motion } from "framer-motion";
import { Mail, Music2, Camera, Download, Play, Instagram, Youtube, Mic2 } from "lucide-react";

import lary from './assets/lary.png';

import './App.css';

export default function App() {
  const nav = [
    { id: "about", label: "Sobre" },
    { id: "music", label: "Música" },
    { id: "gallery", label: "Galeria" },
    { id: "press", label: "Press/Downloads" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-[0.35em] text-sm sm:text-base">
            L . A . R . Y
          </a>
          
          <nav className="hidden sm:flex gap-6 text-sm">
            {nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="opacity-80 hover:opacity-100 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-2 rounded-full bg-white text-black hover:bg-white/90"
          >
            <Mail className="w-4 h-4" /> 
            Fale comigo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0.1)_45%,rgba(0,0,0,1))]" />
        
        <div className="max-w-6xl mx-auto px-4 py-28 sm:py-36 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-center"
          >
            L . A . R . Y
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-center text-sm sm:text-base opacity-80"
          >
            Singer • Songwriter • Black & White Aesthetic
          </motion.p>
          
          <div className="mt-10 flex items-center justify-center gap-3">
            <a 
              href="#music" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-white/90"
            >
              <Play className="w-4 h-4" /> 
              Ouça o EP "Alma"
            </a>
            
            <a 
              href="#press" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40"
            >
              <Download className="w-4 h-4" /> 
              Press Kit
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 bg-red-600">
            <img src={lary} className="object-fill w-full h-full" alt="" />
          </div>

          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-semibold">Sobre mim</h2>
            
            <p className="mt-4 leading-relaxed text-sm sm:text-base opacity-90">
              Paulista, 22. Em meio aos conflitos e dores, a música e a fé se entrelaçam como um cordão que transcende de uma
              jovem frágil, expondo em versos e melodias aquilo que a alma tanto grita. Lanço meu primeiro EP chamado
              <span className="font-semibold"> "Alma"</span> — 10 faixas curtas, intensas e reflexivas, trazendo a fé e o cotidiano para um mundo só meu, e que hoje eu exponho pro mundo.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-xs">
                <Mic2 className="w-3.5 h-3.5" /> 
                Voz principal
              </span>
              
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-xs">
                <Music2 className="w-3.5 h-3.5" /> 
                Composição autoral
              </span>
              
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-xs">
                <Camera className="w-3.5 h-3.5" /> 
                Estética P&B
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Music / EP Section */}
      <section id="music" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold">EP: Alma</h2>
            <a 
              href="#contact" 
              className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              Booking / Parcerias
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-medium opacity-90">Faixas (10) — curtas, intensas e reflexivas</h3>
              
              <ol className="mt-4 space-y-2 text-sm opacity-90 list-decimal list-inside">
                <li>Prólogo</li>
                <li>Conflitos</li>
                <li>Fé</li>
                <li>Entrelaço</li>
                <li>Versos</li>
                <li>Melodias</li>
                <li>Alma</li>
                <li>Mundos</li>
                <li>Expor</li>
                <li>Epílogo</li>
              </ol>
            </div>
            
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="opacity-90 text-sm">Ouça um trecho (substitua o arquivo abaixo pelo link oficial do seu áudio):</p>
              
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <audio controls className="w-full">
                  <source src="/audio/exemplo.mp3" type="audio/mpeg" />
                  Seu navegador não suporta áudio HTML5.
                </audio>
              </div>
              
              <div className="mt-4 flex gap-3">
                <a 
                  href="#" 
                  className="text-sm px-4 py-2 rounded-full bg-white text-black inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4" /> 
                  Ouvir no Spotify
                </a>
                
                <a 
                  href="#" 
                  className="text-sm px-4 py-2 rounded-full border border-white/20 inline-flex items-center gap-2"
                >
                  <Youtube className="w-4 h-4" /> 
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Galeria</h2>
          
          <p className="mt-2 opacity-80 text-sm">
            Substitua pelos seus stills/press photos (preferência: P&B).
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                Use <img src={lary} alt="L.A.R.Y" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press / Downloads Section */}
      <section id="press" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Press & Downloads</h2>
          
          <p className="mt-2 opacity-80 text-sm">
            Materiais para imprensa, curadoria e casas de show.
          </p>
          
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <a 
              className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition bg-white/5" 
              href="#"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                
                <div>
                  <p className="font-medium">Press Kit (PDF)</p>
                  <p className="text-xs opacity-70">Biografia • Fotos • Contatos</p>
                </div>
              </div>
            </a>
            
            <a 
              className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition bg-white/5" 
              href="#"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                
                <div>
                  <p className="font-medium">Rider Técnico</p>
                  <p className="text-xs opacity-70">Input list • Palco</p>
                </div>
              </div>
            </a>
            
            <a 
              className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition bg-white/5" 
              href="#"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                
                <div>
                  <p className="font-medium">Fotos em Alta</p>
                  <p className="text-xs opacity-70">.jpg • .png • .zip</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contato</h2>
          
          <p className="mt-2 opacity-80 text-sm">
            Agenciamento, imprensa e parcerias.
          </p>
          
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" 
              placeholder="Seu nome" 
            />
            
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" 
              placeholder="Seu e-mail" 
            />
            
            <input 
              className="sm:col-span-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" 
              placeholder="Assunto" 
            />
            
            <textarea 
              rows={5} 
              className="sm:col-span-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" 
              placeholder="Sua mensagem" 
            />
            
            <button 
              type="button" 
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-white/90"
            >
              <Mail className="w-4 h-4" /> 
              Enviar mensagem
            </button>
          </form>

          <div className="mt-8 flex gap-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20"
            >
              <Instagram className="w-4 h-4" /> 
              Instagram
            </a>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20"
            >
              <Youtube className="w-4 h-4" /> 
              YouTube
            </a>
            
            <a 
              href="mailto:booking@larymusic.com" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20"
            >
              <Mail className="w-4 h-4" /> 
              booking@larymusic.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-xs opacity-70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} L.A.R.Y — Todos os direitos reservados.</p>
          <p>Site em P&B • minimal • elegante</p>
        </div>
      </footer>
    </div>
  );
}