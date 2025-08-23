import React, { useState } from 'react';
import { Bot, Send, Lightbulb, Ruler, Palette, Image as ImageIcon, X, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { WHATSAPP_API_CONFIG, createWhatsAppRequest, validateWhatsAppRequest } from '../config/whatsapp-api';

const ProjectCreator = () => {
  const [projectDescription, setProjectDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<string>('');
  
  // Estados para o popup de imagens
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isSubmittingImage, setIsSubmittingImage] = useState(false);

  const handleGenerateSuggestions = async () => {
    if (!projectDescription.trim()) return;

    setIsGenerating(true);
    
    // Simulação da integração com ChatGPT (substituir pela API real da OpenAI)
    setTimeout(() => {
      const mockSuggestions = `Com base na sua descrição "${projectDescription}", aqui estão algumas sugestões personalizadas:

🏠 **Conceito de Design:**
• Estilo moderno minimalista com elementos em madeira natural
• Cores neutras (branco, cinza, madeira clara) com detalhes em dourado
• Acabamentos premium e linhas clean

📐 **Medidas Recomendadas:**
• Altura padrão dos armários: 2,10m
• Profundidade das prateleiras: 35-40cm
• Espaçamento entre prateleiras: 30-35cm

🎨 **Materiais Sugeridos:**
• MDF revestido em laminado melamínico branco
• Detalhes em madeira freijó ou carvalho
• Puxadores em metal dourado fosco
• Iluminação LED embutida

✨ **Funcionalidades Especiais:**
• Sistema de fechamento suave (soft close)
• Divisórias internas ajustáveis
• Espelhos com moldura integrada
• Tomadas e USB integrados`;

      setSuggestions(mockSuggestions);
      setIsGenerating(false);
    }, 2000);
  };

  const handleOpenImagePopup = () => {
    setImagePrompt(projectDescription); // Pré-preenche com a descrição do projeto
    setShowImagePopup(true);
  };

  const handleSubmitImageRequest = async () => {
    if (!validateWhatsAppRequest({ prompt: imagePrompt, whatsapp: whatsappNumber })) {
      alert(WHATSAPP_API_CONFIG.MESSAGES.VALIDATION);
      return;
    }

    setIsSubmittingImage(true);
    
    try {
      // Preparar dados para enviar para a API
      const requestData = createWhatsAppRequest(imagePrompt, whatsappNumber);

      console.log('Enviando dados para API WhatsApp:', requestData);

      // Enviar para a API de WhatsApp
      const response = await fetch(WHATSAPP_API_CONFIG.ENDPOINT, {
        method: WHATSAPP_API_CONFIG.REQUEST.METHOD,
        headers: WHATSAPP_API_CONFIG.REQUEST.HEADERS,
        body: JSON.stringify(requestData),
      });

      console.log('Resposta da API WhatsApp:', response.status, response.statusText);

      if (!WHATSAPP_API_CONFIG.EXPECTED_STATUS.includes(response.status as 200 | 201 | 202)) {
        const errorText = await response.text();
        console.error('Erro HTTP:', response.status, errorText);
        throw new Error(`Erro na API: ${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      console.log('Dados recebidos da API:', responseData);

      // Fechar popup e mostrar confirmação
      setShowImagePopup(false);
      setImagePrompt('');
      setWhatsappNumber('');
      
      // Mostrar mensagem de sucesso
      alert(WHATSAPP_API_CONFIG.MESSAGES.SUCCESS);
      
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      alert(WHATSAPP_API_CONFIG.MESSAGES.ERROR);
    } finally {
      setIsSubmittingImage(false);
    }
  };

  return (
    <section id="project-creator" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-white">Crie Seu</span>{' '}
            <span className="text-yellow-500">Projeto</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descreva sua ideia e receba sugestões personalizadas de design, medidas e layout 
            para o seu projeto dos sonhos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-white">Assistente de Design</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Descreva seu projeto ideal:
                    </label>
                    <textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Ex: Quero uma cozinha moderna com ilha central, armários brancos e detalhes em madeira. O espaço tem 4x3 metros..."
                      className="w-full h-32 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={handleGenerateSuggestions}
                      disabled={!projectDescription.trim() || isGenerating}
                      className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                          <span>Gerando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Sugestões</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleOpenImagePopup}
                      disabled={!projectDescription.trim()}
                      className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <ImageIcon className="w-5 h-5" />
                      <span>Gerar Imagens</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                  <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold">Ideias Criativas</h4>
                  <p className="text-gray-400 text-sm">Sugestões inovadoras</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                  <Ruler className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold">Medidas Precisas</h4>
                  <p className="text-gray-400 text-sm">Dimensões otimizadas</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                  <Palette className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold">Paleta de Cores</h4>
                  <p className="text-gray-400 text-sm">Harmonias perfeitas</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                  <ImageIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="text-white font-semibold">Gerar Imagens</h4>
                  <p className="text-gray-400 text-sm">Visualizações com IA</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Sugestões Personalizadas</h3>
              
              {suggestions ? (
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                      {suggestions}
                    </pre>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      Solicitar Orçamento
                    </button>
                    <button className="flex-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition-colors duration-300">
                      Nova Consulta
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bot className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Descreva seu projeto para receber sugestões personalizadas do nosso assistente de design
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-yellow-200 text-sm text-center">
              <strong>Nota:</strong> Este é um assistente virtual para inspiração inicial. 
              Para gerar imagens personalizadas com IA, clique em "Gerar Imagens" e preencha o formulário. 
              As imagens serão enviadas diretamente para seu WhatsApp em até 24 horas úteis.
            </p>
          </div>
        </div>

        {/* Popup Modal para Imagens */}
        {showImagePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header do Modal */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-semibold text-white">Gerar Imagens</h3>
                </div>
                <button
                  onClick={() => setShowImagePopup(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Formulário */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="text-red-400">*</span> Descreva sua ideia em detalhes:
                  </label>
                  <textarea
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="Ex: Cozinha moderna com ilha central, armários brancos e detalhes em madeira natural. O espaço tem 4x3 metros, com pia dupla, fogão de 4 bocas e geladeira embutida. Estilo minimalista com iluminação LED embutida..."
                    className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Quanto mais detalhada a descrição, melhor será o resultado da IA
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="text-red-400">*</span> Número do WhatsApp:
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder={COMPANY_CONFIG.CONTACT.WHATSAPP.DISPLAY}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Nossa equipe entrará em contato neste número via WhatsApp
                  </p>
                </div>

                {/* Informações sobre o serviço */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-200">
                      <p className="font-medium mb-1">Como funciona:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Descreva sua ideia em detalhes</li>
                        <li>• Envie sua solicitação para nossa equipe</li>
                        <li>• Nossa equipe gera imagens personalizadas com IA</li>
                        <li>• As imagens são enviadas via WhatsApp</li>
                        <li>• Resposta em até 24 horas úteis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contato da empresa */}
                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                  <div className="text-center text-sm text-gray-300">
                    <p className="font-medium mb-1">{COMPANY_CONFIG.COMPANY.NAME}</p>
                    <p className="text-xs text-gray-400">
                      WhatsApp: {COMPANY_CONFIG.CONTACT.WHATSAPP.DISPLAY}
                    </p>
                    <p className="text-xs text-gray-400">
                      Horário: {COMPANY_CONFIG.BUSINESS_HOURS.MONDAY_FRIDAY}
                    </p>
                  </div>
                </div>

                {/* Botões de ação */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSubmitImageRequest}
                    disabled={isSubmittingImage || !imagePrompt.trim() || !whatsappNumber.trim()}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-4 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmittingImage ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        <span>Enviar Solicitação</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setShowImagePopup(false)}
                    className="flex-1 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-3 rounded-lg transition-colors duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
};

export default ProjectCreator;