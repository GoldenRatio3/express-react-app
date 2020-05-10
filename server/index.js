const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);
