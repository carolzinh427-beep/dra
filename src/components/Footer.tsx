import React, { useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { siteConfig } from '../config/siteConfig';
import { AnimatedContent } from './AnimatedContent';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        role="contentinfo"
        style={{
          backgroundColor: '#3A2A24', // Variação sofisticada e profunda do marrom
          color: '#FFFFFF',
          paddingTop: 'clamp(4rem, 6vw, 5rem)',
          paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))',
          borderTop: '1px solid rgba(184, 154, 101, 0.25)',
          position: 'relative',
        }}
      >
        <div className="container">
          <AnimatedContent
            distance={40}
            direction="vertical"
            duration={0.8}
            threshold={0.1}
          >
            <div
              style={{
                maxWidth: '820px',
                margin: '0 auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.75rem',
              }}
            >
            {/* Nome da Profissional */}
            <div>
              <a
                href="#inicio"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  display: 'inline-block',
                }}
              >
                {siteConfig.doctor.name}
              </a>

              {/* Frase Institucional */}
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--color-gold)',
                  marginTop: '0.4rem',
                  letterSpacing: '0.02em',
                }}
              >
                &ldquo;{siteConfig.doctor.institutionalPhrase}&rdquo;
              </p>
            </div>

            {/* Credenciais Profissionais Exclusivamente no Rodapé */}
            <div
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.25rem',
                border: '1px solid rgba(184, 154, 101, 0.4)',
                borderRadius: '2px',
                backgroundColor: 'rgba(25, 23, 21, 0.35)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                {siteConfig.doctor.credentials}
              </span>
            </div>

            {/* Links Essenciais de Navegação */}
            <nav
              aria-label="Navegação do rodapé"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'clamp(1rem, 3vw, 2rem)',
                paddingTop: '0.5rem',
              }}
            >
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.8125rem',
                    letterSpacing: '0.06em',
                    color: 'rgba(255, 255, 255, 0.75)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.75)')
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Links Sociais e de Contato Direto */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
              }}
            >
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Dra. Leticia no WhatsApp"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  padding: '0.5rem 1rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '2px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--color-gold)';
                  el.style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  el.style.color = 'rgba(255, 255, 255, 0.85)';
                }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar Instagram oficial da Dra. Leticia Steegmuller"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  padding: '0.5rem 1rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '2px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--color-gold)';
                  el.style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  el.style.color = 'rgba(255, 255, 255, 0.85)';
                }}
              >
                <InstagramIcon size={15} />
                Instagram
              </a>
            </div>

            {/* Linha Divisória */}
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                marginTop: '1rem',
              }}
            />

            {/* Copyright, Privacidade e Voltar ao Topo */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <span>
                © {new Date().getFullYear()} {siteConfig.doctor.name} Todos os direitos reservados
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(true)}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.75rem',
                    textDecoration: 'underline',
                  }}
                >
                  Política de Privacidade & Termos
                </button>

                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Voltar ao início da página"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'var(--color-gold)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  Topo
                  <ArrowUp size={13} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </footer>

      {/* Modal de Política de Privacidade */}
      {showPrivacyModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            backgroundColor: 'rgba(25, 23, 21, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-dark)',
              maxWidth: '600px',
              width: '100%',
              borderRadius: '2px',
              padding: '2rem',
              border: '1px solid var(--color-gold)',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--color-primary)',
                marginBottom: '1rem',
              }}
            >
              Privacidade & Ética Profissional
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', color: '#555' }}>
              Este canal de comunicação destina-se exclusivamente à prestação de informações e
              agendamento de consultas com a <strong>{siteConfig.doctor.name}</strong> ({siteConfig.doctor.credentials})
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', color: '#555' }}>
              Os dados e mensagens trocados através do contato por WhatsApp são tratados com estrito
              sigilo profissional em concordância com a Lei Geral de Proteção de Dados e o código de ética biomédico vigente
            </p>
            <button
              type="button"
              onClick={() => setShowPrivacyModal(false)}
              className="btn-gold"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
