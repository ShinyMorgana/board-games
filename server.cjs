const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve the static files from the dist directory (built Vue app)
app.use(serveStatic(path.join(__dirname, 'dist')));

// Catch all routes and lead to the index.html file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});