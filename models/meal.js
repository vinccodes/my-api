const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    items: [
        {
            name: String,
            quantity: Number
        }
    ]
})

module.exports = mongoose.model('Meal', mealSchema)