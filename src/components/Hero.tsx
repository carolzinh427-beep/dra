import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { AnimatedContent } from './AnimatedContent';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      style={{
        backgroundColor: 'var(--color-primary)', // #49352D
        color: 'var(--color-white)',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'calc(80px + env(safe-area-inset-top, 0px))',
        paddingBottom: '0',
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

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Layout Mobile: APENAS a foto da doutora em alta definicao e o nome dela sobrepondo a foto na parte de baixo */}
        <div className="mobile-only-hero">
          <AnimatedContent
            distance={40}
            direction="vertical"
            duration={0.9}
            ease="power3.out"
            trigger="mount"
          >
            <div className="mobile-hero-photo-wrapper">
              <picture>
                <source srcSet="/dra-leticia-cutout-hd.webp" type="image/webp" />
                <source srcSet="/dra-leticia-cutout-hd.png" type="image/png" />
                <img
                  src={siteConfig.doctor.heroPhoto}
                  srcSet="/dra-leticia-cutout.png 1x, /dra-leticia-cutout-hd.png 2x"
                  alt={siteConfig.doctor.heroPhotoAlt}
                  width={932}
                  height={1236}
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('original') === -1) {
                      target.src = siteConfig.doctor.heroPhotoFallback;
                    }
                  }}
                  className="mobile-doctor-img"
                />
              </picture>

              {/* Sombra no final da foto para não ver o corte dela */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '160px',
                  background: 'linear-gradient(to top, #49352D 35%, rgba(73, 53, 45, 0.85) 70%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />

              {/* Nome da profissional sobrepondo a foto na parte de baixo */}
              <div className="mobile-hero-name-overlay">
                <h1
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.1rem, 8.5vw, 2.85rem)',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                    margin: 0,
                    textShadow: '0 2px 14px rgba(25, 23, 21, 0.85)',
                  }}
                >
                  {siteConfig.doctor.name}
                </h1>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Layout Desktop Editorial Completo */}
        <div className="desktop-only-hero">
          <div className="hero-grid">
            {/* Coluna de Conteúdo Editorial com AnimatedContent */}
            <div className="hero-content">
              <AnimatedContent
                distance={50}
                direction="vertical"
                duration={0.9}
                ease="power3.out"
                trigger="mount"
              >
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
              </AnimatedContent>
            </div>

            {/* Coluna da Fotografia Real da Dra. Leticia em Alta Definição com AnimatedContent */}
            <div className="hero-image-wrapper">
              <AnimatedContent
                distance={60}
                direction="vertical"
                duration={1.0}
                delay={0.15}
                ease="power3.out"
                trigger="mount"
              >
                <div className="hero-image-container">
                  <picture>
                    <source srcSet="/dra-leticia-cutout-hd.webp" type="image/webp" />
                    <source srcSet="/dra-leticia-cutout-hd.png" type="image/png" />
                    <img
                      src={siteConfig.doctor.heroPhoto}
                      srcSet="/dra-leticia-cutout.png 1x, /dra-leticia-cutout-hd.png 2x"
                      alt={siteConfig.doctor.heroPhotoAlt}
                      width={932}
                      height={1236}
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
                  </picture>

                  {/* Sombra difusa no final do hero */}
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
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile: apenas foto e nome sobrepondo a foto embaixo */
        .desktop-only-hero {
          display: none;
        }

        .mobile-only-hero {
          display: block;
          width: 100%;
          padding-top: 0.5rem;
        }

        .mobile-hero-photo-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          overflow: hidden;
        }

        .mobile-doctor-img {
          width: 100%;
          height: auto;
          max-height: 64vh;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5));
          display: block;
          image-rendering: -webkit-optimize-contrast;
        }

        .mobile-hero-name-overlay {
          position: absolute;
          bottom: 1.25rem;
          left: 0.75rem;
          right: 0.75rem;
          z-index: 4;
          text-align: center;
        }

        /* Desktop: layout lado a lado com conteúdo editorial completo */
        @media (min-width: 900px) {
          .mobile-only-hero {
            display: none !important;
          }

          .desktop-only-hero {
            display: block !important;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3.5rem;
            align-items: center;
            min-height: calc(100vh - 80px);
            padding: 1rem 0 0 0;
          }

          .hero-content {
            max-width: 600px;
          }

          .hero-image-wrapper {
            display: flex;
            justify-content: flex-end;
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
            max-height: 88vh;
            object-fit: contain;
            object-position: bottom center;
            filter: drop-shadow(0 24px 42px rgba(25, 23, 21, 0.6));
            transform: scale(1.06);
            transform-origin: bottom center;
            image-rendering: -webkit-optimize-contrast;
          }
        }
      `}</style>
    </section>
  );
};
