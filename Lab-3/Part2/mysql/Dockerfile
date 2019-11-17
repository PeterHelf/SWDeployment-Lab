FROM debian:jessie

USER root
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
COPY init.sql /docker-entrypoint-initdb.d/
COPY mysql.sh mysql.sh
COPY setup-init-sql.sh setup-init-sql.sh
RUN ./mysql.sh
VOLUME /var/lib/mysql
ENTRYPOINT ./setup-init-sql.sh
EXPOSE 3306