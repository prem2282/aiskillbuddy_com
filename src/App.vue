<template>
  <div v-if="showGoogleLogin">
    <GoogleLoginPage />
  </div>
  <div v-else><router-view /></div>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "stores/user-store";
import GoogleLoginPage from "components/academics/GoogleLoginPage.vue";

export default defineComponent({
  name: "App",

  data() {
    return {};
  },
  components: { GoogleLoginPage },
  methods: {},
  computed: {
    userStore() {
      return useUserStore();
    },
    getUser() {
      return this.userStore.getUser;
    },
    currentRoute() {
      return this.$route.path;
    },
    showGoogleLogin() {
      return this.getUser === false && this.currentRoute !== "/main";
    },
  },
  mounted() {
    // window.location.reload();
    // console.log("App mounted");
  },
});
</script>
