import { MessageCircle, Clock, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      style={{
        backgroundColor: 'var(--color-primary)', // #49352D
        color: '#FFFFFF',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linhas finas de fundo sólidas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 'clamp(2rem, 12vw, 8rem)',
          width: '1px',
          height: '100%',
          backgroundColor: 'rgba(184, 154, 101, 0.08)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '740px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Tag de Contato */}
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
                width: '32px',
                height: '1px',
                backgroundColor: 'var(--color-gold)',
              }}
            />
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Atendimento Exclusivo
            </span>
            <span
              style={{
                width: '32px',
                height: '1px',
                backgroundColor: 'var(--color-gold)',
              }}
            />
          </div>

          {/* Título Obrigatório */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}
          >
            Seu próximo passo começa com uma conversa.
          </h2>

          {/* Texto de Apoio Obrigatório */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 300,
              marginBottom: '2.75rem',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Entre em contato para esclarecer suas dúvidas e verificar os horários disponíveis para
            uma avaliação.
          </p>

          {/* Cartão de Ação Direta */}
          <div
            style={{
              backgroundColor: 'rgba(25, 23, 21, 0.4)',
              border: '1px solid rgba(184, 154, 101, 0.3)',
              borderRadius: '2px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '2.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              {/* Botão Principal WhatsApp */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  padding: '1.125rem 2rem',
                  fontSize: '0.875rem',
                }}
                aria-label="Agendar consulta diretamente pelo WhatsApp oficial"
              >
                <MessageCircle size={18} strokeWidth={2} />
                Agendar pelo WhatsApp
              </a>

              {/* Botão Instagram Oficial */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  padding: '1rem 2rem',
                  fontSize: '0.8125rem',
                }}
                aria-label="Abrir perfil oficial da Dra. Leticia no Instagram em nova aba"
              >
                <InstagramIcon size={17} />
                Acompanhe no Instagram
              </a>
            </div>

            {/* Informações Complementares Discretas */}
            <div
              style={{
                marginTop: '2.25rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}>
                <Phone size={15} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {siteConfig.contact.phoneFormatted}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}>
                <Clock size={15} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Atendimento com hora marcada
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}>
                <Sparkles size={15} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Planejamento personalizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
