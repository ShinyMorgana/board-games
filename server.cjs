import express from "express";
import path from "path";
import serveStatic from "serve-static";

const app = express();
app.use(serveStatic(path.join(path.resolve(), "dist")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
