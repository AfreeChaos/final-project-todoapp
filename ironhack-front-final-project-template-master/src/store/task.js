// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../api/supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log(tasks);
    },
    // Hacer POST
    async createTask (title, userId) {
      await supabase
      .from("tasks")
      .insert ([{title: title, user_id: userId}])
      this.fetchTasks()
    }
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
