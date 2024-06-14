
import { Schema, model } from "mongoose";

const Manga = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    chapters: [{
        number: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }],
    category: {
        type: [String],
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, { 
    timestamps: true 
});

Manga.index({ name: 1 }, { unique: true });

export default model("Manga", Manga);
