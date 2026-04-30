// ========================================
// MÁQUINA ISP — SIMULADOR WHATSAPP WEB
// ========================================

// === SCRIPTS DOS AGENTES ===
// Edite o campo `text` dos bots pra customizar as respostas.
// { sender: 'user' } = placeholder (você digita qualquer coisa)
// { sender: 'bot', text: '...' } = resposta automática do bot

const AGENTS = {
  teo: {
    id: 'teo',
    name: 'TEO',
    role: 'Comercial',
    avatarText: 'T',
    avatarClass: 'avatar-teo',
    preview: 'Fechou no 500 MEGA + Prime 🎉',
    time: '14:32',
    script: [
      { sender: 'user' },
      { sender: 'bot', text: 'Oi! Seja bem-vindo 👋 Aqui é o TEO, assistente comercial da Máquina Fibra Internet.\n\nEm menos de 1 minuto eu verifico se temos cobertura aí e te mostro o melhor plano pra sua casa.\n\nPra começar, me manda seu CEP ou endereço completo (rua, número e bairro)?' },
      { sender: 'user' },
      { sender: 'bot', text: '🔍 Consultando sua região no nosso mapa de cobertura...' },
      { sender: 'bot', text: '✅ Ótima notícia! Seu endereço tá dentro da nossa área de fibra óptica premium.\n\n📍 CEP validado\n📡 Rede GPON disponível\n⚡ Latência média: 4ms\n🏠 Viabilidade técnica confirmada' },
      { sender: 'bot', text: 'Deixa eu te apresentar nosso plano TOP de linha, que é o mais indicado pra quem quer performance máxima:\n\n💎 *1 GIGA FIBRA PREMIUM*\nR$ 139,90/mês\n\n✓ Velocidade máxima garantida\n✓ Wi-Fi 6 de última geração\n✓ Suporta 20+ dispositivos simultâneos\n✓ Zero travamento em jogos e streaming 4K\n✓ IP fixo opcional (ideal pra câmeras e home office)\n\nEsse é o plano completo, pra quem não abre mão de nada. Topa fechar?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Claro, sem problema nenhum! Entendo totalmente. 🙂\n\nSó pra eu te indicar o plano certinho pro seu perfil, me ajuda com uma pergunta rapidinho:\n\nNa sua casa, quantas pessoas usam a internet ao mesmo tempo e o que costumam fazer mais? (trabalho em casa, streaming, jogos, estudos, câmeras...)' },
      { sender: 'user' },
      { sender: 'bot', text: '🎯 Entendi seu perfil perfeitamente. Deixa eu te mostrar uma opção que encaixa exatamente no que você precisa:\n\n🔸 *500 MEGA FIBRA*\nR$ 109,90/mês\n\n✓ Suporta tranquilamente 8 a 12 dispositivos\n✓ Perfeito pra home office + streaming em HD/4K\n✓ Latência baixa pra jogos online\n✓ Wi-Fi dual band (2.4GHz + 5GHz)\n\nEsse é o plano MAIS VENDIDO da nossa base — 87% dos clientes ficam nesse aqui porque tem a melhor relação custo-benefício.\n\nFaz mais sentido pro seu bolso?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Boa! 🎯 Escolha certeira. O 500 MEGA realmente é o queridinho da galera.\n\nAntes de gerar seu contrato, espera que eu tenho uma notícia boa pra você...' },
      { sender: 'bot', text: '🎁 *OFERTA RELÂMPAGO LIBERADA*\n\nComo você tá fechando o plano 500 MEGA hoje, eu consigo liberar uma condição EXCLUSIVA pra você:\n\n✨ *1 ANO DE AMAZON PRIME GRATUITO*\n(inclui Prime Video, frete grátis na Amazon, Amazon Music e muito mais)\n\n💰 Valor normal: R$ 179/ano\n💸 Pra você hoje: R$ 0,00\n\n⚠️ Atenção: essa condição é válida APENAS pra fechamentos feitos hoje nos planos 500 MEGA ou 1 GIGA. Amanhã volta ao valor cheio.\n\nPosso travar essa oferta no seu cadastro?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Show! 🚀 Oferta travada. Agora vamos finalizar rapidinho.\n\nPra gerar seu contrato, preciso só de 3 informações:\n\n1️⃣ Nome completo\n2️⃣ CPF\n3️⃣ Seu melhor e-mail (para enviar o contrato)' },
      { sender: 'user' },
      { sender: 'bot', text: '⏳ Processando seu contrato...' },
      { sender: 'bot', text: '🎉 PRONTO, CARLOS! Contrato fechado com sucesso!\n\n✅ Plano 500 MEGA ativado\n📄 Contrato enviado pro seu e-mail e WhatsApp\n🎁 Amazon Prime — 1 ano grátis (ativamos após instalação)\n💳 Primeira mensalidade só depois da instalação confirmada\n\nO nosso setor de agendamento técnico vai te ligar em alguns minutos para confirmar com você qual o melhor horário para enviarmos o técnico para a instalação, combinado?\n\nQualquer coisa, me chama aqui!\n\nBem-vindo à família Máquina Fibra! 💙' }
    ]
  },
  lia: {
    id: 'lia',
    name: 'LIA',
    role: 'Financeiro',
    avatarText: 'L',
    avatarClass: 'avatar-lia',
    preview: 'Pix gerado e enviado ✅',
    time: '13:45',
    script: [
      { sender: 'bot', text: 'Oi, Fernando! Tudo bem? 😊\n\nAqui é a LIA, assistente financeira da Máquina Fibra Internet.' },
      { sender: 'bot', text: 'Tô passando aqui com carinho pra avisar que sua fatura de R$ 109,90 venceu no dia 10 e ainda não identifiquei o pagamento no sistema. Já são 3 dias de atraso.\n\nAntes de qualquer coisa, tá tudo bem aí? Aconteceu algo que posso te ajudar a resolver?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Imagina, Fernando, acontece com todo mundo. 🙏 Obrigada por ser sincero comigo, isso faz toda a diferença.\n\nVou te dar 2 opções pra você escolher a que faz mais sentido pro seu bolso:\n\n1️⃣ Deslocar o vencimento pra dia 20 (sem multa, sem juros)\n2️⃣ Parcelar em 2x (R$ 54,95 agora + R$ 54,95 no próximo mês)\n\nQual te atende melhor?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Boa escolha! 🎯 Deslocar pra dia 20 é o mais tranquilo mesmo.\n\nAgora, como você prefere receber o novo boleto pra pagamento no dia 20?\n\n💠 PIX (código copia e cola — pagamento instantâneo)\n📄 Boleto bancário (código de barras tradicional)' },
      { sender: 'user' },
      { sender: 'bot', text: '✅ Vencimento ajustado pra dia 20/05. Sem multa, sem juros, sem dor de cabeça.\n\n💠 Gerando seu PIX agora...' },
      { sender: 'bot', text: '*PIX MÁQUINA FIBRA*\n\n💰 Valor: R$ 109,90\n📅 Vencimento: 20/05\n👤 Beneficiário: Máquina Fibra Internet LTDA\n\n*Código Copia e Cola:*\n\n```\n00020126580014br.gov.bcb.pix0136a629534e-7693-4846-b028-f142082d7b2952040000530398654061099905802BR5925MAQUINA FIBRA INTERNET6009SAO PAULO62070503***6304A1B2\n```\n\nÉ só copiar, colar no app do seu banco e confirmar. Leva 2 segundos. 💚' },
      { sender: 'bot', text: 'Fernando, guardei aqui uma coisinha importante: da próxima vez que apertar, me chama ANTES do vencimento, tá? Eu sempre consigo algum jeito de te ajudar sem você pagar multa ou juros.\n\nA gente é parceiro. Combinado? 🤝' },
      { sender: 'user' },
      { sender: 'bot', text: '💚 Tamo junto, Fernando! Qualquer coisa, me chama.' }
    ]
  },
  gabi: {
    id: 'gabi',
    name: 'GABI',
    role: 'Suporte',
    avatarText: 'G',
    avatarClass: 'avatar-gabi',
    preview: 'Resolvido pelo time técnico ✅',
    time: '11:20',
    script: [
      { sender: 'user' },
      { sender: 'bot', text: 'Oi, Juliana! 👋 Aqui é a GABI, do atendimento da Máquina Fibra.\n\nPuxa, sinto muito pelo transtorno! Vou te ajudar agora mesmo a tentar resolver isso.' },
      { sender: 'bot', text: 'Pra eu entender melhor o que tá acontecendo, me ajuda com 2 perguntas rápidas?\n\n1️⃣ Tá lento em todos os dispositivos ou só em um específico?\n2️⃣ Isso começou agora ou já tá acontecendo há alguns dias?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Entendi! 💡 Na maioria das vezes esse tipo de situação se resolve com um procedimento bem simples aqui do seu lado.\n\nVou te passar um passo a passo rapidinho. Consegue fazer agora?' },
      { sender: 'user' },
      { sender: 'bot', text: '🛠️ *PASSO A PASSO BÁSICO*\n\n1️⃣ Localize o modem/roteador da Máquina Fibra\n\n2️⃣ Tire ele da tomada (desligue completamente)\n\n3️⃣ Aguarde 30 segundos (importante, não pule!)\n\n4️⃣ Conecte novamente na tomada\n\n5️⃣ Aguarde 2 minutos até todas as luzes ficarem acesas de forma estável\n\n6️⃣ Teste a internet novamente\n\nFaz esse procedimento e me avisa o resultado, combinado? 💚' },
      { sender: 'user' },
      { sender: 'bot', text: 'Poxa, que pena que não resolveu com o procedimento básico. 😕\n\nSem problema! Nesse caso, vou te transferir agora pro nosso time técnico especializado. Eles têm acesso a ferramentas mais avançadas e vão investigar o que tá acontecendo com sua conexão.' },
      { sender: 'bot', text: '📤 *TRANSFERINDO ATENDIMENTO*\n\n👤 Cliente: Juliana\n⚙️ Categoria: Instabilidade de conexão\n📋 Observações: Procedimento básico realizado, sem sucesso\n👨🔧 Encaminhado para: Time Técnico Nível 2\n\nO técnico responsável vai te chamar aqui mesmo no WhatsApp assim que assumir o seu caso. Pode ficar tranquila! ✅' },
      { sender: 'bot', text: 'Vou ficar acompanhando sua situação e volto aqui assim que o time técnico concluir o atendimento, combinado? 💚\n\nQualquer urgência no meio tempo, é só me chamar.' },
      { sender: 'bot', text: 'Oi, Juliana! Voltei aqui com uma ótima notícia. 🎉\n\nAcabei de receber o retorno do time técnico sobre o seu caso.', delay: 2000 },
      { sender: 'bot', text: '✅ *ATENDIMENTO CONCLUÍDO*\n\n👨🔧 Técnico responsável: Equipe N2\n🔧 Diagnóstico: Instabilidade no canal Wi-Fi\n⚙️ Ação realizada: Otimização remota da rede e atualização de firmware\n📡 Status atual: Conexão estável e funcionando normalmente\n\nTudo foi resolvido de forma remota, sem precisar de visita técnica. Pode testar aí pra confirmar que tá tudo certinho! 🚀' },
      { sender: 'user' },
      { sender: 'bot', text: 'Que ótimo, Juliana! 💚 Fico muito feliz de saber que voltou a funcionar direitinho.\n\nAntes de encerrar, posso te fazer uma última perguntinha? É rapidinha e ajuda demais a gente a melhorar. 🙏\n\n📊 *Avaliação do atendimento*\n\nDe 0 a 10, o quanto você indicaria a Máquina Fibra pra um amigo ou familiar?' },
      { sender: 'user' },
      { sender: 'bot', text: '🌟 NOTA 10! Caramba, obrigada demais, Juliana!\n\nVou compartilhar sua avaliação com todo o time (inclusive o pessoal técnico que resolveu seu caso). Eles vão ficar muito felizes. 🥺💙\n\nQualquer coisinha que você notar de novo, me chama. Tô aqui 24h por dia. Bom resto de dia pra você!' }
    ]
  },
  noah: {
    id: 'noah',
    name: 'NOAH',
    role: 'Retenção',
    avatarText: 'N',
    avatarClass: 'avatar-noah',
    preview: 'Cliente salvo no cancelamento 💙',
    time: '09:15',
    script: [
      { sender: 'user' },
      { sender: 'bot', text: 'Oi, Roberto! Tudo bem? 👋\n\nAqui é o NOAH, do time de relacionamento da Máquina Fibra Internet. Recebi sua solicitação de cancelamento aqui no sistema.' },
      { sender: 'bot', text: 'Antes de qualquer coisa, quero te dizer que respeito totalmente sua decisão. Mas como você tá há bastante tempo com a gente, faço questão de pelo menos entender o motivo pra ver se tem algo que eu possa resolver antes.\n\nMe conta o que tá te levando a querer cancelar? Foi algum problema na nossa internet, questão financeira, mudança de endereço, ou algum outro motivo?' },
      { sender: 'user' },
      { sender: 'bot', text: 'Entendi, Roberto. Obrigado pela sinceridade, isso me ajuda muito a ver o que eu posso fazer aqui. 🙏\n\nDeixa eu te mostrar uma coisa antes de prosseguirmos com o cancelamento...' },
      { sender: 'bot', text: '📊 *SEU HISTÓRICO COMO CLIENTE*\n\n🗓️ Cliente desde: Março/2024 (14 meses)\n✅ Pagamentos em dia: 14/14 (100%)\n📞 Chamados abertos: apenas 2 em 14 meses\n⭐ Última avaliação: NPS 9\n\nCara, você é EXATAMENTE o tipo de cliente que a gente luta pra manter. Um parceiro de verdade. 💙' },
      { sender: 'bot', text: 'Justamente por isso, antes de efetivar o cancelamento, tenho autonomia pra te oferecer algo que normalmente não é liberado:' },
      { sender: 'bot', text: '🎁 *PROPOSTA DE FIDELIDADE EXCLUSIVA*\n\n📡 Upgrade do seu plano: de 300 para 400 MEGA\n💰 Custo adicional: R$ 0,00\n🗓️ Duração: permanente, enquanto você for nosso cliente\n⭐ Status VIP ativado na sua conta\n\nÉ uma forma da gente agradecer pela parceria de 14 meses e pedir uma nova chance de te entregar a experiência que você merece.\n\nO que você acha? Topa reconsiderar?' },
      { sender: 'user' },
      { sender: 'bot', text: '🎉 Que notícia ótima, Roberto! Fico muito feliz de continuar tendo você com a gente.\n\n🚀 Já acionei a equipe técnica para realizarem o seu upgrade no sistema.' },
      { sender: 'bot', text: '✅ TUDO ENCAMINHADO!\n\nAssim que os técnicos concluírem o aumento para os 400 MEGA, eles mesmos entrarão em contato com você por aqui para avisar e para você poder fazer os testes, ok?\n\n⭐ Sua conta já foi marcada como VIP.' },
      { sender: 'bot', text: '📌 O que significa ser VIP na Máquina Fibra:\n\n✨ Prioridade no suporte (atendimento em até 2 minutos)\n🔧 Visitas técnicas gratuitas quando precisar\n📅 Aviso antecipado de qualquer manutenção que afete sua região\n🎁 Benefícios exclusivos sempre que liberarmos novas vantagens\n\nVou continuar acompanhando sua experiência de perto. Se em algum momento você perceber qualquer coisa fora do normal, me chama direto aqui nesse número. Eu respondo pessoalmente.' },
      { sender: 'bot', text: 'Obrigado pela confiança renovada, Roberto. Gente como você faz a Máquina ser o que é hoje. 💙\n\nPode contar comigo sempre.' }
    ]
  }
};

