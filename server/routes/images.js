const express = require('express');
const router = express.Router();

const Image = require('../models/image');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
// const upload = multer({ dest: 'uploads/'});

router.post('/', upload.single('myfile'), (req, res) => {
  // res.redirect('/');

  Image.upload(req.file)
    .then((imageDoc) => res.send(imageDoc))
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/', (req, res) => {
  Image.find()
    .then((data) => {
      console.log('data: ', data);
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
