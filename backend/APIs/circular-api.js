// routes/circulars.js  
const exp = require('express');  
const circularapp = exp.Router();  
const mongoose = require('mongoose');

// Circular Schema
const circularSchema = new mongoose.Schema({
    title: String,
    content: String,
  });

  const Circular = mongoose.model('Circular',circularSchema);
  
 
  
  // Routes
  circularapp.post('/api/circulars', async (req, res) => {
    const { title, content } = req.body;
    const circular = new Circular({ title, content });
    await circular.save();
    res.sendStatus(201);
  });
  
  circularapp.get('/api/circulars', async (req, res) => {
    const circulars = await Circular.find();
    res.json(circulars);
  });

  module.exports=circularapp;