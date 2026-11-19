# ✅ TaskFlow — Lista de Tarefas

Aplicação web desenvolvida com React para gerenciamento de tarefas diárias. O projeto permite adicionar, concluir, remover e filtrar tarefas, utilizando recursos do React para gerenciamento e compartilhamento de estados.

## 🚀 Funcionalidades

- **Adicionar tarefas:** cadastre novas tarefas por meio de um formulário.
- **Concluir tarefas:** marque tarefas como concluídas ou reabra-as.
- **Remover tarefas:** exclua tarefas da lista.
- **Filtrar tarefas:** visualize todas, apenas pendentes ou concluídas.
- **Persistência de dados:** as tarefas permanecem salvas no navegador utilizando LocalStorage.
- **Contador de tarefas:** acompanhe a quantidade de tarefas pendentes e cadastradas.
- **Layout responsivo:** interface adaptada para dispositivos móveis e desktops.

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Context API
- React Hooks:
  - `useState`
  - `useContext`
  - `useEffect`
  - `useMemo`
  - `useCallback`
  - `React.memo`
- LocalStorage

## 📂 Estrutura do projeto

```text
lista-tarefas/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoFilters.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── context/
│   │   └── TodoContext.jsx
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useTodos.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## 💻 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/iuriolv/todo-react-avancado.git
```

### 2. Entre na pasta do projeto

```bash
cd todo-react-avancado
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

Acesse o endereço disponibilizado pelo Vite no terminal, geralmente:

```text
http://localhost:5173
```

## 📚 Objetivo do projeto

Este projeto foi desenvolvido como atividade prática de estudos em React, com o objetivo de aplicar conceitos de componentização, gerenciamento de estados, Context API, criação de hooks customizados, persistência de dados e otimização de renderização.

## 👨‍💻 Desenvolvedor

**Iuri Oliveira**

- GitHub: [@iuriolv](https://github.com/iuriolv)
- LinkedIn: [Meu perfil](https://www.linkedin.com/in/iuri-oliveira-python/)

---

Desenvolvido com React 🚀