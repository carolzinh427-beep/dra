import React, { useState } from 'react';
import { MessageCircle, Clock, Phone, Sparkles, Calendar, User } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('Harmonização Facial');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [patientName, setPatientName] = useState('');

  const proceduresList = [
    'Harmonização Facial',
    'Preenchimento Labial',
    'Bioestimuladores de Colágeno',
    'Toxina Botulínica',
    'Avaliação Estética Completa',
  ];

  const timesList = ['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'];

  const getCustomWhatsappUrl = () => {
    const namePart = patientName.trim() ? ` em nome de ${patientName.trim()}` : '';
    const dayPart = selectedDay ? ` no dia ${selectedDay}` : ' nesta semana';
    const timePart = selectedTime ? ` às ${selectedTime}` : '';

    const message = `Olá Dra Leticia! Gostaria de agendar uma avaliação para ${selectedProcedure}${dayPart}${timePart}${namePart}`;
    return `https://wa.me/55${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contato"
      style={{
        backgroundColor: 'var(--color-primary)', // #49352D
        color: '#FFFFFF',
        paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
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
          {/* Tag de Contato sem ponto e sem travessão */}
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
                fontSize: '0.75rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Agendamento Direto
            </span>
            <span
              style={{
                width: '32px',
                height: '1px',
                backgroundColor: 'var(--color-gold)',
              }}
            />
          </div>

          {/* Título Obrigatório sem ponto */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
            }}
          >
            Seu próximo passo começa com uma conversa
          </h2>

          {/* Texto de Apoio sem ponto */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.88)',
              fontWeight: 400,
              marginBottom: '2.5rem',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Escolha o procedimento e o horário de sua preferência para direcionamento direto ao WhatsApp
          </p>

          {/* Formulário Interativo de Escolha de Dia, Hora e Procedimento */}
          <div
            style={{
              backgroundColor: 'rgba(25, 23, 21, 0.55)',
              border: '1px solid rgba(184, 154, 101, 0.35)',
              borderRadius: '4px',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              marginBottom: '2.5rem',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {/* Nome da Pessoa */}
              <div>
                <label
                  htmlFor="patient-name"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <User size={14} />
                  Seu Nome Completo
                </label>
                <input
                  id="patient-name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(184, 154, 101, 0.3)',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Procedimento */}
              <div>
                <label
                  htmlFor="booking-procedure"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Sparkles size={14} />
                  Procedimento de Interesse
                </label>
                <select
                  id="booking-procedure"
                  value={selectedProcedure}
                  onChange={(e) => setSelectedProcedure(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    backgroundColor: '#3A2A24',
                    border: '1px solid rgba(184, 154, 101, 0.3)',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                >
                  {proceduresList.map((p, idx) => (
                    <option key={idx} value={p} style={{ backgroundColor: '#3A2A24', color: '#FFFFFF' }}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Escolha do Dia */}
              <div>
                <label
                  htmlFor="booking-date"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Calendar size={14} />
                  Dia de Preferência
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(184, 154, 101, 0.3)',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    outline: 'none',
                    colorScheme: 'dark',
                  }}
                />
              </div>

              {/* Escolha da Hora */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Clock size={14} />
                  Horário de Preferência
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
                  {timesList.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding: '0.55rem 0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                        border: selectedTime === time ? '1px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: selectedTime === time ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.04)',
                        color: selectedTime === time ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                        textAlign: 'center',
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Botão de Envio Direto ao WhatsApp */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={getCustomWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  width: '100%',
                  padding: '1.125rem',
                  fontSize: '0.875rem',
                  letterSpacing: '0.12em',
                }}
                aria-label="Confirmar agendamento e abrir WhatsApp com os dados preenchidos"
              >
                <MessageCircle size={18} strokeWidth={2} />
                Confirmar Agendamento no WhatsApp
              </a>

              {/* Botão Instagram Oficial */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  fontSize: '0.75rem',
                }}
                aria-label="Acompanhar o Instagram oficial da Dra Leticia"
              >
                <InstagramIcon size={16} />
                Acompanhe no Instagram
              </a>
            </div>

            {/* Informações Complementares */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Phone size={14} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {siteConfig.contact.phoneFormatted}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Clock size={14} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Atendimento com hora marcada
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
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
