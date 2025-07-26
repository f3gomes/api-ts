# 📦 API Rest - Node

API RESTful desenvolvida com Node.js, TypeScript, Express e Prisma ORM, focada em fornecer uma base robusta, escalável e segura para aplicações modernas.

🔧 A API oferece endpoints para CRUD completo de cursos, com suporte a filtros dinâmicos, como busca por título e status (ativo/inativo). Todas as rotas são cuidadosamente estruturadas e seguem os padrões REST, facilitando a integração com frontends diversos.

✅ Utiliza validação rigorosa de dados de entrada com bibliotecas como Zod ou Joi (se aplicável), garantindo que os parâmetros recebidos nas requisições sejam corretos, prevenindo falhas e aumentando a confiabilidade da aplicação.

💡 Implementada com boas práticas de arquitetura de software, incluindo separação de camadas (routes, controllers, services, repositories), tratamento centralizado de erros e tipagem estática com TypeScript para maior segurança e legibilidade do código.

📦 O Prisma facilita a interação com o banco de dados, oferecendo mapeamento objeto-relacional (ORM) moderno, migrações versionadas e performance otimizada para consultas complexas.

🛡️ Suporte a CORS, variáveis de ambiente, e middlewares reutilizáveis para autenticação, logging e validação de requisições.

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
**[https://api‑ts‑amber.vercel.app/](https://api-ts-amber.vercel.app/)**

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
