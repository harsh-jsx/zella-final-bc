const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/assets/:symbol", async (req, res) => {
  const symbol = req.params.symbol.toLowerCase();

  try {
    const infoRes = await fetch(`https://api.coincap.io/v2/assets/${symbol}`);
    const historyRes = await fetch(
      `https://api.coincap.io/v2/assets/${symbol}/history?interval=h1`
    );

    const info = await infoRes.text();
    const history = await historyRes.text();

    res.status(200).json({ info, history });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message || String(error) });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
