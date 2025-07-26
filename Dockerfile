# Stage 1 - build
FROM node:20-alpine AS builder

WORKDIR /app

# Dependências
COPY package*.json ./
RUN npm install

# Código fonte
COPY . .

# Gerar Prisma client
RUN npx prisma generate

# Aplicar schema no banco (db push) - ATENÇÃO: depende do banco estar disponível na build (não usual em build, normalmente em runtime)
# Como o banco não está disponível na build, este comando pode ser rodado no startup ou no compose, não aqui.
# Para evitar erro, comentado abaixo, mas deixo a sugestão de rodar no container em runtime.
# RUN npx prisma db push

# Compilar TS
RUN npm run build

# Stage 2 - runtime
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
CMD ["npx", "ts-node", "src/server.ts"]
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

ENV PORT=3333
ENV NODE_ENV=development

EXPOSE 3333

CMD ["node", "dist/server.js"]
