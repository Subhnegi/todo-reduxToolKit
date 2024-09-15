FROM node:20.11.1 AS builder
WORKDIR /build
COPY package*.json .
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21.3-alpine AS runner
COPY --from=builder /build/dist /usr/share/nginx/html
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf