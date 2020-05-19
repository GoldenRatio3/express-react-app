const express = require("express");
const path = require("path");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);
