import { defineStore } from "pinia";
import axios from "axios";
import { useAcademicsStore } from "./academics-store";
import moment from "moment";

const user_lambda_url = process.env.VUE_APP_USER_STORE_LAMBDA_URL;
const user_quiz_lambda_url = process.env.VUE_APP_USER_QUIZ_LAMBDA_URL;

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
