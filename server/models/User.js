import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: true
    }, 
    mangas: [{
        type: Types.ObjectId,
        ref: 'Manga'
    }], 
    favorites: [{
        type: Types.ObjectId,
        ref: 'Manga'
    }]
}, { 
    timestamps: true 
});

// Crear un índice único en el campo 'email'
userSchema.index({ email: 1 }, { unique: true });

export default model('User', userSchema);
