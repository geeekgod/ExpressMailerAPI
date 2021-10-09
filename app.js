const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server hosted on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({ name: "Express Mailer !!" });
});
