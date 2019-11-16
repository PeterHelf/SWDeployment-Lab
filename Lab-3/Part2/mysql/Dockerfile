FROM debian:jessie

USER root
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
COPY mysql.sh mysql.sh
COPY init.sql /docker-entrypoint-initdb.d/
RUN ./mysql.sh
VOLUME /var/lib/mysql
ENTRYPOINT mysqld --init-file="/docker-entrypoint-initdb.d/init.sql"
EXPOSE 3306