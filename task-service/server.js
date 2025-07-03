const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./models/index');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Synchroniser la BDD
sequelize.sync().then(() => {
  console.log('✅ Base de données synchronisée (Task Service)');
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`🚀 Task Service lancé sur le port ${PORT}`));
});
