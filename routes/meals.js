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
router.get('/:id', getMeal, async(req, res)=>{
    res.send(res.meal)
})

// Create One
router.post('/', async(req, res)=>{
    try {
        const meal = new Meal({
            name: req.body.name,
            item: req.body.item
        })

        const result = await meal.save();
        res.status(201).json(result);
    }
    catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// Update One // 
router.patch('/:id', getMeal, async(req, res)=>{
    if (req.body.name !== null ) {
        res.meal.name = req.body.name
    }
    if (req.body.items != null) {
        res.meal.items = req.body.items
    }
    try {
        const updatedMeal = await res.meal.save()
        res.json({ message: 'Updated meal' })

    } catch(err) {
        res.status()
    }
})

// Delete One
router.delete('/:id', (req, res)=>{
    try {
        await Meal.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted meal"})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware function to get meal from database
async function getMeal(req, res , next) {
    let meal
    try {
        // get meal 
         meal = await Meal.findById(req.params.id);
        // return error json response
        if (!meal) {
            return res.status(400).json({message: "Error retrieving meal"})
        }
    }
    catch (err){
        return res.status(500).json({ message: err.message })
    }

    res.meal = meal
    next()
}

module.exports = router;