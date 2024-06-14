
import axios from 'axios'

export class MangaService {

    url = 'http://localhost:4000/manga'

    async getMangas() {
        try {
            const res = await axios.get(this.url)
            return res.data;
        }
        catch(error) {
            return {message:error.message}
        }
    }

    async createManga(email, name, author, description, chapters, category, img) {
        try {
            const res = await axios.post(this.url, 
                {email, name, author, description, chapters, category, img} 
            )
            return res.data;
        }
        catch(error) {
            return {message:error.message}
        }
    }

    async updateManga(email, name, author, description, chapters, category, img, id_token) {
        try {
            const res = await axios.put(`${this.url}/${id_token}`, 
                {email, name, author, description, chapters, category, img} 
            )
            return res.data;
        }
        catch(error) {
            return {message:error.message}
        }
    }

    async deleteManga(email, id_token) {
        try {
            const res = await axios.delete(`${this.url}/${email}/${id_token}`)
            return res.data;
        }
        catch(error) {
            return {message:error.message}
        }
    }

    async patchManga(email, data, id_token) {
        try {
            const res = await axios.patch(`${this.url}/${id_token}`, 
                {...data,email}
            )
            return res.data;
        }
        catch(error) {
            return {message:error.message}
        }
    }
}

export class UserService {
    url = 'http://localhost:4000/users'

    async login (email,password) {
        try {
            const response = await axios.get(`${this.url}/${email}/${password}`)   
            return {email:email}      
        } catch (error) {
            return {message: error.message}
        }
    }

    async register(name,email,password) {
        try {
            const response = await axios.post(this.url, {name,email,password})   
            return {success:true}
        } catch (error) {
            return {success:false, message: error.message}
        }
    }
}