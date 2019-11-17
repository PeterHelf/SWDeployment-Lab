#!/bin/bash

sed -i "s/database_name_here/$WORDPRESS_DB_NAME/g" /etc/wordpress/config-localhost.php
sed -i "s/username_here/$WORDPRESS_DB_USER/g" /etc/wordpress/config-localhost.php
sed -i "s/password_here/$WORDPRESS_DB_PASSWORD/g" /etc/wordpress/config-localhost.php
sed -i "s/localhost/$WORDPRESS_DB_HOST/g" /etc/wordpress/config-localhost.php

apachectl -D FOREGROUND