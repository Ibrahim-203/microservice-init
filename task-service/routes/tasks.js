const router = require('express').Router();
const Task = require('../models/task');
const verifyToken = require('../middlewares/verifyToken');

// Créer une tâche
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      userId: req.user.id
    });

    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Lister les tâches de l'utilisateur
router.get('/', verifyToken, async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id }
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Modifier une tâche
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });

    await task.update(req.body);

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Supprimer une tâche
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });

    await task.destroy();

    res.json({ message: 'Tâche supprimée' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
