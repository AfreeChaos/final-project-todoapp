// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../api/supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    // Hacer sign in
    // Hacer log out
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
