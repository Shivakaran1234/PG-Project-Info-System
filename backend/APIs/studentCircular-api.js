const exp = require('express');  
const stucirapp = exp.Router(); 

stucirapp.post('/api/circulars', async (req, res) => {
    const { title, content } = req.body;
    const studentCircular = new StudentCircular({ title, content });
    await studentCircular.save();
    
    res.sendStatus(201);
  });
  
  // Endpoint to fetch student circulars
  stucirapp.get('/api/student-circulars', async (req, res) => {
    const circulars = await StudentCircular.find();
    res.json(circulars);
  });


//StudentCircular.js
const mongoose = require('mongoose');

const studentCircularSchema = new mongoose.Schema({
  title: String,
  content: String
});

const StudentCircular = mongoose.model('StudentCircular', studentCircularSchema);

module.exports = StudentCircular;
