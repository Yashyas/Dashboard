const Task = require('../models/Task');

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user.id });
    res.status(201).json(task);
  } catch (err) { next(err); }
};

exports.getTasks = async (req, res, next) => {
  try {
    const { q, completed, tag } = req.query;
    const filter = { user: req.user.id };
    if (completed !== undefined) filter.completed = completed === 'true';
    if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
    if (tag) filter.tags = tag;
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) { next(err); }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
  } catch (err) { next(err); }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json({ msg: 'Task deleted' });
  } catch (err) { next(err); }
};
