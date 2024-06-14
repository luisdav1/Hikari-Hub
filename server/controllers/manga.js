
import { response, request } from 'express'
import Manga from '../models/Manga.js'
import User from '../models/User.js'
import { mangaValidation } from '../validations/validations.js'

export const getMangas = async (req = request, res = response) => {
    try {
        const data = await User.aggregate([
            {
                $lookup: {
                    from: "mangas",
                    localField: "mangas",
                    foreignField: "_id",
                    as: "userMangas"
                }
            },
            {
                $match: {
                    userMangas: { $ne: [] }
                }
            },
            {
                $project: {
                    name: 1,
                    email: 1,
                    userMangas: 1
                }
            }
        ]);
        const response = data.flatMap(user =>
            user.userMangas.map(manga => ({
                publishedByEmail: user.email,
                publishedBy: user.name,
                ...manga
            }))
        );

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createManga = async (req = request, res = response) => {
    try {
        const { email, name, author, description, chapters, category, img } = req.body;
        
        // Validar que todos los campos necesarios están presentes
        const validationMessage = mangaValidation(req.body).message;
        if (validationMessage) {
            return res.status(400).json({ message: validationMessage });
        }

        // Buscar el usuario por email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: `No existe el usuario con el correo ${email}` });
        }

        // Crear el nuevo manga
        const newManga = await Manga.create({ email, name, author, description, chapters, category, img });

        // Actualizar la lista de mangas del usuario
        user.mangas.push(newManga._id);
        await user.save();

        res.status(200).json({ message: "Manga guardado :D", manga: newManga, publishedBy:user.name, publishedByEmail: user.email,});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateManga = async (req = request, res = response) => {
    try {
        const { id_token } = req.params;
        
        // Validar que los parámetros estén presentes
        if (!id_token) {
            return res.status(400).json({ message: 'El ID del manga son obligatorios' });
        }

        const { email, name, author, description, chapters, category, img } = req.body;

        // Validar que todos los campos necesarios están presentes
        const validationMessage = mangaValidation(req.body).message;
        if (validationMessage) {
            return res.status(400).json({ message: validationMessage });
        }

        // Buscar el usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: `No existe el usuario con el correo ${email}` });
        }

        // Validar el token
        if (user.mangas.includes(id_token)) {
            const updatedManga = await Manga.findByIdAndUpdate(id_token, { name, author, description, chapters, category, img }, { new: true });

            if (!updatedManga) {
                return res.status(404).json({ message: `No se encontró un manga con el id ${id_token}` });
            }

            res.status(200).json({ message: "Manga actualizado :D", manga: updatedManga, publishedBy:user.name, publishedByEmail: user.email,});
        } else {
            res.status(400).json({ message: `El id es inválido ${id_token}` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteManga = async (req = request, res = response) => {
    try {
        const { email, id_token } = req.params;

        // Validar que los parámetros estén presentes
        if (!email || !id_token) {
            return res.status(400).json({ message: 'El correo electrónico y el ID del manga son obligatorios' });
        }

        // Buscar el usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: `No existe el usuario con el correo ${email}` });
        }

        // Validar que el manga pertenece al usuario
        if (!user.mangas.includes(id_token)) {
            return res.status(400).json({ message: `El ID del manga es inválido o no pertenece al usuario: ${id_token}` });
        }

        // Eliminar el manga
        const deletedManga = await Manga.findByIdAndDelete(id_token);
        if (!deletedManga) {
            return res.status(404).json({ message: `No se encontró un manga con el ID ${id_token}` });
        }

        // Actualizar la lista de mangas del usuario
        user.mangas = user.mangas.filter(mangaId => mangaId.toString() !== id_token);
        await user.save();

        res.status(200).json({ message: "Manga eliminado :D", manga: deletedManga, publishedBy:user.name, publishedByEmail: user.email, });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePatchManga = async (req = request, res = response) => {
    try {
        const { id_token } = req.params;
        const { email } = req.body;
        // Validar que los parámetros estén presentes
        if (!id_token || !email) {
            return res.status(400).json({ message: 'El ID y el email del manga son obligatorios' });
        }

        // Buscar el usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: `No existe el usuario con el correo ${email}` });
        }

        // Validar el token
        if (user.mangas.includes(id_token)) {
            const updatedManga = await Manga.findByIdAndUpdate(id_token, req.body, { new: true });

            if (!updatedManga) {
                return res.status(404).json({ message: `No se encontró un manga con el id ${id_token}` });
            }

            res.status(200).json({ message: "Manga actualizado parcialmente :D", manga: updatedManga, publishedBy:user.name, publishedByEmail: user.email, });
        } else {
            res.status(400).json({ message: `El id es inválido ${id_token}` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
