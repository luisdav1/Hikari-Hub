import { Router } from "express";
import { createManga, deleteManga, getMangas, updateManga, updatePatchManga } from "../controllers/manga.js";

const route = Router();

route.get('/manga', getMangas)
route.post('/manga', createManga )
route.put('/manga/:id_token', updateManga )
route.delete('/manga/:email/:id_token', deleteManga)
route.patch('/manga/:id_token', updatePatchManga)

export default route