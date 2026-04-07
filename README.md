# FIAP Checkpoint Tracker

Um aplicativo mobile desenvolvido em **React Native com Expo** que permite aos alunos da FIAP acompanhar as datas dos checkpoints e visualizar as disciplinas de forma intuitiva e organizada.

## 🎯 Sobre o Projeto

O **FIAP Checkpoint Tracker** resolve um problema real do cotidiano da faculdade: a dificuldade em acompanhar as datas de checkpoints de múltiplas disciplinas. O aplicativo centraliza todas as informações em um único lugar, oferecendo uma visualização clara e hierárquica dos prazos, permitindo que alunos planejem melhor seus estudos.

### Problema Identificado

Alunos da FIAP frequentemente enfrentam dificuldades em:
- Acompanhar múltiplos checkpoints de diferentes disciplinas
- Visualizar prazos de forma clara e organizada
- Identificar checkpoints próximos ou atrasados
- Conhecer os professores responsáveis por cada disciplina

### Solução Proposta

Um aplicativo mobile com:
- **Tela Home:** Lista de checkpoints ordenados por data, com indicadores de urgência
- **Tela Disciplinas:** Visualização de todas as disciplinas com informações do professor e quantidade de checkpoints
- **Tela Perfil:** Estatísticas de progresso e configurações do usuário

## 👥 Integrantes do Grupo

- **Gabriel Galerani Almeida** - RM: 557421
- **Gabriel Dias** - RM: 556830
- **Gustavo Teixeira** - RM: 557876
- **Pedro Paulo** - RM: 554880
- **Leonardo Taschin** - RM: 554583



## 🛠️ Requisitos Técnicos

### Obrigatórios ✅

- ✅ Projeto iniciado com **Expo CLI** e estrutura organizada
- ✅ Uso de componentes core do React Native: `View`, `Text`, `Image`, `TouchableOpacity`
- ✅ **Componentização** - Componentes reutilizáveis (`CheckpointCard`, `SubjectBadge`)
- ✅ Gerenciamento de estado com **`useState`** e **`useEffect`**
- ✅ Estilização com **`StyleSheet`** - Layout consistente e agradável
- ✅ **3 telas distintas** com navegação implementada via **Expo Router**:
  - Home (Checkpoints)
  - Disciplinas (Subjects)
  - Perfil (Profile)
- ✅ Navegação funcional entre todas as telas via bottom tab navigation

### Diferenciais Implementados ✨

