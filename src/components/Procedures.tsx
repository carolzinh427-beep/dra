import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Procedures: React.FC = () => {
  return (
    <section
      id="procedimentos"
      style={{
        backgroundColor: 'var(--color-offwhite)', // #F8F5F1
        color: 'var(--color-dark)',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
      }}
    >
      <div className="container">
        {/* Cabeçalho da Seção Centralizado */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto clamp(3rem, 5vw, 4.5rem) auto',
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
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.2em',
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
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--color-primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Cuidado que respeita sua individualidade
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'var(--color-secondary)',
              fontWeight: 300,
            }}
          >
            Cada plano estético deve considerar as características, as necessidades e os objetivos
            individuais de cada pessoa.
          </p>
        </div>

        {/* Grade de Procedimentos */}
        <div className="procedures-grid">
          {siteConfig.procedures.map((proc, index) => (
            <article
              key={proc.id}
              className="procedure-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(112, 84, 73, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              {/* Fotografia Editorial */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/11',
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
                    transition: 'transform 0.6s ease',
                  }}
                  className="procedure-img"
                />
                {/* Numeração elegante */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(73, 53, 45, 0.85)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(184, 154, 101, 0.3)',
                  }}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Informações */}
              <div
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
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
                      marginBottom: '0.5rem',
                    }}
                  >
                    {proc.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      fontWeight: 500,
                      color: 'var(--color-primary)',
                      marginBottom: '0.875rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {proc.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'var(--color-secondary)',
                      fontWeight: 300,
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
          grid-template-columns: repeat(1, 1fr);
          gap: 1.75rem;
        }

        @media (min-width: 640px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.25rem;
          }
        }

        .procedure-card:hover {
          border-color: var(--color-gold) !important;
          transform: translateY(-3px);
        }

        .procedure-card:hover .procedure-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
