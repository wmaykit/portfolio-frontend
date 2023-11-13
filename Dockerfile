FROM nginx:latest
WORKDIR /portfolio-frontend-app
COPY ./nginx_config/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/portfolio-frontend .
