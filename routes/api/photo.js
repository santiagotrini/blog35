const express = require('express');
const router = express.Router();
const Photo = require('../../models/Photo');

router.get('/photo/:id', (req, res) => {
  res.send('hacer');
});

router.get('/photos', (req, res) => {
  res.send('hacer');
});

router.post('/photo', (req, res) => {
  res.send('hacer');
});

router.delete('/photo/:id', (req, res) => {
  Photo.findByIdAndRemove(req.params.id).exec(err => {
    if (!err) res.status(200).json({ msg: 'Delete OK' });
  })
});

router.patch('/photo/:id', (req, res) => {
  res.send('hacer');
});

module.exports = router;
