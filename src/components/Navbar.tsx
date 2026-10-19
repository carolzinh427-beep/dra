import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando rolar além de 80px do topo, ativa o fundo sólido sofisticado
      if (window.scrollY > 80) {
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
          backgroundColor: isScrolled ? '#49352D' : 'transparent',
          borderBottom: isScrolled
            ? '1px solid rgba(184, 154, 101, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.08)',
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
          {/* Logo Tipográfico */}
          <a
            href="#inicio"
            aria-label="Dra. Leticia Steegmuller - Página Inicial"
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                fontWeight: 500,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
              }}
            >
              {siteConfig.doctor.shortName}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                fontWeight: 500,
                marginTop: '3px',
              }}
            >
              Biomedicina Estética
            </span>
          </a>

          {/* Links Desktop */}
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
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-gold)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Agendamento Desktop */}
          <div
            className="desktop-cta"
            style={{
              display: 'none',
              alignItems: 'center',
            }}
          >
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar avaliação pelo WhatsApp da Dra. Leticia"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.625rem 1.25rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                border: '1px solid rgba(184, 154, 101, 0.7)',
                borderRadius: '2px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'var(--color-gold)';
                el.style.borderColor = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'transparent';
                el.style.borderColor = 'rgba(184, 154, 101, 0.7)';
              }}
            >
              Agendar Avaliação
              <ArrowUpRight size={13} strokeWidth={2} style={{ color: 'var(--color-gold)' }} />
            </a>
          </div>

          {/* Toggle Menu Mobile */}
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              color: '#FFFFFF',
              borderRadius: '4px',
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Painel Mobile Suspenso/Modal */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: '#49352D',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 'calc(80px + env(safe-area-inset-top, 0px))',
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
                  fontSize: '1.625rem',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(184, 154, 101, 0.15)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontFamily: 'var(--font-sans)' }}>
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
              }}
            >
              Agendar Avaliação pelo WhatsApp
            </a>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.55)',
                textAlign: 'center',
                letterSpacing: '0.04em',
              }}
            >
              Atendimento exclusivo com hora marcada
            </p>
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
