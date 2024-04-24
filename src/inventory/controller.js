const pool = require('../../db');
const queries = require('./queries');

// get all data
const getInventory = (req, res) => {
    pool.query(queries.getInventory, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

// get inventory by id
const getInventoryById = (req, res ) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getInventoryById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

// add new car
const addNewCar = (req, res ) => {
    const {id, brand, model, year} = req.body;
    pool.query(queries.addNewCar, [id, brand, model, year], (error, results) => {
        if (error) throw error;
        res.status(200).send("Added New Inventory Item Successfully")
    });
}

// update inventory
const updateCarYear = (req, res) => {
    const {year, id } = req.body;
    pool.query(queries.updateCarYear, [year, id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Updated Inventory Successfully");
    
    })
}

module.exports = {
    getInventory,
    getInventoryById,
    addNewCar,
    updateCarYear,

};