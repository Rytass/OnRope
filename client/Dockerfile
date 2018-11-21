# OnRope
# Author: Chia Yu Pai (Rytass)

FROM nginx:stable

MAINTAINER chiayu@rytass.com

ENV HOME /root
ENV PORT 80
ENV DEBUG OnRope:*
ENV NODE_ENV production

ADD nginx.conf /etc/nginx/nginx.conf
RUN chmod 644 /etc/nginx/nginx.conf
ADD dist/* /var/www/onrope/
ADD static/index.html /var/www/onrope/index.html

WORKDIR /var/www/onrope

EXPOSE 80

CMD nginx -g 'daemon off;'
