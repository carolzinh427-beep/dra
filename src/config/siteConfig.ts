/**
 * CONFIGURAÇÃO CENTRAL — DRA. LETICIA STEEGMULLER
 * Edite aqui os dados de contato, procedimentos, fotografia da profissional
 * e os 4 casos clínicos de Antes e Depois.
 */

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
    name: 'Dra. Leticia Steegmuller',
    shortName: 'Leticia Steegmuller',
    title: 'Biomédica Esteta',
    credentials: 'Biomédica Esteta | CRBM/DF 23260',
    institutionalPhrase: 'Naturalidade, técnica e planejamento em cada detalhe.',
    heroSupportText:
      'Cuidado individualizado e planejamento estético para valorizar a beleza com equilíbrio e atenção aos detalhes.',
    // Fotografia da hero: utilize arquivo com fundo removido (PNG transparente)
    heroPhoto: '/dra-leticia-cutout.png',
    heroPhotoFallback: '/dra-leticia-original.png',
    heroPhotoAlt: 'Dra. Leticia Steegmuller - Biomedicina Estética',
  },

  // Canais oficiais de atendimento
  contact: {
    phoneRaw: '61920044305',
    phoneFormatted: '(61) 92004-4305',
    whatsappMessage:
      'Olá, Dra. Leticia! Gostaria de saber mais sobre os procedimentos e verificar a disponibilidade para agendar uma avaliação.',
    // Link direto oficial codificado
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
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
  ],

  // Procedimentos confirmados
  procedures: [
    {
      id: 'harmonizacao-facial',
      title: 'Harmonização Facial',
      subtitle: 'Equilíbrio e Simetria',
      description:
        'Planejamento tridimensional minucioso das proporções do rosto para realçar traços naturais com sutileza, harmonia e refinamento estético.',
      image: '/images/procedures/harmonizacao.jpg',
      alt: 'Harmonização facial com naturalidade e proporção',
    },
    {
      id: 'bioestimuladores',
      title: 'Bioestimuladores de Colágeno',
      subtitle: 'Sustentação e Firmeza',
      description:
        'Estímulo gradual e biológico da síntese natural de colágeno, promovendo recuperação da densidade da pele, firmeza profunda e viço duradouro.',
      image: '/images/procedures/bioestimulador.jpg',
      alt: 'Tratamento com bioestimuladores de colágeno',
    },
    {
      id: 'toxina-botulinica',
      title: 'Toxina Botulínica',
      subtitle: 'Prevenção e Suavização',
      description:
        'Atenuação precisa e elegante de rugas dinâmicas e linhas de expressão, preservando integralmente a mímica facial e a autenticidade das emoções.',
      image: '/images/procedures/toxina.jpg',
      alt: 'Aplicação sutil de toxina botulínica para linhas de expressão',
    },
    {
      id: 'preenchimento-labial',
      title: 'Preenchimento Labial e Facial',
      subtitle: 'Definição e Hidratação',
      description:
        'Restauração estratégica de contornos e volumes faciais com ácido hialurônico selecionado, conferindo hidratação tecidual e acabamento primoroso.',
      image: '/images/procedures/preenchimento.jpg',
      alt: 'Preenchimento labial refinado com foco em naturalidade',
    },
  ] as ProcedureItem[],

  // Exatamente quatro espaços para imagens de Antes e Depois
  // Instruções de substituição:
  // Para exibir fotos reais de casos clínicos, insira os arquivos em /public/images/results/
  // e altere os caminhos abaixo para os respectivos nomes de arquivos (ex: case1-before.jpg e case1-after.jpg).
  clinicalResults: [
    {
      id: 1,
      title: 'Preenchimento Labial e Hidratação',
      area: 'Contorno e Projeção Labial',
      description:
        'Planejamento e volumização labial com foco em contorno anatômico natural, eversão suave do lábio superior e acabamento hidratado.',
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
        'Equilíbrio e alinhamento estético do perfil com projeção equilibrada dos lábios em simetria com as proporções nasomentonianas.',
      beforeImage: '/images/results/case2-before.png',
      afterImage: '/images/results/case2-after.png',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
    {
      id: 3,
      title: 'Planejamento Labial e Hidratação',
      area: 'Contorno Labial e Proporção',
      description:
        'Definição do arco do cupido e hidratação profunda sem hipercorreção, priorizando proporções harmônicas.',
      beforeImage: '/images/results/case3-before.svg',
      afterImage: '/images/results/case3-after.svg',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
    {
      id: 4,
      title: 'Tratamento de Linhas de Expressão',
      area: 'Terço Superior da Face',
      description:
        'Suavização preventiva e terapêutica de linhas dinâmicas frontais com descanso facial imediato.',
      beforeImage: '/images/results/case4-before.svg',
      afterImage: '/images/results/case4-after.svg',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
    },
  ] as ClinicalResultItem[],
};
