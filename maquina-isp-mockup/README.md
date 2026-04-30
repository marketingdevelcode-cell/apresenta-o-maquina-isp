# MÁQUINA ISP — Mockup WhatsApp

Simulador de conversas de WhatsApp com os 4 agentes da Máquina ISP (TEO, LIA, GABI, NOAH). Projetado pra gravação de tela em demos e vídeos motion.

## Estrutura do projeto

```
maquina-isp-mockup/
├── README.md              ← este arquivo
├── desktop/               ← versão WhatsApp Web (notebook)
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── mobile/                ← versão WhatsApp Mobile (celular iPhone)
    ├── index.html
    ├── styles.css
    └── app.js
```

---

## Como rodar localmente

### Opção 1 — Método mais simples (duplo clique)

Não precisa instalar nada. É só:

1. Abrir a pasta `desktop/` ou `mobile/`
2. Duplo clique no arquivo `index.html`
3. Abre automaticamente no seu navegador padrão

Funciona em qualquer navegador moderno (Chrome, Edge, Firefox, Safari, Brave).

### Opção 2 — Com servidor local (recomendado pra edição no Antigravity)

Se você for editar o código e quiser live reload (atualização automática ao salvar), use um servidor local.

**Com Python (já vem instalado na maioria dos sistemas):**

```bash
# Dentro da pasta do projeto
cd maquina-isp-mockup

# Python 3
python -m http.server 8000

# Acesse no navegador
# Desktop: http://localhost:8000/desktop/
# Mobile:  http://localhost:8000/mobile/
```

**Com Node.js (se tiver instalado):**

```bash
# Instala o serve globalmente (só uma vez)
npm install -g serve

# Dentro da pasta do projeto
cd maquina-isp-mockup
serve .

# Abre o link que aparecer no terminal
```

**Com VSCode (se for editar lá):**

1. Instale a extensão **Live Server** (do Ritwick Dey)
2. Clique com o botão direito no `index.html`
3. Selecione **"Open with Live Server"**
4. Qualquer alteração salva recarrega o browser automaticamente

**Com Antigravity:**

O Antigravity detecta automaticamente projetos web estáticos. É só abrir a pasta do projeto e pedir pra ele rodar o preview ou pedir ajuda pra customizar os arquivos.

---

## Como usar o mockup

### Fluxo básico

1. Abra o mockup (desktop ou mobile)
2. Clique em um agente na lista
3. Digite **qualquer coisa** no campo de mensagem
4. Pressione Enter (ou botão enviar)
5. O agente responde automaticamente com a próxima mensagem pré-configurada do roteiro

### O que você digita em cada agente

#### 🔵 TEO (Comercial)

Agente espera você falar primeiro.

1. `Oi, tem internet aí na minha rua?`
2. `Rua das Palmeiras, 450, bairro Centro`
3. `Quero o de 500`
4. `Amanhã 10h. Meu nome é Carlos Silva, CPF 123.456.789-00`

#### 🟢 LIA (Financeiro)

**Ela inicia a conversa sozinha** ao abrir o chat.

1. `Oi LIA, tá apertado esse mês, vou conseguir pagar só dia 20`
2. `A opção 2 é melhor pra mim`
3. `Muito obrigado LIA, salvou!`

#### 🌸 GABI (Suporte)

Agente espera você falar primeiro.

1. `Tá uma merda essa internet hoje, travando tudo`
2. `Ok`
3. `Nossa, voltou rapidíssimo! 100 mega funcionando normal`
4. `10! Atendimento foi rápido demais`

#### 🟣 NOAH (Retenção)

**Ele inicia a conversa sozinho com 2 mensagens seguidas** (aguarde ~5 segundos).

1. `Cara, pra ser sincero eu tava até pensando em cancelar. Vou aceitar as duas coisas`
2. `Caramba, que atendimento. Mudei de ideia, vou continuar.`

---

## Recursos do mockup

- Interface idêntica ao WhatsApp (Web na versão desktop, iOS mobile na versão celular)
- Avatares coloridos únicos pra cada agente
- Status "digitando..." no cabeçalho
- Bolha com pontinhos animados enquanto o bot "digita"
- Marcas de lido (✓✓ azul) nas mensagens do usuário
- Timestamps em tempo real
- Separador de data "HOJE"
- Navegação entre lista de conversas e chat (mobile)
- Botão de reiniciar conversa (pra regravar)

---

## Customização

### Alterar mensagens dos agentes

Abra `desktop/app.js` ou `mobile/app.js`. Procure pelo objeto `AGENTS` no topo do arquivo.

Cada agente tem um array `script`. Cada item do array é uma mensagem:

