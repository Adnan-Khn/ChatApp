# Stage 1: Build React frontend
FROM node:22-bookworm-slim AS frontend-build

WORKDIR /app/client

COPY client/package.json client/package-lock.json ./

RUN npm ci --no-audit --no-fund --legacy-peer-deps

COPY client/ ./

ENV VITE_API_URL=

ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

RUN npm run build


# Stage 2: Production runtime
FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

COPY server/package.json server/package-lock.json ./

RUN npm ci --omit=dev --no-audit --no-fund \
    && npm cache clean --force

COPY server/src ./src

COPY --from=frontend-build /app/client/dist ./public

EXPOSE 3001

USER node

CMD ["node", "src/server.js"]