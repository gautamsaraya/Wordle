const express = require('express');
const Word = require('../models/Word');
// const bodyParser = require('body-parser');
const router = express.Router();

// app.use(bodyParser.json());

router.post('/create', async (req, res) => {
    try {
      const { word_content } = req.body;
      const word_length = word_content.length;
  
      const newWord = new Word({ word_content, word_length });
      await newWord.save();
      
      res.status(201).json(newWord);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});


router.get('/read', async (req, res) => {
    try {
      const words = await Word.find();
      res.json(words);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


router.put('/update', async (req, res) => {
    try {
      const { word_content , word_id } = req.body;

      const word_length = word_content.length;
  
      const updatedWord = await Word.findByIdAndUpdate(
        word_id,
        { word_content, word_length },
        { new: true }
      );
  
      if (!updatedWord) return res.status(404).json({ message: 'Word not found' });
      res.json(updatedWord);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

module.exports = router;