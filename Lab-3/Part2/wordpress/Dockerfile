FROM debian:jessie

RUN apt-get update 
RUN apt-get install wordpress -y
RUN mv /var/www/html/index.html /var/www/html/index.bak
COPY setup-wp-config.sh setup-wp-config.sh
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/* /var/www/html/
ENTRYPOINT ./setup-wp-config.sh

EXPOSE 80