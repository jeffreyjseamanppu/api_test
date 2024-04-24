const express = require("express");
const inventoryRoutes = require("./src/inventory/routes");

const app = express();
const port = 9004;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello PPU");
})

// api route
app.use("/api/v1/inventory", inventoryRoutes);

app.listen(port, () => console.log('running on ${port}'));