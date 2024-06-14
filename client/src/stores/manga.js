import { defineStore } from 'pinia';
import { MangaService } from '@/api/services';

const services = new MangaService();

export const useMangaStore = defineStore('manga', {
  state: () => ({
    mangas: [],
    tusMangas: [],
    favoritos:[]
  }),
  actions: {
    async fetchMangas() {
      const mangas = await services.getMangas();
      this.mangas = mangas;
    },
    async create(email, name, author, description, chapters, category, img) {
      const { manga, publishedBy, publishedByEmail } = await services.createManga(email, name, author, description, chapters, category, img);
      if (manga) this.mangas.push({...manga,publishedBy, publishedByEmail});
    },
    async update(email, name, author, description, chapters, category, img, id_token) {
      const { manga,publishedBy, publishedByEmail } = await services.updateManga(email, name, author, description, chapters, category, img, id_token);
      if (manga) {
        const index = this.mangas.findIndex(data => data._id === manga._id);
        if (index !== -1) this.mangas.splice(index, 1, {...manga,publishedBy, publishedByEmail});
      }
    },
    async delete(email, id_token) {
      const { manga } = await services.deleteManga(email, id_token);
      if (manga) {
        this.mangas = this.mangas.filter(data => data._id !== id_token);
      }
    },
    async patch(email, data = {}, id_token) {
      const { manga, publishedBy, publishedByEmail } = await services.patchManga(email, data, id_token);
      if (manga) {
        const index = this.mangas.findIndex(data => data._id === manga._id);
        if (index !== -1) this.mangas.splice(index, 1, {...manga,publishedBy, publishedByEmail});
      }
    },
  },
  persist: {
    enabled: true,
  }
});

