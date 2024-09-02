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


router.post('/check', async (req, res) => {
  const { word } = req.body;

  if (!word || word.length !== 5) {
    return res.status(400).json({ msg: 'Invalid word length. Must be 5 letters.' });
  }

  try {
    const foundWord = await Word.findOne({ word_content: word.toLowerCase() });

    if (foundWord) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/random', async (req, res) => {
  try {
      const count = await Word.countDocuments();
      const random = Math.floor(Math.random() * count);
      const word = await Word.findOne().skip(random);
      res.json({ word: word.word_content });
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch random word' });
  }
});
module.exports = router;