```javascript
{ sender: 'user' }                       // placeholder - você digita qualquer coisa
{ sender: 'bot', text: 'Mensagem...' }   // bot responde com este texto
```

Edite o `text:` das mensagens do bot pra personalizar.

### Alterar nome, cargo ou preview

No mesmo arquivo `app.js`, dentro do objeto de cada agente:

- `name` — nome do agente (TEO, LIA, etc.)
- `role` — cargo exibido (Comercial, Financeiro, etc.)
- `preview` — última mensagem mostrada na lista de conversas
- `time` — horário exibido ao lado do nome na lista

### Alterar cores dos avatares

Em `styles.css`, procure pelas classes:

```css
.avatar-teo { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.avatar-lia { background: linear-gradient(135deg, #14b8a6, #0f766e); }
.avatar-gabi { background: linear-gradient(135deg, #ec4899, #be185d); }
.avatar-noah { background: linear-gradient(135deg, #a855f7, #6d28d9); }
```

Substitua os hex pelas cores que quiser.

### Ajustar velocidade de digitação do bot

No `app.js`, procure:

```javascript
const typingTime = Math.min(Math.max(1200, next.text.length * 25), 2800);
```

- `1200` = tempo mínimo em milissegundos
- `25` = tempo por caractere
- `2800` = tempo máximo

Reduza pra digitação mais rápida, aumente pra mais lenta.

### Adicionar novos agentes

Em `app.js`, adicione um novo objeto dentro de `AGENTS`:

```javascript
kai: {
  id: 'kai',
  name: 'KAI',
  role: 'Marketing',
  avatarText: 'K',
  avatarClass: 'avatar-kai',
  preview: 'Preview da última mensagem',
  time: '16:00',
  script: [
    { sender: 'user' },
    { sender: 'bot', text: 'Olá! ...' },
    // ...
  ]
}
```

Em `styles.css`, adicione a classe da cor:

```css
.avatar-kai { background: linear-gradient(135deg, #f59e0b, #b45309); }
```

O novo agente aparece automaticamente na lista.

---

## Dicas de gravação

### Preparação

1. **Teste cada agente uma vez antes de gravar** pra conhecer o fluxo
2. **Modo tela cheia** (F11) pra esconder a barra do navegador
3. **Feche notificações** e outras abas
4. **Zoom da página** pode ser ajustado com Ctrl + "+" ou Ctrl + "-"
5. **Mobile:** o celular aparece centralizado em fundo escuro — ideal pra dar zoom e deixá-lo grande na gravação

### Durante a gravação

1. **Digite naturalmente** — não muito rápido pra o espectador conseguir ler
2. **Aguarde o bot terminar** antes de digitar a próxima mensagem
3. **Use o botão "Reiniciar conversa"** se errar uma tomada
4. **Grave tudo em uma sessão** e corte na pós-produção (CapCut, Premiere)

### Pós-produção (CapCut)

- Corte os tempos mortos entre cliques
- Zoom sutil nos momentos-chave (viabilidade do TEO, reset da GABI, mensagem inicial do NOAH)
- Destaque com seta/círculo o fato do NOAH iniciar a conversa sozinho
- Legendas na parte inferior (70% do público assiste sem som)
- Música de fundo com pulso eletrônico leve

---

## Problemas comuns

### "O arquivo abriu mas não carrega estilo/script"

Causa provável: você moveu os arquivos de pasta e quebrou a referência. Os 3 arquivos (`index.html`, `styles.css`, `app.js`) precisam estar na mesma pasta.

### "Não consigo digitar no campo de mensagem"

Clique dentro do campo pra dar foco. Se ainda não funcionar, dá um F5 pra recarregar a página.

### "O bot não responde ao que eu digito"

Isso acontece quando o script chega ao fim. Clique em "Reiniciar conversa" pra começar do zero.

### "Quero adaptar pra WebSocket/LLM real"

Nesse caso, o código é uma base. Você precisará substituir a função `processBotMessages()` por uma chamada à API da OpenAI, Anthropic, ou similar. É um bom próximo passo pra expansão no Antigravity.

---

## Levando pro Antigravity

O código é vanilla JavaScript puro (sem React, sem build step, sem dependências). Compatível com qualquer editor e ambiente.

Ideias pra expansão no Antigravity:

- Backend em Node.js/Express pra persistir conversas simuladas
- Integração com API de LLM (OpenAI, Claude) pra respostas dinâmicas
- Painel administrativo pra criar/editar scripts visualmente
- Export em vídeo automático
- Autenticação e múltiplas contas de provedores
- Dashboard com analytics simuladas
- Versão PWA (Progressive Web App) pra instalar como app

---

*Arquivos gerados pra simular demos da Máquina ISP em gravações de tela.*
