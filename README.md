# 📦 API Rest - Node

API RESTful implementada com **TypeScript**, **Node.js**, **Express** e **Prisma**

---

## 🧑‍💻 Rodando o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/f3gomes/api-ts.git

   cd api-ts
   ```

2. Instale dependências:

   ```bash
   npm install
   ```

## 🐳 Executando com Docker Compose

Para executar via Docker (API + PostgreSQL em containers):

3. Para iniciar:

   ```bash
   docker compose up
   ```

Isso iniciará tanto o banco quanto a API na porta **3333**: http://localhost:3333

---

## 🧑‍💻 Executando (sem Docker)

Crie um arquivo `.env` na raiz com as seguintes variáveis (exemplo):

```env
PORT=3333
NODE_ENV=development
JWT_SECRET_KEY=mysupersecret
APP_URL=http://localhost:3000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/api_ts_db?schema=public"
```

3. Gere o client do Prisma:

   ```bash
   npx prisma generate
   ```

4. Aplique o schema no banco (via `prisma db push` ou migrates):

   ```bash
   npx prisma db push
   ```

5. Inicie o servidor em modo desenvolvimento:

   ```bash
   npm run dev
   ```

   ou, para produção simulada:

   ```bash
   npm run build
   npm start
   ```

---

## 🔍 Estrutura típica do projeto

```
.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── index.ts
│   └── routes/, controllers/, services/
├── package.json
├── tsconfig.json
├── .env
└── docker-compose.yml
```

---

## 🚀 Tecnologias utilizadas

- **Node.js** (versão 18+ recomendada)
- **TypeScript** para tipagem estática e segurança no código
- **Express.js** como framework de servidor
- **Prisma** como ORM para PostgreSQL
- **ts-node** e/ou **ts-node-dev** para desenvolvimento com recarga automática
- **Nodemon** (opcional)
- **dotenv** para gerenciamento de variáveis de ambiente

---

## 🌐 Acessando a aplicação hospedada

A API está ativa em:  
**https://api‑ts‑amber.vercel.app/**

Você pode consumir os endpoints diretamente por esta URL (por exemplo, GET `/health`, `/users`, etc., conforme sua rota exposta).

---

## ❓ Problemas comuns

- **Porta 5432 ocupada** ao tentar iniciar contêiner PostgreSQL — ajuste host:container (ex. `"5433:5432"`) ou pare qualquer Postgres local.
- **Erro com credential helper** (`docker-credential-desktop`) — remova `"credsStore"` em `~/.docker/config.json`.

---

## ✅ Resumo

| Ambiente          | Comando para rodar           | Endpoint local                  |
| ----------------- | ---------------------------- | ------------------------------- |
| Local (host)      | `npm install`, `npm run dev` | http://localhost:3333           |
| Docker Compose    | `docker compose up`          | http://localhost:3333           |
| Produção (Vercel) | —                            | https://api‑ts‑amber.vercel.app |
