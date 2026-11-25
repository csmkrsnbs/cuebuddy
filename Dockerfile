FROM node:24-bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app/cuebuddy-backend
COPY cuebuddy-backend/ ./
RUN npm ci --no-audit && npm install --save-exact --no-audit multer@2.5.0 @prisma/client@7.10.1 @prisma/adapter-neon@7.10.1 && npm install --save-dev --save-exact --no-audit prisma@7.10.1 && npm pkg set 'overrides.effect=^3.22.1' && npm install --no-audit && npm update --no-audit
COPY cuebuddy-web/ /app/cuebuddy-web/
RUN DIRECT_URL=postgresql://local:local@localhost:5432/local npm run db:generate && npm run typecheck && npm audit --omit=dev --audit-level=high
ENV NODE_ENV=production
USER node
CMD ["npm","start"]
