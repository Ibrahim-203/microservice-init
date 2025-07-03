# Microservices Node.js - Gestion de tâches et utilisateurs

Ce projet est un exemple d'architecture **microservices** réalisée en **Node.js** et **Express**, comprenant deux services indépendants :

- **User Service** : gestion des utilisateurs (inscription, connexion, génération de JWT)
- **Task Service** : gestion des tâches (CRUD), avec vérification du token JWT

Chaque service utilise **Sequelize** et **SQLite** comme base de données.

---

## 📂 Structure du projet

mon-projet-microservices/
user-service/
task-service/

yaml
Copier
Modifier

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (v14 ou supérieur recommandé)
- NPM (installé avec Node)

---

### 📦 Installation des dépendances

Depuis le dossier racine, installez séparément les dépendances des deux services :

```bash
cd user-service
npm install

cd ../task-service
npm install
⚙️ Variables d'environnement
Chaque service utilise un fichier .env :

user-service/.env
ini
Copier
Modifier
PORT=5000
JWT_SECRET=supersecret
task-service/.env
ini
Copier
Modifier
PORT=5001
JWT_SECRET=supersecret
(Le JWT_SECRET doit être identique si vous voulez que le token généré par user-service soit reconnu par task-service.)

🏃 Lancer les services
Dans deux terminaux séparés :

Terminal 1 (user-service)

bash
Copier
Modifier
cd user-service
node server.js
Terminal 2 (task-service)

bash
Copier
Modifier
cd task-service
node server.js
📡 API Endpoints
🎯 User Service
POST /api/auth/register

POST /api/auth/login

🎯 Task Service
Toutes les routes nécessitent un header Authorization: Bearer <token> :

GET /api/tasks (Lister les tâches)

POST /api/tasks (Créer une tâche)

PUT /api/tasks/:id (Modifier une tâche)

DELETE /api/tasks/:id (Supprimer une tâche)

✨ Technologies utilisées
Node.js

Express

Sequelize

SQLite

JSON Web Token (JWT)

📜 License
Ce projet est fourni à titre d'exemple pédagogique.

🙏 Remerciements
Merci d'utiliser ce projet ! N'hésitez pas à contribuer ou à poser des questions.