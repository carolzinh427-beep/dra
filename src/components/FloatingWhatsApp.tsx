import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido por WhatsApp">
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar agora com a Dra Leticia Steegmuller no WhatsApp"
        style={{
          position: 'fixed',
          bottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))',
          right: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          backgroundColor: '#49352D',
          color: '#FFFFFF',
          padding: '0.75rem 1.125rem',
          borderRadius: '50px',
          border: '1.5px solid var(--color-gold)',
          boxShadow: '0 4px 16px rgba(25, 23, 21, 0.35)',
          transition: 'all 0.25s ease',
        }}
        className="floating-whatsapp-btn"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-gold)',
            color: '#FFFFFF',
          }}
        >
          <MessageCircle size={16} strokeWidth={2.2} />
        </div>

        <span
          className="floating-whatsapp-label"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}
        >
          Agendar
        </span>
      </a>

      <style>{`
        .floating-whatsapp-btn:hover {
          background-color: var(--color-gold);
          border-color: var(--color-gold);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(184, 154, 101, 0.45);
        }

        .floating-whatsapp-btn:hover .floating-whatsapp-label {
          color: #FFFFFF;
        }

        .floating-whatsapp-btn:focus-visible {
          outline: 2px solid var(--color-gold);
          outline-offset: 3px;
        }

        @media (max-width: 480px) {
          .floating-whatsapp-label {
            display: none;
          }
          .floating-whatsapp-btn {
            padding: 0.65rem;
            border-radius: 50%;
          }
        }
      `}</style>
    </aside>
  );
};
