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
        paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))',
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

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Coluna de Conteúdo Editorial */}
          <div className="hero-content animate-hero-text">
            {/* Tag institucional sem ponto e sem travessão */}
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
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                Biomedicina Estética Avançada
              </span>
            </div>

            {/* Nome da Profissional */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
                fontWeight: 600,
                lineHeight: 1.12,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
              }}
            >
              {siteConfig.doctor.name}
            </h1>

            {/* Frase Institucional sem ponto e sem travessão */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                lineHeight: 1.35,
                color: 'var(--color-gold)',
                marginBottom: '1.25rem',
                fontWeight: 400,
              }}
            >
              {siteConfig.doctor.institutionalPhrase}
            </p>

            {/* Texto de Apoio sem ponto final */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                fontWeight: 400,
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
                href="#contato"
                className="btn-gold"
                aria-label="Agendar avaliação personalizada com a Dra Leticia"
              >
                <MessageCircle size={16} strokeWidth={2} />
                Agendar Avaliação
              </a>

              <a
                href="#resultados"
                className="btn-outline-gold"
                aria-label="Ir para a seção de resultados de antes e depois"
              >
                Conhecer Resultados
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Coluna da Fotografia Real da Dra. Leticia Aumentada com Sombra no Final */}
          <div className="hero-image-wrapper animate-hero-photo">
            <div className="hero-image-container">
              {/* Fotografia real ampliada com recorte de alta qualidade */}
              <img
                src={siteConfig.doctor.heroPhoto}
                alt={siteConfig.doctor.heroPhotoAlt}
                width={520}
                height={690}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('original') === -1) {
                    target.src = siteConfig.doctor.heroPhotoFallback;
                  }
                }}
                className="hero-doctor-img"
              />

              {/* Sombra difusa no final do hero para ocultar perfeitamente o fim da foto */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '140px',
                  background: 'linear-gradient(to top, #49352D 25%, rgba(73, 53, 45, 0.85) 60%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
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
          gap: 2rem;
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
          max-width: 520px;
          width: 100%;
          overflow: hidden;
        }

        .hero-doctor-img {
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 24px 42px rgba(25, 23, 21, 0.6));
          transform: scale(1.05);
          transform-origin: bottom center;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3.5rem;
            min-height: calc(100vh - 100px);
          }

          .hero-image-wrapper {
            justify-content: flex-end;
          }

          .hero-doctor-img {
            max-height: 90vh;
            transform: scale(1.08);
          }
        }

        @media (max-width: 899px) {
          .hero-grid {
            text-align: left;
            padding-top: 0.5rem;
          }

          .hero-doctor-img {
            max-height: 56vh;
            margin-top: 1rem;
            transform: scale(1.04);
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
