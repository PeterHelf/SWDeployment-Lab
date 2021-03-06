# SWDeployment-Lab4

## WordPress URL
[Link](http://51.105.202.255/)

## File Descriptions

### kustomization.yaml
Includes a Secret generator which stores the password of the MYSQL database and WordPress.
Also includes references to the other resources.

### mysql-deployment.yaml
The deployment file for the MYSQL database. 
Contains all configurations for the database.
The MYSQL_ROOT_PASSWORD environment variable sets the database password from the Secret specified in kustomization.yaml.

### wordpress-deployment.yaml
The deployment file for WordPress. 
Contains all configurations for WordPress.
The WORDPRESS_DB_HOST environment variable sets the name of the MySQL Service.
The WORDPRESS_DB_PASSWORD environment variable sets the database password from the Secret specified in kustomization.yaml.

## Deployment
Deploy by navigating to the folder including the files and execute the command 
```powershell
kubectl apply -k ./
```

Verify that the Secret exists 
```powershell
kubectl get secrets
```

Verify that a PersistentVolume got dynamically provisioned
```powershell
kubectl get pvc
```

Verify that the Pod is running
```powershell
kubectl get pods
```

Verify that the Service is running 
```powershell
kubectl get services wordpress
```
## Source
[Link](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/)