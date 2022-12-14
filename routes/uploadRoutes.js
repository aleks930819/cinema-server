const multer = require('multer');
const express = require('express');
const path = require('path');
const { Router } = require('express');

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|png|jpeg/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimeType = filetypes.test(file.mimetype);
  
  if(extname && mimeType) {
    return cb(null,true);
  } else {
    cb('Images only');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, res, cb) {
    checkFileType(file, cb);
  },
});


uploadRouter.post('/',upload.single('image'),(req,res) => {
     res.send(`/${req.file.path}`);
});



module.exports = uploadRouter;
