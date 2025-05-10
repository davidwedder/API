# 📝 ToDo App - React JS + React Native + MongoDB (MVC)

Um sistema de gerenciamento de tarefas (ToDo) multiplataforma desenvolvido com **React JS** para web, **React Native** para mobile e **MongoDB** como banco de dados. A arquitetura do projeto segue o padrão **MVC (Model-View-Controller)**, visando separação de responsabilidades, escalabilidade e manutenibilidade.

---

## 📦 Tecnologias Utilizadas

### 🔹 Front-End Web
- [React JS](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(opcional)*

### 🔹 Mobile
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) *(ou CLI nativo)*
- [React Navigation](https://reactnavigation.org/)

### 🔹 Back-End
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### 🔹 Arquitetura
- Padrão MVC (Model-View-Controller)

---

## 📂 Estrutura do Projeto

```bash
todo-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
├── frontend-web/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
├── mobile/
│   ├── assets/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── services/
│   │   ├── App.js

🚀 Como Executar o Projeto
✅ Pré-requisitos
Node.js instalado

MongoDB em execução local ou via Atlas

Yarn ou npm

Expo (para rodar o mobile, se estiver usando)

🖥️ Backend

cd backend
npm install
npm start

🌐 Frontend Web

cd frontend-web
npm install
npm start

📱 Mobile (React Native)

cd mobile
npm install
npx expo start

🧠 Funcionalidades
Criar tarefas

Editar tarefas

Marcar como concluída

Deletar tarefas

Visualização web e mobile com sincronização via API

Armazenamento no MongoDB

🔐 Segurança e Validação
Validação de campos (nome da tarefa, status, etc.)

Sanitização de entradas (back-end)

Middleware de erros

🛠️ Em Desenvolvimento
Autenticação com JWT

Organização por categorias

Notificações push (mobile)

Deploy Web e Mobile

🤝 Contribuições
Sinta-se à vontade para contribuir! Basta abrir uma Issue ou um Pull Request com sua proposta.

👨‍💻 Autor
David — LinkedIn | GitHub


