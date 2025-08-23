export const WHATSAPP_API_CONFIG = {
  // Endpoint da API de WhatsApp
  ENDPOINT: 'https://ia-n8n.xmmqwd.easypanel.host/webhook/whatsapp',
  
  // Configurações da requisição
  REQUEST: {
    METHOD: 'POST',
    HEADERS: {
      'Content-Type': 'application/json',
    },
    TIMEOUT: 30000, // 30 segundos
  },
  
  // Estrutura dos dados enviados
  DATA_STRUCTURE: {
    prompt: 'string', // Descrição da ideia
    whatsapp: 'string', // Número do WhatsApp
  },
  
  // Mensagens de resposta
  MESSAGES: {
    SUCCESS: 'Solicitação enviada com sucesso! Nossa equipe entrará em contato via WhatsApp em breve.',
    ERROR: 'Erro ao enviar solicitação. Tente novamente.',
    VALIDATION: 'Por favor, preencha todos os campos obrigatórios.',
  },
  
  // Códigos de status HTTP esperados
  EXPECTED_STATUS: [200, 201, 202],
  
  // Tempo de resposta esperado
  EXPECTED_RESPONSE_TIME: 5000, // 5 segundos
} as const;

// Interface para os dados da requisição
export interface WhatsAppRequestData {
  prompt: string;
  whatsapp: string;
}

// Interface para a resposta da API
export interface WhatsAppResponseData {
  success?: boolean;
  message?: string;
  error?: string;
  data?: any;
}

// Função para validar os dados antes do envio
export const validateWhatsAppRequest = (data: WhatsAppRequestData): boolean => {
  return !!(data.prompt?.trim() && data.whatsapp?.trim());
};

// Função para formatar o número de WhatsApp
export const formatWhatsAppNumber = (number: string): string => {
  return number.replace(/\D/g, '');
};

// Função para criar a requisição para a API
export const createWhatsAppRequest = (prompt: string, whatsapp: string): WhatsAppRequestData => {
  return {
    prompt: prompt.trim(),
    whatsapp: formatWhatsAppNumber(whatsapp),
  };
}; 