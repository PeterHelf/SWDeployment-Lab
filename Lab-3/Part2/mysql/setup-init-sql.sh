#!/bin/bash

sed -i "s/wordpressdb/$MYSQL_DATABASE/g" /docker-entrypoint-initdb.d/init.sql
sed -i "s/user/$MYSQL_USER/g" /docker-entrypoint-initdb.d/init.sql
sed -i "s/password/$MYSQL_PASSWORD/g" /docker-entrypoint-initdb.d/init.sql

mysqld --init-file="/docker-entrypoint-initdb.d/init.sql"