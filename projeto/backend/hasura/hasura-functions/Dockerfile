# syntax=docker/dockerfile:1
ARG node=node:16-alpine

FROM ${node} as base
WORKDIR /app
COPY package*.json .


FROM base as builder
WORKDIR /app
# Ignores husky scripts
RUN npm ci --ignore-scripts
COPY tsconfig*.json .
COPY src src
RUN npm run build


FROM base as runtime
WORKDIR /app
ENV NODE_ENV=production
RUN npm ci --only=production --ignore-scripts
COPY --from=builder /app/dist ./dist
ENTRYPOINT ["npm"]
CMD ["start"]
