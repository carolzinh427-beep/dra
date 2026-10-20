import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando rolar além de 60px do topo, ajusta o reflexo vidralítico
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Bloquear scroll do body quando menu mobile aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          paddingTop: 'env(safe-area-inset-top, 0px)',
          backgroundColor: isScrolled ? 'rgba(73, 53, 45, 0.32)' : 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(20px) saturate(190%)',
          WebkitBackdropFilter: 'blur(20px) saturate(190%)',
          borderBottom: isScrolled
            ? '1px solid rgba(184, 154, 101, 0.28)'
            : '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: isScrolled
            ? '0 8px 32px 0 rgba(25, 23, 21, 0.22)'
            : '0 4px 30px rgba(0, 0, 0, 0.06)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Logo Tipográfico com a fonte do Hero para o nome e fonte do site para a especialidade */}
          <a
            href="#inicio"
            aria-label="Dra Leticia Steegmuller Página Inicial"
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-hero)',
                fontSize: 'clamp(1.25rem, 2.4vw, 1.55rem)',
                fontWeight: 500,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
              }}
            >
              {siteConfig.doctor.shortName}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                fontWeight: 600,
                marginTop: '3px',
              }}
            >
              Biomedicina Estética
            </span>
          </a>

          {/* Links Desktop com tipografia de luxo Syne / Tenor Sans */}
          <nav
            aria-label="Navegação principal"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-gold)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.92)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Agendamento Desktop */}
          <div style={{ display: 'none' }} className="desktop-cta">
            <a
              href="#contato"
              className="btn-outline-gold"
              style={{
                padding: '0.6rem 1.35rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              aria-label="Ir para agendamento"
            >
              Agendar Avaliação
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              color: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(184, 154, 101, 0.25)',
              borderRadius: '3px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Painel Mobile Suspenso Vidralítico */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(73, 53, 45, 0.85)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 'calc(86px + env(safe-area-inset-top, 0px))',
            paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          {/* Links do Menu Mobile */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginTop: '1.5rem',
            }}
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(184, 154, 101, 0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  0{siteConfig.navLinks.indexOf(link) + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Mobile Inferior */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-gold"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Agendar Avaliação pelo WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Media query embutida para desktop x mobile da navbar */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
