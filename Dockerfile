FROM node:24-bookworm-slim
WORKDIR /app/cuebuddy-backend
COPY cuebuddy-backend/package*.json ./
RUN npm ci --no-audit && npm install --save-exact --no-audit multer@2.5.0 @prisma/client@7.10.1 @prisma/adapter-neon@7.10.1 && npm install --save-dev --save-exact --no-audit prisma@7.10.1 && npm update --no-audit
COPY cuebuddy-backend/ ./
COPY cuebuddy-web/ /app/cuebuddy-web/
RUN DIRECT_URL=postgresql://local:local@localhost:5432/local npm run db:generate && npm run typecheck && npm audit --omit=dev --audit-level=high
ENV NODE_ENV=production
USER node
CMD ["npm","start"]
