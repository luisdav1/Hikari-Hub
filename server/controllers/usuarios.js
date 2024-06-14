import { response, request } from "express";
import User from "../models/User.js";

export const getUsers = async (req = request, res = response) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const createUser = async (req = request, res = response) => {
    try {
        const body = req.body
        const found = await User.findOne({ email: body.email })
        if (!found) {
            await User.create(body)
            res.status(200).json({ message: "Saved ;)" })
        } else {
            res.status(400).json('Ya hay un usuario registrado con el correo ' + body.correo)
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const loginUser = async (req = request, res = response) => {
    try {
        const { email, password } = req.params
        const user = await User.findOne({ email: email })
        if (user) {
            if (password === user.password) {
                res.status(200).json({ message: 'found :D', status:200 })
            } else {
                res.status(400).json({ message: 'Contraseña Incorrecta', status:400 })
            }
        } else {
            res.status(400).json({ message: 'No existe el usuario con el email ' + email, status:400 })
        }
    } catch (error) {
        res.status(400).json({ message: error.message, status:500 })
    }
}

export const updateUser = async (req = request, res = response) => {
    try {
        const body = req.body
        const email = req.params.email
        const { matchedCount } = await User.updateOne({ email: email }, body)
        matchedCount == 0 ? res.status(400).json('No existe el usuario con el email ' + email)
            : res.status(200).json({ message: "Updated ;)" })
    } catch (err) {
        res.status(400).json(err.message)
    }
}
export const deleteUser = async (req = request, res = response) => {
    try {
        const email = req.params.email
        const { deletedCount } = await User.deleteOne({ email: email })
        deletedCount == 0 ? res.status(400).json('No existe el usuario con la email ' + email)
            : res.status(200).json({ message: "Deleted ;)" })
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const getUserByEmail = async (req = request, res = response) => {
    try {
        const email = req.params.email
        const user = await User.findOne({ email: email })
        user ? res.status(200).json(user) : res.status(400).json('No eiste el usuario con la email ' + email)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
