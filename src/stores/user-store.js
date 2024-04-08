import { defineStore } from "pinia";
import axios from "axios";
import { useAcademicsStore } from "./academics-store";
import moment from "moment";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    currentPage: null,
  }),
  getters: {
    getUser() {
      return this.user;
    },
  },
  actions: {},
});
