import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface QuestionOption {
  label: string;
  treatment: string;
}

export const AestheticQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPain, setSelectedPain] = useState<QuestionOption | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const painOptions: QuestionOption[] = [
    {
      label: 'Lábios finos, ressecados ou sem contorno definido',
      treatment: 'Preenchimento Labial e Hidratação com Ácido Hialurônico',
    },
    {
      label: 'Linhas dinâmicas na testa e olhar cansado',
      treatment: 'Toxina Botulínica Preventiva e Reparadora',
    },
    {
      label: 'Perda de firmeza, sustentação e viço na pele',
      treatment: 'Bioestimuladores de Colágeno e Rejuvenescimento Tissular',
    },
    {
      label: 'Falta de definição no perfil mandibular e queixo',
      treatment: 'Harmonização e Estruturação de Ângulo Mandibular',
    },
  ];

  const goalOptions = [
    'Naturalidade total sem parecer que fiz procedimentos',
    'Rosto descansado com luminosidade e olhar revigorado',
    'Contorno desenhado e harmonia de perfil',
    'Pele firme e rejuvenescimento gradual',
  ];

  const handlePainSelect = (option: QuestionOption) => {
    setSelectedPain(option);
    setCurrentStep(2);
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    setCurrentStep(3);
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setSelectedPain(null);
    setSelectedGoal(null);
  };

  const getWhatsappUrl = () => {
    const text = `Olá Dra Leticia! Fiz a avaliação no site e minha principal queixa estética é "${selectedPain?.label}". Meu objetivo é "${selectedGoal}". Gostaria de saber mais sobre ${selectedPain?.treatment} e verificar horários disponíveis`;
    return `https://wa.me/55${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="quizz"
      style={{
        backgroundColor: '#FFFFFF',
        color: 'var(--color-dark)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
        borderTop: '1px solid rgba(112, 84, 73, 0.08)',
        borderBottom: '1px solid rgba(112, 84, 73, 0.08)',
      }}
    >
      <div className="container">
        {/* Card do Quiz com tamanho compacto para celular */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            backgroundColor: 'var(--color-offwhite)',
            border: '1px solid rgba(184, 154, 101, 0.35)',
            borderRadius: '4px',
            padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
            boxShadow: '0 4px 20px rgba(73, 53, 45, 0.04)',
          }}
        >
          {/* Topo do Quiz com indicador de passos compacto */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(112, 84, 73, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} style={{ color: 'var(--color-gold)' }} />
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
                Avaliação Personalizada
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--color-secondary)',
                fontWeight: 500,
              }}
            >
              Passo {currentStep} de 3
            </span>
          </div>

          {/* Passo 1: Dor principal */}
          {currentStep === 1 && (
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}
              >
                O que mais incomoda na sua aparência hoje
              </h3>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                Selecione a área onde você mais gostaria de ver evolução estética
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {painOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePainSelect(opt)}
                    style={{
                      textAlign: 'left',
                      padding: '0.875rem 1rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(112, 84, 73, 0.16)',
                      borderRadius: '3px',
                      fontSize: '0.8125rem',
                      color: 'var(--color-dark)',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-gold)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF8F5';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(112, 84, 73, 0.16)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
                    }}
                  >
                    <span>{opt.label}</span>
                    <ArrowRight size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Passo 2: Objetivo */}
          {currentStep === 2 && (
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}
              >
                Qual transformação você mais deseja alcançar
              </h3>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                Escolha o estilo de resultado que melhor combina com a sua rotina
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {goalOptions.map((goal, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleGoalSelect(goal)}
                    style={{
                      textAlign: 'left',
                      padding: '0.875rem 1rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(112, 84, 73, 0.16)',
                      borderRadius: '3px',
                      fontSize: '0.8125rem',
                      color: 'var(--color-dark)',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-gold)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF8F5';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(112, 84, 73, 0.16)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
                    }}
                  >
                    <span>{goal}</span>
                    <ArrowRight size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Passo 3: Recomendação Personalizada com CTA WhatsApp */}
          {currentStep === 3 && (
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(184, 154, 101, 0.15)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '2px',
                  marginBottom: '0.75rem',
                }}
              >
                <Check size={14} style={{ color: 'var(--color-gold)' }} />
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                  }}
                >
                  Plano Sugerido
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}
              >
                {selectedPain?.treatment}
              </h3>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1rem',
                  borderRadius: '3px',
                  border: '1px solid rgba(112, 84, 73, 0.12)',
                  marginBottom: '1.25rem',
                }}
              >
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
                  Com base no seu objetivo de <strong>{selectedGoal?.toLowerCase()}</strong>, a Dra Leticia realizará um mapeamento facial anatômico para planejar cada aplicação com técnica precisa e segurança
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', padding: '0.875rem 1rem', fontSize: '0.8125rem' }}
                >
                  <MessageCircle size={16} />
                  Enviar Meu Resultado no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={resetQuiz}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-secondary)',
                  }}
                >
                  <RotateCcw size={13} />
                  Refazer avaliação
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
