import React from 'react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ScrollStack, ScrollStackItem } from './ScrollStack';
import { AnimatedContent } from './AnimatedContent';

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
        {/* Cabeçalho da Seção com AnimatedContent sem ponto e sem travessão */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
        >
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto clamp(1.75rem, 3vw, 2.5rem) auto',
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
              Role para explorar os tratamentos com foco em naturalidade e precisão
            </p>
          </div>
        </AnimatedContent>

        {/* ScrollStack de Procedimentos Sem Descrição */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          threshold={0.1}
        >
          <div
            className="procedures-stack-container"
            style={{
              height: 'clamp(460px, 58vh, 540px)',
              maxWidth: '820px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <ScrollStack
              itemDistance={85}
              itemStackDistance={20}
              stackPosition="12%"
              smoothScroll={true}
              holdDistance={180}
            >
              {siteConfig.procedures.map((proc, index) => (
                <ScrollStackItem
                  key={proc.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(112, 84, 73, 0.16)',
                    borderRadius: '20px',
                    padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    minHeight: '14rem',
                    boxShadow: '0 12px 36px -12px rgba(73, 53, 45, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Topo do Card com Número e Ícone */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                            fontWeight: 600,
                            color: 'var(--color-gold)',
                            lineHeight: 1,
                          }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '24px',
                            height: '1px',
                            backgroundColor: 'rgba(184, 154, 101, 0.4)',
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)',
                          }}
                        >
                          {proc.subtitle}
                        </span>
                      </div>

                      <Sparkles size={18} style={{ color: 'var(--color-gold)', opacity: 0.8 }} />
                    </div>

                    {/* Título do Procedimento Sem Descrição */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.4rem, 2.6vw, 1.95rem)',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: '1rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {proc.title}
                    </h3>
                  </div>

                  {/* Ação Elegante do Card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(112, 84, 73, 0.08)',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--color-secondary)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Protocolo exclusivo e personalizado
                    </span>

                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="procedure-cta-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1.15rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        borderRadius: '3px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#FFFFFF',
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                      }}
                      aria-label={`Agendar ${proc.title} pelo WhatsApp`}
                    >
                      <MessageCircle size={14} />
                      Agendar no WhatsApp
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </AnimatedContent>
      </div>

      <style>{`
        .procedure-cta-btn:hover {
          background-color: var(--color-gold) !important;
          color: #FFFFFF !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};
