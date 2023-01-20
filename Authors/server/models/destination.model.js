const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required."],
        minLength: [2, "title must be at least 2 characters."],
    },
    location: {
        type: String,
        required: [true, "location is required."],
        minLength: [2, "location must be at least 2 characters."],
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [5, "description must be at least 5 characters."],
    },
}, { timestamps: true });    // this adds createdAt and updatedAt.

/*
Register schema with mongoose and provide a string to name the collection. This also returns a reference to our model that we can use for DB operations.
*/
const Destination = mongoose.model('Destination', DestinationSchema);

/* Always exporting an object even when we have only one thing to export makes it easy to add more exports later if ever needed without breaking any code that imports from this file.
*/
module.exports = { Destination: Destination };