// src/controllers/appControllers/queryController.js
const Query = require('@/models/appModels/Query');

exports.create = async (req, res) => {
  const doc = await Query.create(req.body);
  res.status(201).json(doc);
};

exports.read = async (req, res) => {
  const doc = await Query.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json(doc);
};

exports.update = async (req, res) => {
  const doc = await Query.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
};

exports.delete = async (req, res) => {
  const doc = await Query.findByIdAndDelete(req.params.id);
  res.json(doc);
};

exports.list = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const docs = await Query.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(docs);
};

exports.search = async (req, res) => {
  const { q, fields = 'customerName,description' } = req.query;
  const regex = new RegExp(q, 'i');
  const query = {
    $or: fields.split(',').map((field) => ({ [field]: regex })),
  };
  const docs = await Query.find(query).limit(10);
  res.json(docs);
};
