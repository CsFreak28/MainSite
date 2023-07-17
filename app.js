const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Define a route for the root URL
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    } else {
      res.set("Content-Type", "text/html");
      const html = data;
      res.send(html);
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
