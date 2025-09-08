// routes/ships.js
const express = require('express');
const router = express.Router();


const Ship = require('../models/shipModel')

const auth  = require("../middleware/auth");
const validateShipInput = require('../utils/validateInput');

// POST /ships/  - add ships 
router.post('/', auth, async(req,res) => {

    const { isValid, errors } = validateShipInput(req.body);
    if(!isValid)
    {
        res.status(400).json({ "status" : "error", errors})
    }

    try {
        const ship = await Ship.create(req.body);
        res.status(201).json(ship);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }

})


// GET /ships/  -  find all ships
router.get("/", async (req,res) => {

    try {
        const ships = await Ship.find();
        res.json(ships);
      } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
      }

})


router.get("/:id", async (req,res) => {

    try {
        const ships = await Ship.findById(req.params.id);
        res.json(ships);
      } catch (err) {
        res.status(404).json({ status: "error", message: "Ship not exist with the given id" });
      }

})



//PUT /ships/:id -  update ship by id
router.put("/:id", auth, async (req,res)=>{

    const { isValid, errors } = validateShipInput(req.body, true);

    if (!isValid) {
      return res.status(400).json({ status: "error", errors });
    }

    try {
        const ship = await Ship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ship) {
          return res.status(404).json({ status: "error", message: "Ship not found" });
        }
        res.json(ship);
      } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
      }
})



// DELETE /ships/:id  -  delete ship by its id
router.delete("/:id", auth, async(req,res)=> {

    try {
        const ship = await Ship.findByIdAndDelete(req.params.id);
        if (!ship) {
          return res.status(404).json({ status: "error", message: "Ship not found" });
        }
        res.json({ status: "success", message: "Ship deleted successfully" });
      } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
      }
})



module.exports = router;