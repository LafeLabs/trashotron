## [HOME](index.html)

# TRASHOTRON ZINE DISTRO

 - GET LAPTOPS DONATED
 - MAKE A UBUNTU LINUX INSTALL USB THUMB DRIVE AND PAINT IN PURPLE
 - INSTALL LINUX ON DONATED LAPTOPS AND WRITE THE PASSWORD AND LOGIN ON THE LAPTOP
 - NEVER PUT ANY PERSONAL OR PRIVATE INFORMATION ON THE LAPTOPS EVER
 - GO TO THE COMMAND LINE ON THE LAPTOP AND TYPE THE FOLLOWING TO INSTALL THE SERVER:

```
sudo apt update
sudo apt install apache2 -y
sudo apt install php libapache2-mod-php -y
cd /var/www/html
sudo rm index.html
sudo apt install curl
sudo curl -o replicator.php https://raw.githubusercontent.com/LafeLabs/trashotron/main/zines/php/replicator.txt
cd ..
sudo chmod -R 0777 *
cd html
php replicator.php
sudo chmod -R 0777 *
```

PUT ZINES IN THE FOLDER /var/www/html/zines.  THEY WILL APPEAR ON THE HOME PAGE.

Share the server on shared wifi networks via QR Code which points to the IP address.

Put songs in the songs folder.
