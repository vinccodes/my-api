const express = require('express')
const router = express.Router()
const Meal = require('../models/meal')

// Get All
router.get('/', async(req, res)=> {
    try {
        const meals = await Meal.find({})
        res.json(meals)
    } catch (err) {
        res.status(500).json({ message: "Error finding all meals"})
    }
})
// Get One
router.get('/:id', async(req, res)=>{
    res.send(req.params.id)
})

// Create One
router.post('/', async(req, res)=>{
    try {
        const meal = new Meal({
            name: req.body.name,
            item: req.body.item
        })

        const result = await meal.save();
        res.json(result);
    }
    catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// Update One
router.patch('/', (req, res)=>{

})

// Delete One
router.delete('', (req, res)=>{

})

module.exports = router;