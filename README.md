<div align="center">

# 🍇 AçaíLândia Club House

### App Android desenvolvido em React Native + JavaScript

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

</div>

---

## 📱 Sobre o Projeto

O **AçaíLândia Club House** é um aplicativo mobile para dispositivos Android, desenvolvido com **React Native** em **JavaScript**, utilizando componentes modernos e ativos. O app foi criado para trazer uma interface mais **intuitiva e funcional** para a empresa de açaí, com melhorias na organização de produtos, visualização de informações, navegação e experiência do usuário.

---

## ✨ Funcionalidades

### 🏠 Tela Inicial (Splash)
- Apresentação visual da marca com imagem do produto destaque
- Badges dinâmicos: **"Mais Pedido"** e **"100% Orgânico"**
- Acesso rápido ao **Delivery** e às **Lojas**
- Botão de entrada para o painel administrativo

### 🚚 Delivery
- Cardápio completo organizado por categorias:
  - 🍇 Açaí (300ml, 500ml, 700ml, Especial)
  - 🍦 Cremes (Ninho, Morango, Maracujá, Chocolate)
  - 🍨 Sorvetes (Baunilha, Chocolate, Morango, Creme)
  - 🍓 Frutas (Banana, Morango, Kiwi, Manga, Abacaxi)
  - ✨ Complementos (Granola, Nutella, Coco Ralado e mais)
- Seleção visual de itens com feedback imediato
- Contador de itens no carrinho em tempo real
- **Finalização do pedido direto pelo WhatsApp** com resumo completo

### 🏪 Nossas Lojas
- Lista de todas as unidades ativas
- Status de funcionamento em tempo real (Aberta / Em Breve)
- Botão **Ver no Mapa** integrado ao Google Maps
- Botão de ligação direta para cada loja

### 🔐 Painel Administrativo
- Login seguro com e-mail e senha
- Gerenciamento completo de produtos:
  - ✅ Adicionar novos produtos por categoria
  - 🗑️ Remover produtos existentes
  - 🖼️ Suporte a imagens via URL da internet
- Visualização organizada por categorias expansíveis
- Painel com contadores de categorias e produtos

---

## 🧭 Estrutura do Projeto

```
acailandia-app/
├── src/
│   ├── screens/
│   │   ├── SplashScreen.js       # Tela inicial
│   │   ├── DeliveryScreen.js     # Cardápio e pedidos
│   │   ├── StoresScreen.js       # Mapa e lojas
│   │   ├── LoginScreen.js        # Login do admin
│   │   └── AdminScreen.js        # Painel de gestão
│   ├── navigation/
│   │   └── AppNavigator.js       # Configuração de rotas
│   ├── components/               # Componentes reutilizáveis
│   ├── assets/                   # Imagens e ícones
│   ├── services/                 # Integrações externas
│   └── styles/                   # Tema e estilos globais
├── App.js
├── app.json
└── package.json
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado
- Emulador Android ou app **Expo Go** no celular

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/acailandia-app.git

# Entre na pasta do projeto
cd acailandia-app

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o app **Expo Go** ou pressione `a` para abrir no emulador Android.

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| ![#5B1A5F](https://via.placeholder.com/15/5B1A5F/5B1A5F.png) Roxo Principal | `#5B1A5F` | Header, botões, destaques |
| ![#8A2BE2](https://via.placeholder.com/15/8A2BE2/8A2BE2.png) Roxo Secundário | `#8A2BE2` | Acentos e badges |
| ![#4CAF50](https://via.placeholder.com/15/4CAF50/4CAF50.png) Verde | `#4CAF50` | Botão principal / WhatsApp |
| ![#F2C94C](https://via.placeholder.com/15/F2C94C/F2C94C.png) Amarelo | `#F2C94C` | Badges de destaque |
| ![#F7F7F7](https://via.placeholder.com/15/F7F7F7/F7F7F7.png) Fundo | `#F7F7F7` | Background das telas |

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| React Native | Framework principal |
| Expo | Ambiente de desenvolvimento |
| React Navigation | Navegação entre telas |
| React Native Safe Area Context | Compatibilidade com notch |
| React Native Screens | Performance de navegação |
| Linking API | Integração com WhatsApp e Maps |

---

## 📞 Contato & Pedidos

Os pedidos são enviados diretamente para o WhatsApp da empresa ao finalizar no app.

---

<div align="center">
  Desenvolvido com 💜 para <strong>AçaíLândia Club House</strong>
</div>
