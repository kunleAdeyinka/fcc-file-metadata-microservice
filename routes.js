module.exports = function(app, upload) {

  app.route('/upload').get(function(req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
  });

  app.post('/upload', upload.single('inputFile'), (req, res,next) => {
    let result = {
       size: req.file.size
    }

      res.json(result);
  });
};
