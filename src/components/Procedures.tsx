import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Procedures: React.FC = () => {
  return (
    <section
      id="procedimentos"
      className="section-transition-top"
      style={{
        backgroundColor: 'var(--color-offwhite)', // #F8F5F1
        color: 'var(--color-dark)',
        paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
      }}
    >
      <div className="container">
        {/* Cabeçalho da Seção sem ponto e sem travessão */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto clamp(2rem, 3.5vw, 3rem) auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.75rem',
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
              fontSize: 'clamp(1.9rem, 3.6vw, 2.85rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--color-primary)',
              marginBottom: '0.75rem',
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
            Cada plano estético considera as características e objetivos únicos de cada pessoa
          </p>
        </div>

        {/* Grade de Procedimentos sem Imagem, apenas Tipografia e Acabamento Nobre */}
        <div className="procedures-grid">
          {siteConfig.procedures.map((proc, index) => (
            <article
              key={proc.id}
              className="procedure-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '3px',
                border: '1px solid rgba(112, 84, 73, 0.12)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
                position: 'relative',
              }}
            >
              {/* Topo do Card com Número e Ícone */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                    }}
                  >
                    0{index + 1}
                  </span>

                  <Sparkles size={16} style={{ color: 'var(--color-gold)', opacity: 0.7 }} />
                </div>

                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
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
                    fontSize: 'clamp(1.3rem, 1.9vw, 1.55rem)',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    marginBottom: '0.75rem',
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
                    fontWeight: 400,
                  }}
                >
                  {proc.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .procedures-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }

        .procedure-card:hover {
          border-color: var(--color-gold) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
