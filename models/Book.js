const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
    },
    authors: [
        {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
        },
    ],
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
    },
    Image: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
    },
    Link: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
    },


});

const Book = mongoose.model("blog", bookSchema);

module.exports = Book;