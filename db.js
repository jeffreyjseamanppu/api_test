const Pool = require("pg").Pool;

const pool = new Pool({

    // user: "postgres",
    user: "jseaman",

    // host: "localhost",
    host: "dpg-cn1d8gol6cac73fcj9i0-a",

    // database: "inventory",
    database: "inventory_7too",

    // password: "PPU7$$7",
    password: "oMHf6SZTu2ZHySwxuYVZy1OH3DhNcshv",

    port: 5432,
});

module.exports = pool;