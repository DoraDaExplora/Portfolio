FROM nginx:stable
COPY ./build/ /var/www
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
CMD ["nginx"]
