const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