- ✅ **Feedback visual ao usuário:** Loading states, mensagens de urgência, badges de status
- ✅ **Tratamento de estados vazios:** Tela de "nenhum checkpoint encontrado"
- ✅ **Responsividade:** Flexbox bem estruturado com suporte a diferentes tamanhos de tela
- ✅ **Tema visual coerente:** Paleta de cores FIAP (#003DA5 azul, #FF6B35 laranja)
- ✅ **Ícones e indicadores visuais:** Lucide React Native para ícones consistentes
- ✅ **Pull-to-refresh:** Atualização de dados na tela Home
- ✅ **Design System:** Constantes de cores, tipografia e espaçamento centralizadas

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Expo CLI** - Instale globalmente com:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go** - Aplicativo para testar em seu celular (disponível na App Store ou Google Play)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/fiap-mdi-cp1-checkpoint-tracker.git
   cd fiap-mdi-cp1-checkpoint-tracker
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

4. **Execute em seu dispositivo:**
   - **Android:** Pressione `a` no terminal ou escaneie o QR code com o Expo Go
   - **iOS:** Pressione `i` no terminal ou escaneie o QR code com a câmera do iPhone
   - **Web:** Pressione `w` no terminal

5. **Parar o servidor:**
   Pressione `Ctrl + C` no terminal

## 📱 Demonstração

### Telas do Aplicativo

#### 1. Tela Home - Checkpoints

A tela inicial exibe:
- **Header cinza FIAP** com logo e título
- **Lista de checkpoints** ordenados por data
- **Cards com informações:** Disciplina, título, descrição, data e urgência
- **Barra lateral colorida** identificando a disciplina
- **Badge de urgência** mostrando dias até o checkpoint
- **Pull-to-refresh** para atualizar dados
- **Botão "6 checkpoints"** clicável que abre calendário interativo

![Tela Home - Checkpoints](<img width="1280" height="720" alt="tela-home_1951fe0a" src="https://github.com/user-attachments/assets/467ca1c1-fc62-4284-8af6-d39493030e3d" />
)
<img width="1280" height="720" alt="tela-home_1951fe0a (1)" src="https://github.com/user-attachments/assets/cdac355a-9388-42e9-8708-bded15d95e5f" />

#### 2. Tela Disciplinas

A tela de disciplinas apresenta:
- **Header magenta FIAP** com contagem de disciplinas
- **Cards de disciplinas** com cores únicas (MDI azul, ES laranja, BD roxo, AS verde, SI amarelo)
- **Informações do professor** para cada disciplina
- **Quantidade de checkpoints** por disciplina
- **Design responsivo** que se adapta a diferentes tamanhos

![Tela Disciplinas](https://d2xsxph8kpxj0f.cloudfront.net/310519663122670232/HgSZo4zUMXRCXeLStHkvT2/tela-disciplinas_aa87cb69.png)
![tela-disciplinas_aa87cb69](https://github.com/user-attachments/assets/d56196da-edf3-44e3-a8c5-f93b063f14e4)

#### 3. Tela Perfil

A tela de perfil contém:
- **Avatar e informações** do usuário (Aluno FIAP)
- **Estatísticas de progresso:** Checkpoints concluídos (0), em progresso (0), próximos (6)
- **Menu de configurações** com opções de Preferências, Ajuda e Suporte, Sair
- **Informações da versão** do aplicativo (v1.0.0)

![Tela Perfil](https://d2xsxph8kpxj0f.cloudfront.net/310519663122670232/HgSZo4zUMXRCXeLStHkvT2/tela-perfil_ddca85d2.png)
![tela-perfil_ddca85d2 (1)](https://github.com/user-attachments/assets/bdcb0f2d-2910-4a00-824c-f8873ebeb145)

#### 4. Tela Calendário Interativo

O calendário interativo exibe:
- **Header cinza escuro** com título "Calendário de Checkpoints"
- **Calendário do mês** com datas marcadas em amarelo (com checkpoints)
- **Navegação entre meses** com setas
- **Exibição de checkpoints** para a data selecionada
- **Fundo preto** para melhor contraste
- **Botão de fechar** (X) no canto superior direito

![Tela Calendário](https://d2xsxph8kpxj0f.cloudfront.net/310519663122670232/HgSZo4zUMXRCXeLStHkvT2/tela-calendario_1ca7193d.png)
![tela-calendario_1ca7193d (1)](https://github.com/user-attachments/assets/da199db9-06fb-4234-a532-df78bf05d640)

### Vídeo de Demonstração

Assista a uma demonstração completa do fluxo principal do aplicativo:

**Vídeo de Demonstração:** [Clique aqui para assistir](https://files.manuscdn.com/user_upload_by_module/session_file/310519663193142688/wkoZfBRcADUIGdet.mp4)

*Demonstração completa do fluxo de navegação e funcionalidades do FIAP Checkpoint Tracker.*

## 🏗️ Decisões Técnicas

### Arquitetura do Projeto

```
fiap-checkpoint-tracker/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Layout das tabs
│   │   ├── index.tsx            # Tela Home
│   │   ├── subjects.tsx         # Tela Disciplinas
│   │   └── profile.tsx          # Tela Perfil
│   ├── _layout.tsx              # Layout raiz
│   └── modal.tsx                # Modal de exemplo
├── components/
│   ├── CheckpointCard.tsx       # Componente de card de checkpoint
│   ├── SubjectBadge.tsx         # Componente de badge de disciplina
│   └── ... (outros componentes)
├── constants/
│   ├── theme.ts                 # Paleta de cores e tipografia FIAP
│   └── checkpoints.ts           # Dados de checkpoints e disciplinas
├── hooks/
│   └── use-color-scheme.ts      # Hook para tema claro/escuro
├── app.json                     # Configuração do Expo
├── package.json                 # Dependências do projeto
└── README.md                    # Este arquivo
```

### Hooks Utilizados

| Hook | Uso |
|------|-----|
| **`useState`** | Gerenciamento de estado local (refreshing, seleção de filtros) |
| **`useEffect`** | Efeitos colaterais (carregamento de dados, atualizações) |
| **`useColorScheme`** | Detecção de tema claro/escuro do dispositivo |

### Navegação

A navegação é implementada com **Expo Router** usando:
- **Bottom Tab Navigation:** 3 abas principais (Home, Disciplinas, Perfil)
- **Stack Navigation:** Para navegação entre telas (raiz)
- **Roteamento tipado:** Suporte a tipos TypeScript para rotas

### Gerenciamento de Estado

O estado é gerenciado de forma simples e eficiente:
- **Dados estáticos:** Armazenados em `constants/checkpoints.ts`
- **Estado local:** Usado em componentes para UI (loading, refresh)
- **Tema:** Gerenciado globalmente via `ThemeProvider` do React Navigation

### Design System

Implementamos um design system centralizado:

```typescript
// Cores FIAP
const FIAP_BLUE = '#003DA5';
const FIAP_ORANGE = '#FF6B35';

// Tipografia
FontSizes: xs (12px) → 4xl (32px)
Spacing: xs (4px) → 3xl (32px)
BorderRadius: sm (4px) → full (9999px)
```

## 🎨 Paleta de Cores FIAP

| Cor | Código | Uso |
|-----|--------|-----|
| **Azul FIAP** | `#003DA5` | Primária, headers, navegação |
| **Laranja FIAP** | `#FF6B35` | Destaques, urgência, CTAs |
| **Cinza Escuro** | `#2C2C2C` | Texto principal |
| **Cinza Claro** | `#F5F5F5` | Backgrounds, cards |
| **Verde** | `#4CAF50` | Status concluído |
| **Amarelo** | `#FFC107` | Status em progresso |
| **Vermelho** | `#F44336` | Avisos, erros |

## 📊 Dados de Exemplo

O aplicativo inclui dados de exemplo com:
- **5 disciplinas:** Mobile Development & IoT, Engenharia de Software, Banco de Dados, Arquitetura de Software, Segurança da Informação
- **6 checkpoints:** Distribuídos entre as disciplinas com datas variadas
- **Informações do professor:** Nome e contato para cada disciplina

## 🔄 Fluxo Principal

1. **Abrir o app** → Tela Home com lista de checkpoints
2. **Visualizar checkpoints** → Cards com informações de urgência
3. **Navegar para Disciplinas** → Ver todas as disciplinas e seus checkpoints
4. **Acessar Perfil** → Ver estatísticas e configurações
5. **Atualizar dados** → Pull-to-refresh na tela Home

## 🚫 O que NÃO foi implementado

- ❌ Integração com API REST (fora do escopo da Aula 05)
- ❌ Persistência de dados em banco de dados local
- ❌ Autenticação de usuários
- ❌ Notificações push
- ❌ Sincronização com servidor

## 📅 Próximos Passos (Com Mais Tempo)

Se tivéssemos mais tempo, implementaríamos:

1. **Backend com Node.js/Express:**
   - API REST para gerenciar checkpoints
   - Autenticação com JWT
   - Banco de dados PostgreSQL

2. **Persistência Local:**
   - AsyncStorage para cache de dados
   - SQLite para dados offline

3. **Notificações:**
   - Push notifications para checkpoints próximos
   - Lembretes personalizáveis

4. **Recursos Avançados:**
   - Filtros e busca de checkpoints
   - Compartilhamento de calendário
   - Integração com Google Calendar
   - Modo escuro aprimorado

5. **Melhorias de UX:**
   - Animações mais sofisticadas
   - Gestos customizados
   - Temas personalizáveis

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpe o cache e reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 8081 is already in use"
```bash
# Use uma porta diferente
npm start -- --port 8082
```

### App não carrega no Expo Go
- Certifique-se de que seu celular está na mesma rede Wi-Fi
- Verifique se o QR code está legível
- Tente usar `npm start -- --tunnel`

## 📚 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React Native** | 0.81.5 | Framework mobile |
| **Expo** | 54.0.33 | Plataforma de desenvolvimento |
| **Expo Router** | 6.0.23 | Roteamento e navegação |
| **React Navigation** | 7.1.8 | Navegação entre telas |
| **TypeScript** | 5.9.2 | Tipagem estática |
| **Lucide React Native** | 1.7.0 | Ícones |

## 📝 Commits Relevantes

Todos os membros do grupo contribuíram com commits significativos:

```bash
git log --oneline
```

Exemplos de commits:
- `feat: setup inicial do projeto com Expo Router`
- `feat: criar componente CheckpointCard com design FIAP`
- `feat: implementar tela Home com lista de checkpoints`
- `feat: adicionar tela Disciplinas com cards coloridos`
- `feat: criar tela Perfil com estatísticas`
- `docs: adicionar README completo`

## 📞 Suporte

Para dúvidas sobre o projeto, entre em contato com:
- **Prof. Hercules Ramos:** profhercules.ramos@fiap.com.br
- **LinkedIn:** [Prof. Hercules Ramos](https://linkedin.com)

## 📄 Licença

Este projeto é propriedade da FIAP e foi desenvolvido como parte do Checkpoint 1 da disciplina de Mobile Development & IoT.

---

**Desenvolvido com ❤️ por alunos da FIAP**

*"O único modo de aprender programação é programando." - Todo desenvolvedor, sempre*

**#KeepCoding #ReactNative #FIAP**
