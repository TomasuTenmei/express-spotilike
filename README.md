     ______     __  __     ______   ______     ______     ______     ______    
    /\  ___\   /\_\_\_\   /\  == \ /\  == \   /\  ___\   /\  ___\   /\  ___\   
    \ \  __\   \/_/\_\/_  \ \  _-/ \ \  __<   \ \  __\   \ \___  \  \ \___  \  
     \ \_____\   /\_\/\_\  \ \_\    \ \_\ \_\  \ \_____\  \/\_____\  \/\_____\ 
      \/_____/   \/_/\/_/   \/_/     \/_/ /_/   \/_____/   \/_____/   \/_____/ 

     ______     ______   ______     ______   __     __         __     __  __     ______    
    /\  ___\   /\  == \ /\  __ \   /\__  _\ /\ \   /\ \       /\ \   /\ \/ /    /\  ___\   
    \ \___  \  \ \  _-/ \ \ \/\ \  \/_/\ \/ \ \ \  \ \ \____  \ \ \  \ \  _"-.  \ \  __\   
     \/\_____\  \ \_\    \ \_____\    \ \_\  \ \_\  \ \_____\  \ \_\  \ \_\ \_\  \ \_____\ 
      \/_____/   \/_/     \/_____/     \/_/   \/_/   \/_____/   \/_/   \/_/\/_/   \/_____/ 

# Projet cours IPI Toulouse API avec Express pet MongoDB

>Salma AYACHI, Thomas ARNAUD

## Installation

1. Téléchargez et installez NodeJs 18 depuis [nodejs.org](https://nodejs.org)

2. Téléchargez et installez MongoDB depuis [mongodb](https://www.mongodb.com) et/ou MongoDB Compass depuis [www.mongodb.com/products/tools/compass](https://www.mongodb.com/products/tools/compass)
   - MongoDB est une plateforme de base de données NoSQL.
   - MongoDB Compass est une interface utilisateur graphique pour MongoDB.

3. Téléchargez et installez Insomnia depuis [insomnia](https://insomnia.rest/)

4. Installez les bibliothèques nécessaires :
```cmd
npm install
```

5. Dans MongoDB Compass, connectez-vous en local avec l'URI : `mongodb://localhost:27017`.
- Créez une nouvelle base de données nommée : `Spotilike`.
- Ajoutez 3 collections : `albums`, `artistes`, `genres`, `morceaux` et `users` que vous compléterez avec les fichiers JSON correspondants trouvables dans le répertoire `backend\database`.

6. Pour exécutez le backend la commande est :
```cmd
node .\backend\app\server.js 
```

7. Pour exécutez le frontend aller dans `.\frontend\` et utiliser la commande :
```cmd
npm run serve
```

8. Pour tester les routes ouvrir `Insomnia` et importer le fichier `Insomnia.json` (Le backend doit être en cours d'execution).

## Base de données

![Image de la base de données](backend/database/BDD.png)
