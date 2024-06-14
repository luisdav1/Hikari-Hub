import { defineStore } from 'pinia';
import { UserService} from '../api/services.js'

const userService = new UserService()
export const useUserStore = defineStore('user', {
  state: () => ({
    user: localStorage.getItem('user') ? { email: localStorage.getItem('user') } : undefined
  }),
  actions: {
    async keepUser(email, password) {
      const {message} = await userService.login(email,password)
      if (!message) {
        localStorage.setItem('user', email);
        this.user = { email: email };
      } else {
        alert(message)
      }
    },
    clearUser() {
      localStorage.removeItem('user');
      this.user = undefined;
    },
    async register(name,email,password) {
        const {success} = await userService.register(name,email,password);
        return success
    }
  },
});
