const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./models/index');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Synchroniser la base de données
sequelize.sync().then(() => {
  console.log('✅ Base de données synchronisée');
  // Lancer le serveur
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
});
