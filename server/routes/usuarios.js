
import {Router} from 'express'
import { getUsers, updateUser, deleteUser, createUser, getUserByEmail, loginUser } from '../controllers/usuarios.js';

const route = Router()

route.get('/users', getUsers)
route.post('/users', createUser)
route.get('/users/:email/:password', loginUser)
route.delete('/users/:email', deleteUser)
route.put('/users/:email', updateUser)
route.get('/users/:email', getUserByEmail)

export default route;