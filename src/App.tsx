import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Procedures } from './components/Procedures';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  useEffect(() => {
    // Verificar se o usuário prefere movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // IntersectionObserver para transições elegantes e sutis (400 a 700 ms)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Barra de Navegação */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main id="main-content" role="main" style={{ flexGrow: 1 }}>
        {/* Seção 01: Hero com fotografia protagonista e marrom profundo */}
        <Hero />

        {/* Seção 02: Procedimentos em fundo off-white */}
        <div className="fade-in-section">
          <Procedures />
        </div>

        {/* Seção 03: Resultados Antes e Depois em fundo branco */}
        <div className="fade-in-section">
          <Results />
        </div>

        {/* Seção 04: Agendamento Direto em marrom profundo */}
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>

      {/* Rodapé Profissional com Credencial Exclusiva CRBM/DF 23260 */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
