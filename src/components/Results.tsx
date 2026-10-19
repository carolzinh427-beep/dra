import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Columns, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig, type ClinicalResultItem } from '../config/siteConfig';

interface BeforeAfterSliderProps {
  item: ClinicalResultItem;
  viewMode: 'slider' | 'split';
}

const BeforeAfterCard: React.FC<BeforeAfterSliderProps> = ({ item, viewMode }) => {
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
        borderRadius: '3px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header do Card sem travessão */}
      <div
        style={{
          padding: '0.875rem 1.125rem',
          borderBottom: '1px solid rgba(112, 84, 73, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '0.4rem',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.6875rem',
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
              fontSize: '1.15rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginTop: '0.15rem',
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* Área Visual: Duas Imagens ao Lado uma da Outra (Padrão) ou Deslizante */}
      {viewMode === 'split' ? (
        /* Duas imagens ao lado uma da outra */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            backgroundColor: 'rgba(112, 84, 73, 0.1)',
            width: '100%',
          }}
        >
          {/* Antes */}
          <div style={{ position: 'relative', aspectRatio: '4/3', backgroundColor: '#F8F5F1', overflow: 'hidden' }}>
            <img
              src={item.beforeImage}
              alt={`${item.title} ${item.beforeLabel}`}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '0.4rem',
                left: '0.4rem',
                backgroundColor: 'rgba(73, 53, 45, 0.92)',
                color: '#FFFFFF',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.2rem 0.5rem',
                borderRadius: '2px',
                border: '1px solid rgba(184, 154, 101, 0.3)',
              }}
            >
              {item.beforeLabel}
            </span>
          </div>

          {/* Depois */}
          <div style={{ position: 'relative', aspectRatio: '4/3', backgroundColor: '#F8F5F1', overflow: 'hidden' }}>
            <img
              src={item.afterImage}
              alt={`${item.title} ${item.afterLabel}`}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '0.4rem',
                right: '0.4rem',
                backgroundColor: 'rgba(184, 154, 101, 0.95)',
                color: '#FFFFFF',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.2rem 0.5rem',
                borderRadius: '2px',
              }}
            >
              {item.afterLabel}
            </span>
          </div>
        </div>
      ) : (
        /* Modo Deslizante Interativo */
        <div
          ref={containerRef}
          role="slider"
          tabIndex={0}
          aria-label={`Comparação de antes e depois: ${item.title}`}
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
            aspectRatio: '16/10',
            maxHeight: '300px',
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
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                border: '2px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              }}
            >
              <SlidersHorizontal size={12} />
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '0.625rem',
              left: '0.625rem',
              backgroundColor: 'rgba(73, 53, 45, 0.9)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.2rem 0.5rem',
              borderRadius: '2px',
              pointerEvents: 'none',
              border: '1px solid rgba(184, 154, 101, 0.3)',
            }}
          >
            {item.beforeLabel}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '0.625rem',
              right: '0.625rem',
              backgroundColor: 'rgba(184, 154, 101, 0.95)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.2rem 0.5rem',
              borderRadius: '2px',
              pointerEvents: 'none',
            }}
          >
            {item.afterLabel}
          </div>
        </div>
      )}

    </div>
  );
};

export const Results: React.FC = () => {
  // Padrão: slider (modo deslizante interativo)
  const [viewMode, setViewMode] = useState<'slider' | 'split'>('slider');

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
        {/* Cabeçalho da Seção sem ponto e sem travessão */}
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
              marginBottom: '1.25rem',
            }}
          >
            Deslize para comparar a evolução de cada detalhe com naturalidade e técnica
          </p>

          {/* Alternador de Modo de Exibição */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-offwhite)',
              padding: '0.25rem',
              borderRadius: '3px',
              border: '1px solid rgba(112, 84, 73, 0.12)',
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              aria-label="Visualização em modo controle deslizante"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                borderRadius: '2px',
                backgroundColor: viewMode === 'slider' ? 'var(--color-primary)' : 'transparent',
                color: viewMode === 'slider' ? '#FFFFFF' : 'var(--color-secondary)',
              }}
            >
              <SlidersHorizontal size={13} />
              Deslizante
            </button>

            <button
              type="button"
              onClick={() => setViewMode('split')}
              aria-label="Visualização lado a lado"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                borderRadius: '2px',
                backgroundColor: viewMode === 'split' ? 'var(--color-primary)' : 'transparent',
                color: viewMode === 'split' ? '#FFFFFF' : 'var(--color-secondary)',
              }}
            >
              <Columns size={13} />
              Lado a Lado
            </button>
          </div>
        </div>

        {/* Grade com Quatro Resultados: duas imagens ao lado uma da outra */}
        <div className="results-grid">
          {siteConfig.clinicalResults.map((item) => (
            <BeforeAfterCard key={item.id} item={item} viewMode={viewMode} />
          ))}
        </div>

        {/* Botões de Agendar e Conhecer WhatsApp Abaixo dos Resultados */}
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
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 900px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
