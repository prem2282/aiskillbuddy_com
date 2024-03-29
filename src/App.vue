<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {};
  },
  methods: {},
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  mounted() {
    // window.location.reload();
    // console.log("App mounted");
  },
});
</script>
