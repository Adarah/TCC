FROM node:16 AS base
WORKDIR /app
COPY package*.json ./

FROM base AS builder
RUN npm ci
COPY . ./
ENTRYPOINT ["npm", "start"]