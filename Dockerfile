FROM node:18-alpine AS build
WORKDIR /app

COPY . .


FROM nginx:1.21-alpine AS production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
