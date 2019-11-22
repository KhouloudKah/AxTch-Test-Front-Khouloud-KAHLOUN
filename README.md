## Projet Test Front Devoteam  

### Contexte du projet

Le présent projet est un projet élaboré par Khouloud KAHLOUN dans le cadre d'un test technique FRONT demandé par l'entreprise DEVOTEAM AXANCE 

La video "Démo_test_front_Khouloud.avi" contient une démonstration du projet et des fonctionnalités dévéloppées.

## Projet

Ce projet contient 4 pages dont le menu redirige vers chaque page :

- Page 1 HomePage : contient la page 2.0 et le pop-up ( Need Help?) en cliquant sur le bouton (Need help ?) en bas de la page (http://localhost:3001/#/HomePage) 
- Page 2 Topics and Inspirations : contient la page 2.2 (http://localhost:3001/#/TopicsAndInspiration)
- Page 3 Product list : contient la page 3.0 : la liste des produits recupérée via une API  (http://localhost:3001/#/product) 
- Page 4 Product list By Category : contient la page 3.0 : la liste des produits recherchée par category en selectionnant le filtre  (Dans mon cas j'ai inséré les produits avec deux catégories : filtres [ kitchen , Decor ] en selectionnant le filtre ) (http://localhost:3001/#/products_by_category) 

#### Back End

la partie Back End :
- node.js
- mongoDB 
- Postman
#### Front End

la partie Front End :
- ReactJS 
- Redux
- react-router 
- react-bootstrap
- sass style 

Les étapes pour build le projet :
 
1. Télécharger le projet ou vous avez déja reçu fichier Test_Front_KAHLOUN_Khouloud.zip par mail <br />
2. Ouvrir la plateforme WebStorm (moi j'ai développer le projet sous l'IDE WebStorm)
3. Supposant que vous avez installé l'environement node.JS si c'est pas le cas , vous pouvez l'installer à partir [https://nodejs.org/en/]
4. Entrer dans le dossier du projet et Lancer la commande  `npm install`
pour Ne pas installer la base de donnée mongoDB , j'ai mis les données dans un fichier Data/products.json
5. Installer mongoDB 
 une base de donnée vide nommée "product" sera créer automatiquement si ce n'est pas le cas suivez ces étapes : 
5.1 Créer une base de données nommée "product"
5.2 Dans cette base de données, créer une collection nommée "products" 
5.3 Importer le fichier "products.json' contenant la liste des produits 

### Remarque
Si vous ne voulez pas installer la base de donnée mongoDB , j'ai mis les données dans un fichier `Data/products.json`


### Back End  
7. Installer Postman pour intéragir avec l'API REST 
8. Entrer dans le dossier ApiBack du projet et lancer la commande  `nodemon server.js`<br />
le back end sera lancer sur le port 3000
### Front End 
9. Entrer dans le dossier de l'application du projet <br />
10. Lancer la commande `npm start`<br />
vu que le back end est lancé sur le port 3000 alors l'invite de commande va vous proposer un autre port (dans mon cas , le port 3001 ) 


## Application 

Aprés avoir installer le projet, vous pouvez y accéder et naviger dans l'application à partir du menu comme il est indiqué dans le video démo. 