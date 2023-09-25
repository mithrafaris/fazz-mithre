const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Serve static files
app.use('/admin/css', express.static(path.resolve(__dirname, 'public/admin/css')));
app.use('/admin/img', express.static(path.resolve(__dirname, 'public/admin/img')));
app.use('/admin/js', express.static(path.resolve(__dirname, 'public/admin/js')));

app.use('/user/css', express.static(path.resolve(__dirname, 'public/user/css')));
app.use('/user/img', express.static(path.resolve(__dirname, 'public/user/img')));
app.use('/user/js', express.static(path.resolve(__dirname, 'public/user/js')));
app.use('/user/fonts', express.static(path.resolve(__dirname, 'public/user/fonts')));
app.use('/user/sass', express.static(path.resolve(__dirname, 'public/user/sass')));
app.use('/user/Source', express.static(path.resolve(__dirname, 'public/user/source')));


// Set views directories for admin and user
app.set('views', [
  path.resolve(__dirname, 'views/admin'),
  path.resolve(__dirname, 'views/user'),
]);

// Example route for rendering a home page
app.get('/', (req, res) => {
  res.render('home');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
