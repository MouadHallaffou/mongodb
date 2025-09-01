# Challenge : API REST

## Objectifs

1. Créez une API REST avec Node.js et Express.js pour gérer des utilisateurs (CRUD).
2. Utilisez Mongoose pour la connexion et la modélisation.
3. Installez les dépendances nécessaires : 
```bash
npm install express mongoose
```
4. Testez vos routes avec Postman ou Insomnia.

## Structure du projet

```
project/
├── models/
│   └── User.js
├── routes/
│   └── users.js
├── config/
│   └── database.js
├── middleware/
│   └── validation.js
├── app.js
├── server.js
├── server.js
└── package.json
```

```bash
mkdir -p project/models project/routes project/config project/middleware && \
touch project/models/User.js project/routes/users.js project/config/database.js project/middleware/validation.js project/app.js project/server.js project/package.json
```