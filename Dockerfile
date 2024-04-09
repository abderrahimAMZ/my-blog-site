FROM nginx:1.21-alpine AS production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
