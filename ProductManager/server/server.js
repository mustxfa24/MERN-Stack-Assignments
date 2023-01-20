const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({ //cors is going to allow different ports to send requests to our API
    origin: "http://localhost:3000"
}));

require("./config/mongoose.config");

const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(8000, () => console.log(`The server is all ready to go on port ${PORT}`));