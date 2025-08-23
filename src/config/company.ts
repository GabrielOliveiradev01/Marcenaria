export const COMPANY_CONFIG = {
  // Informações de contato
  CONTACT: {
    WHATSAPP: {
      NUMBER: '5511999999999', // Número principal (formato internacional)
      DISPLAY: '(11) 99999-9999', // Formato de exibição
      MESSAGE: 'Olá! Gostaria de saber mais sobre seus serviços de marcenaria.'
    },
    PHONE: {
      NUMBER: '5511999999999',
      DISPLAY: '(11) 99999-9999'
    },
    EMAIL: 'contato@marcenaria.com.br',
    ADDRESS: 'Rua das Marcenarias, 123 - São Paulo, SP'
  },

  // Informações da empresa
  COMPANY: {
    NAME: 'Marcenaria Artesanal',
    DESCRIPTION: 'Especialistas em móveis sob medida e projetos personalizados',
    CNPJ: '12.345.678/0001-90',
    SINCE: '2010'
  },

  // Horário de funcionamento
  BUSINESS_HOURS: {
    MONDAY_FRIDAY: '08:00 - 18:00',
    SATURDAY: '08:00 - 12:00',
    SUNDAY: 'Fechado'
  },

  // Serviços oferecidos
  SERVICES: [
    'Móveis sob medida',
    'Cozinhas planejadas',
    'Closet e guarda-roupas',
    'Móveis para escritório',
    'Decoração e acabamentos',
    'Projetos com IA'
  ],

  // Redes sociais
  SOCIAL_MEDIA: {
    INSTAGRAM: '@marcenaria_artesanal',
    FACEBOOK: 'Marcenaria Artesanal',
    LINKEDIN: 'marcenaria-artesanal'
  }
} as const; 