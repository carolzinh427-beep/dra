export interface ProcedureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

export interface ClinicalResultItem {
  id: number;
  title: string;
  area: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const siteConfig = {
  // Informações da profissional
  doctor: {
    name: 'Dra Leticia Steegmuller',
    shortName: 'Leticia Steegmuller',
    title: 'Biomédica Esteta',
    credentials: 'Biomédica Esteta | CRBM/DF 23260',
    institutionalPhrase: 'Naturalidade, técnica e planejamento em cada detalhe',
    heroSupportText:
      'Cuidado individualizado e planejamento estético para valorizar a beleza com equilíbrio e atenção aos detalhes',
    heroPhoto: '/dra-leticia-cutout.png',
    heroPhotoFallback: '/dra-leticia-original.png',
    heroPhotoAlt: 'Dra Leticia Steegmuller Biomedicina Estética',
  },

  // Canais oficiais de atendimento
  contact: {
    phoneRaw: '61920044305',
    phoneFormatted: '(61) 92004 4305',
    whatsappMessage:
      'Olá Dra Leticia! Gostaria de saber mais sobre os procedimentos e verificar a disponibilidade para agendar uma avaliação',
    get whatsappUrl() {
      return `https://wa.me/55${this.phoneRaw}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
    instagramUrl:
      'https://www.instagram.com/dra.leticiasteegmuller?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    instagramHandle: '@dra.leticiasteegmuller',
  },

  // Navegação
  navLinks: [
    { label: 'Início', href: '#inicio' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Avaliação', href: '#quizz' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Agendamento', href: '#contato' },
  ],

  // Procedimentos confirmados
  procedures: [
    {
      id: 'harmonizacao-facial',
      title: 'Harmonização Facial',
      subtitle: 'Equilíbrio e Simetria',
      description:
        'Planejamento tridimensional minucioso das proporções do rosto para realçar traços naturais com sutileza e refinamento',
      image: '/images/procedures/harmonizacao.jpg',
      alt: 'Harmonização facial com naturalidade e proporção',
    },
    {
      id: 'bioestimuladores',
      title: 'Bioestimuladores de Colágeno',
      subtitle: 'Sustentação e Firmeza',
      description:
        'Estímulo gradual e biológico da síntese natural de colágeno promovendo recuperação da densidade e viço da pele',
      image: '/images/procedures/bioestimulador.jpg',
      alt: 'Tratamento com bioestimuladores de colágeno',
    },
    {
      id: 'toxina-botulinica',
      title: 'Toxina Botulínica',
      subtitle: 'Prevenção e Suavização',
      description:
        'Atenuação precisa e elegante de rugas dinâmicas preservando integralmente a mímica facial e autenticidade',
      image: '/images/procedures/toxina.jpg',
      alt: 'Aplicação sutil de toxina botulínica para linhas de expressão',
    },
    {
      id: 'preenchimento-labial',
      title: 'Preenchimento Labial e Facial',
      subtitle: 'Definição e Hidratação',
      description:
        'Restauração estratégica de contornos e volumes faciais com ácido hialurônico para hidratação e formato harmônico',
      image: '/images/procedures/preenchimento.jpg',
      alt: 'Preenchimento labial refinado com foco em naturalidade',
    },
    {
      id: 'fios-sustentacao',
      title: 'Fios de Sustentação e PDO',
      subtitle: 'Tração e Estímulo Dérmico',
      description:
        'Efeito lifting suave e regeneração tecidual progressiva com reposicionamento sutil de tecidos',
      image: '/images/procedures/fios.jpg',
      alt: 'Fios de sustentação e estimulo dermico',
    },
    {
      id: 'rinomodelacao',
      title: 'Rinomodelação com Ácido Hialurônico',
      subtitle: 'Harmonia e Proporção Nasal',
      description:
        'Ajuste refinado do dorso e ponta nasal sem cirurgia valorizando o perfil facial com naturalidade',
      image: '/images/procedures/rinomodelacao.jpg',
      alt: 'Rinomodelação facial com ácido hialurônico',
    },
  ] as ProcedureItem[],

  // Quatro espaços de Antes e Depois (Reais e IA)
  clinicalResults: [
    {
      id: 1,
      title: 'Preenchimento Labial e Hidratação',
      area: 'Contorno e Projeção Labial',
      description:
        'Planejamento e volumização labial com foco em contorno anatômico natural, eversão suave do lábio superior e hidratação',
      beforeImage: '/images/results/case1-before.png',
      afterImage: '/images/results/case1-after.png',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
    {
      id: 2,
      title: 'Escultura Labial e Perfil Facial',
      area: 'Harmonização de Perfil',
      description:
        'Equilíbrio e alinhamento estético do perfil com projeção refinada dos lábios em simetria com as proporções faciais',
      beforeImage: '/images/results/case2-before.png',
      afterImage: '/images/results/case2-after.png',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
    {
      id: 3,
      title: 'Harmonização Mandibular e Queixo',
      area: 'Definição de Linha da Mandíbula',
      description:
        'Estruturação dos ângulos mandibulares com definição da linha mandibular e transição suave para o pescoço',
      beforeImage: '/images/results/case3-before.jpg',
      afterImage: '/images/results/case3-after.jpg',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
    {
      id: 4,
      title: 'Rejuvenescimento Facial e Olheiras',
      area: 'Terço Médio e Região Periorbital',
      description:
        'Atenuação da profundidade das olheiras e sulcos nasolabiais com descanso facial e luminosidade renovada',
      beforeImage: '/images/results/case4-before.jpg',
      afterImage: '/images/results/case4-after.jpg',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
  ] as ClinicalResultItem[],
};