// === STATE ===
const state = {
  activeAgent: null,
  conversations: {}
};

Object.keys(AGENTS).forEach(id => {
  state.conversations[id] = { step: 0, messages: [] };
});

// === DOM REFERENCES ===
const el = {
  chatList: document.getElementById('chatList'),
  emptyState: document.getElementById('emptyState'),
  chatContainer: document.getElementById('chatContainer'),
  chatAvatar: document.getElementById('chatAvatar'),
  chatHeaderName: document.getElementById('chatHeaderName'),
  chatHeaderStatus: document.getElementById('chatHeaderStatus'),
  messagesArea: document.getElementById('messagesArea'),
  messageInput: document.getElementById('messageInput'),
  sendBtn: document.getElementById('sendBtn'),
  resetBtn: document.getElementById('resetBtn')
};

// === UTILS ===
function getCurrentTime() {
  const now = new Date();
  return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function scrollToBottom() {
  requestAnimationFrame(() => {
    el.messagesArea.scrollTop = el.messagesArea.scrollHeight;
  });
}

// === RENDER ===
function renderChatList() {
  el.chatList.innerHTML = '';
  Object.values(AGENTS).forEach(agent => {
    const item = document.createElement('div');
    item.className = 'chat-item' + (state.activeAgent === agent.id ? ' active' : '');
    item.onclick = () => selectAgent(agent.id);
    item.innerHTML = `
      <div class="avatar ${agent.avatarClass}">${agent.avatarText}</div>
      <div class="chat-details">
        <div class="chat-row-top">
          <div class="chat-name">${agent.name} — ${agent.role}</div>
          <div class="chat-time">${agent.time}</div>
        </div>
        <div class="chat-preview">${agent.preview}</div>
      </div>
    `;
    el.chatList.appendChild(item);
  });
}

function renderDateSeparator() {
  const sep = document.createElement('div');
  sep.className = 'date-separator';
  sep.textContent = 'HOJE';
  el.messagesArea.appendChild(sep);
}

function renderMessage(msg) {
  const div = document.createElement('div');
  div.className = 'message ' + msg.sender;
  const content = document.createElement('span');
  content.innerHTML = escapeHTML(msg.text).replace(/\n/g, '<br>');
  div.appendChild(content);
  const meta = document.createElement('div');
  meta.className = 'message-meta';
  meta.innerHTML = `<span>${msg.time}</span>${msg.sender === 'user' ? '<span class="check-marks">✓✓</span>' : ''}`;
  div.appendChild(meta);
  el.messagesArea.appendChild(div);
  scrollToBottom();
}

function renderConversation() {
  el.messagesArea.innerHTML = '';
  renderDateSeparator();
  state.conversations[state.activeAgent].messages.forEach(msg => renderMessage(msg));
}

// === TYPING INDICATOR ===
let typingBubble = null;

function showTyping() {
  el.chatHeaderStatus.textContent = 'digitando...';
  el.chatHeaderStatus.classList.add('typing');
  if (typingBubble) return;
  typingBubble = document.createElement('div');
  typingBubble.className = 'typing-bubble';
  typingBubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  el.messagesArea.appendChild(typingBubble);
  scrollToBottom();
}

function hideTyping() {
  el.chatHeaderStatus.textContent = 'online';
  el.chatHeaderStatus.classList.remove('typing');
  if (typingBubble) {
    typingBubble.remove();
    typingBubble = null;
  }
}

// === CHAT LOGIC ===
function selectAgent(id) {
  state.activeAgent = id;
  const agent = AGENTS[id];

  el.emptyState.classList.add('hidden');
  el.chatContainer.classList.remove('hidden');

  el.chatAvatar.className = 'avatar ' + agent.avatarClass;
  el.chatAvatar.textContent = agent.avatarText;
  el.chatHeaderName.textContent = agent.name + ' — ' + agent.role;
  el.chatHeaderStatus.textContent = 'online';
  el.chatHeaderStatus.classList.remove('typing');

  hideTyping();
  renderChatList();
  renderConversation();
  el.messageInput.focus();

  const conv = state.conversations[id];
  if (conv.messages.length === 0 && agent.script[0].sender === 'bot') {
    setTimeout(() => processBotMessages(), 1200);
  }
}

function processBotMessages() {
  const agent = AGENTS[state.activeAgent];
  const conv = state.conversations[state.activeAgent];
  if (conv.step >= agent.script.length) return;
  const next = agent.script[conv.step];
  if (next.sender !== 'bot') return;

  const preDelay = next.delay || 0;

  setTimeout(() => {
    showTyping();
    // Ajuste a velocidade: min=1200ms, velocidade=25ms/char, max=2800ms
    const typingTime = Math.min(Math.max(1200, next.text.length * 25), 2800);

    setTimeout(() => {
      hideTyping();
      const msg = { sender: 'bot', text: next.text, time: getCurrentTime() };
      conv.messages.push(msg);
      renderMessage(msg);
      conv.step++;
      setTimeout(() => {
        if (conv.step < agent.script.length && agent.script[conv.step].sender === 'bot') {
          processBotMessages();
        }
      }, 700);
    }, typingTime);
  }, preDelay);
}

function sendUserMessage() {
  const text = el.messageInput.value.trim();
  if (!text || !state.activeAgent) return;
  const agent = AGENTS[state.activeAgent];
  const conv = state.conversations[state.activeAgent];
  if (conv.step >= agent.script.length) return;
  if (agent.script[conv.step].sender !== 'user') return;

  const msg = { sender: 'user', text: text, time: getCurrentTime() };
  conv.messages.push(msg);
  renderMessage(msg);
  conv.step++;
  el.messageInput.value = '';

  setTimeout(() => {
    if (conv.step < agent.script.length && agent.script[conv.step].sender === 'bot') {
      processBotMessages();
    }
  }, 500);
}

function resetConversation() {
  if (!state.activeAgent) return;
  const agent = AGENTS[state.activeAgent];
  state.conversations[state.activeAgent] = { step: 0, messages: [] };
  hideTyping();
  renderConversation();
  el.messageInput.value = '';
  el.messageInput.focus();
  if (agent.script[0].sender === 'bot') {
    setTimeout(() => processBotMessages(), 1200);
  }
}

// === EVENTS ===
el.sendBtn.addEventListener('click', sendUserMessage);
el.messageInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendUserMessage();
  }
});
el.resetBtn.addEventListener('click', resetConversation);

// === INIT ===
renderChatList();
