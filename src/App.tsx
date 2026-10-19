import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Procedures } from './components/Procedures';
import { AestheticQuiz } from './components/AestheticQuiz';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  useEffect(() => {
    // Respeito a prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // IntersectionObserver para transições elegantes entre seções (400 a 700 ms)
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
      {/* Barra de Navegação Transparente e Vitralítica */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main id="main-content" role="main" style={{ flexGrow: 1 }}>
        {/* Seção 01: Hero (No mobile: apenas foto e nome sobrepondo embaixo) */}
        <Hero />

        {/* Seção 02: Resultados Antes e Depois imediatamente abaixo do Hero (com botões de agendar e whatsapp abaixo) */}
        <div className="fade-in-section">
          <Results />
        </div>

        {/* Seção 03: Procedimentos sem imagem posicionada após Resultados */}
        <div className="fade-in-section">
          <Procedures />
        </div>

        {/* Seção 04: Quiz Interativo Compacto no Mobile */}
        <div className="fade-in-section">
          <AestheticQuiz />
        </div>

        {/* Seção 05: Agendamento com Escolha de Dia e Horário */}
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
