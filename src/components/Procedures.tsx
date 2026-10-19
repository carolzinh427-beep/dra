import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Procedures: React.FC = () => {
  return (
    <section
      id="procedimentos"
      className="section-transition-top"
      style={{
        backgroundColor: 'var(--color-offwhite)', // #F8F5F1
        color: 'var(--color-dark)',
        paddingTop: 'clamp(4rem, 6vw, 6rem)',
        paddingBottom: 'clamp(4rem, 6vw, 6rem)',
      }}
    >
      <div className="container">
        {/* Cabeçalho da Seção Centralizado sem ponto e sem travessão */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto clamp(2.5rem, 4vw, 3.5rem) auto',
            textAlign: 'center',
          }}
        >
          {/* Linha discreta de marca */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                width: '28px',
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
              Procedimentos
            </span>
            <span
              style={{
                width: '28px',
                height: '1px',
                backgroundColor: 'var(--color-gold)',
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--color-primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Cuidado que respeita sua individualidade
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.65,
              color: 'var(--color-secondary)',
              fontWeight: 400,
            }}
          >
            Cada plano estético deve considerar as características, as necessidades e os objetivos individuais de cada pessoa
          </p>
        </div>

        {/* Grade de Procedimentos com Imagens Compactas e Otimizadas */}
        <div className="procedures-grid">
          {siteConfig.procedures.map((proc, index) => (
            <article
              key={proc.id}
              className="procedure-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid rgba(112, 84, 73, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
            >
              {/* Fotografia Editorial Compacta */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  maxHeight: '220px',
                  overflow: 'hidden',
                  backgroundColor: '#EBE5DE',
                }}
              >
                <img
                  src={proc.image}
                  alt={proc.alt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="procedure-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(73, 53, 45, 0.88)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(184, 154, 101, 0.3)',
                  }}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Informações Compactas */}
              <div
                style={{
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {proc.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginBottom: '0.6rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {proc.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'var(--color-secondary)',
                      fontWeight: 400,
                    }}
                  >
                    {proc.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .procedures-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }

        @media (min-width: 1024px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        .procedure-card:hover {
          border-color: var(--color-gold) !important;
          transform: translateY(-2px);
        }

        .procedure-card:hover .procedure-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
