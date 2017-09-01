const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const routes = require('./routes.js');

const upload = multer({dest: 'uploads/'});
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

routes(app, upload);


app.listen(process.env.PORT || 3000, () => {
  console.log('Application is running on PORT ' + 3000);
});
