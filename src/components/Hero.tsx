import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      style={{
        backgroundColor: 'var(--color-primary)', // #49352D
        color: 'var(--color-white)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'calc(90px + env(safe-area-inset-top, 0px))',
        paddingBottom: 'calc(3rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {/* Detalhes sutis de linhas sólidas sem gradiente */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 'clamp(2rem, 15vw, 12rem)',
          width: '1px',
          height: '100%',
          backgroundColor: 'rgba(184, 154, 101, 0.08)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '35%',
          right: 0,
          width: 'clamp(4rem, 10vw, 8rem)',
          height: '1px',
          backgroundColor: 'rgba(184, 154, 101, 0.15)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Coluna de Conteúdo Editorial */}
          <div className="hero-content animate-hero-text">
            {/* Tag institucional */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'var(--color-gold)',
                }}
              />
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                Biomedicina Estética de Alta Precisão
              </span>
            </div>

            {/* Nome da Profissional */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.25rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              {siteConfig.doctor.name}
            </h1>

            {/* Frase Institucional Obrigatória */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                lineHeight: 1.35,
                color: 'var(--color-gold)',
                marginBottom: '1.25rem',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              &ldquo;{siteConfig.doctor.institutionalPhrase}&rdquo;
            </p>

            {/* Texto de Apoio */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.82)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              {siteConfig.doctor.heroSupportText}
            </p>

            {/* Botões de Ação */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.125rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                aria-label="Agendar avaliação diretamente com a Dra. Leticia pelo WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={2} />
                Agendar Avaliação
              </a>

              <a
                href="#resultados"
                className="btn-outline-gold"
                aria-label="Ir para a seção de melhores resultados de antes e depois"
              >
                Conhecer Resultados
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Coluna da Fotografia Real da Dra. Leticia */}
          <div className="hero-image-wrapper animate-hero-photo">
            <div className="hero-image-container">
              {/* Fotografia real com recorte transparente de verdade */}
              <img
                src={siteConfig.doctor.heroPhoto}
                alt={siteConfig.doctor.heroPhotoAlt}
                width={466}
                height={618}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  // Fallback gracioso caso o cutout não carregue
                  const target = e.currentTarget;
                  if (target.src.indexOf('original') === -1) {
                    target.src = siteConfig.doctor.heroPhotoFallback;
                  }
                }}
                className="hero-doctor-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos específicos e responsivos da Hero */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          padding: 1rem 0;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
        }

        .hero-image-container {
          position: relative;
          display: inline-block;
          max-width: 440px;
          width: 100%;
        }

        .hero-doctor-img {
          width: 100%;
          height: auto;
          max-height: 72vh;
          object-fit: contain;
          object-position: bottom center;
          /* Sombra suave e difusa atrás da silhueta */
          filter: drop-shadow(0 22px 38px rgba(25, 23, 21, 0.55));
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
            min-height: calc(100vh - 120px);
          }

          .hero-image-wrapper {
            justify-content: flex-end;
          }

          .hero-doctor-img {
            max-height: 80vh;
          }
        }

        @media (max-width: 899px) {
          .hero-grid {
            text-align: left;
            padding-top: 1rem;
          }

          .hero-doctor-img {
            max-height: 48vh;
            margin-top: 1rem;
          }

          .hero-actions {
            width: 100%;
          }

          .hero-actions .btn-gold,
          .hero-actions .btn-outline-gold {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
