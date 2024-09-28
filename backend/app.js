const express = require("express");
const dotenv = require("dotenv");
const movieRoutes = require("./routes/movies");
const cors = require("cors"); // Importe o middleware CORS

dotenv.config();

const app = express();

// Use o middleware CORS para permitir requisições de diferentes origens
app.use(cors());

app.use(express.json());
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
