import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig, type ClinicalResultItem } from '../config/siteConfig';
import { AnimatedContent } from './AnimatedContent';

interface BeforeAfterCardProps {
  item: ClinicalResultItem;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(112, 84, 73, 0.14)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 18px rgba(73, 53, 45, 0.05)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      className="result-card"
    >
      {/* Header do Card sem travessão */}
      <div
        style={{
          padding: 'clamp(0.6rem, 1.5vw, 0.875rem) clamp(0.75rem, 2vw, 1.125rem)',
          borderBottom: '1px solid rgba(112, 84, 73, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '0.25rem',
        }}
      >
        <div>
          <span
            style={{
              fontSize: 'clamp(0.625rem, 1.3vw, 0.6875rem)',
              fontWeight: 600,
              color: 'var(--color-gold)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Caso 0{item.id} | {item.area}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(0.95rem, 2vw, 1.18rem)',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginTop: '0.15rem',
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* Modo Deslizante Interativo */}
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label={`Comparação de antes e depois ${item.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        onKeyDown={handleKeyDown}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/11',
          overflow: 'hidden',
          userSelect: 'none',
          cursor: 'ew-resize',
          backgroundColor: '#F8F5F1',
          containerType: 'inline-size',
        }}
      >
        {/* Imagem de DEPOIS */}
        <img
          src={item.afterImage}
          alt={`${item.title} ${item.afterLabel}`}
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />

        {/* Imagem de ANTES */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: `${sliderPos}%`,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <img
            src={item.beforeImage}
            alt={`${item.title} ${item.beforeLabel}`}
            loading="lazy"
            decoding="async"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100cqw',
              minWidth: '100%',
              maxWidth: 'none',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Linha Divisória */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '2px',
            backgroundColor: 'var(--color-gold)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              border: '2px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
            }}
          >
            <SlidersHorizontal size={12} />
          </div>
        </div>

        {/* Label Antes */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            left: '0.5rem',
            backgroundColor: 'rgba(73, 53, 45, 0.92)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.58rem, 1.2vw, 0.6875rem)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.45rem',
            borderRadius: '2px',
            pointerEvents: 'none',
            border: '1px solid rgba(184, 154, 101, 0.3)',
          }}
        >
          {item.beforeLabel}
        </div>

        {/* Label Depois */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '0.5rem',
            backgroundColor: 'rgba(184, 154, 101, 0.95)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.58rem, 1.2vw, 0.6875rem)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.45rem',
            borderRadius: '2px',
            pointerEvents: 'none',
          }}
        >
          {item.afterLabel}
        </div>
      </div>
    </div>
  );
};

export const Results: React.FC = () => {
  return (
    <section
      id="resultados"
      className="section-transition-top"
      style={{
        backgroundColor: '#FFFFFF',
        color: 'var(--color-dark)',
        paddingTop: 'clamp(3.5rem, 5.5vw, 5.5rem)',
        paddingBottom: 'clamp(4rem, 6vw, 6rem)',
      }}
    >
      <div className="container">
        {/* Cabeçalho da Seção com AnimatedContent */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
        >
          <div
            style={{
              maxWidth: '720px',
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
                Resultados Clínicos
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
              Resultados que valorizam a naturalidade
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                lineHeight: 1.6,
                color: 'var(--color-secondary)',
                fontWeight: 400,
              }}
            >
              Deslize para comparar a evolução de cada detalhe com naturalidade e técnica
            </p>
          </div>
        </AnimatedContent>

        {/* Grade com Dois Resultados por Linha com AnimatedContent */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          stagger={0.12}
          threshold={0.1}
        >
          <div className="results-grid">
            {siteConfig.clinicalResults.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </AnimatedContent>

        {/* Botões de Agendar e Conhecer WhatsApp Abaixo dos Resultados */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          delay={0.15}
        >
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                padding: '0.95rem 1.85rem',
                fontSize: '0.8125rem',
              }}
              aria-label="Agendar avaliação pelo WhatsApp"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Agendar no WhatsApp
            </a>

            <a
              href="#contato"
              className="btn-outline-dark"
              style={{
                padding: '0.95rem 1.85rem',
                fontSize: '0.8125rem',
              }}
              aria-label="Escolher dia e horário para agendamento"
            >
              <Calendar size={16} strokeWidth={2} />
              Escolher Dia e Horário
            </a>
          </div>
        </AnimatedContent>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.75rem, 2vw, 1.75rem);
        }

        .result-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(73, 53, 45, 0.12);
        }
      `}</style>
    </section>
  );
};
