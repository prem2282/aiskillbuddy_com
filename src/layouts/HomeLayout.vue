<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div>
          <q-toolbar-title class="toolbar-title">
            AI Skill Buddy
          </q-toolbar-title>
        </div>
        <!-- <q-btn
          class="q-pa-md"
          flat
          dense
          no-caps
          label="Academy (CBSE)"
          @click="goToAcamadics"
        /> -->
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeLayout",

  components: {},

  setup() {
    return {
      goToAcamadics() {
        window.open("https://academy.aiskillbuddy.com", "_blank");
      },
    };
  },
});
</script>

<style scoped>
.toolbar-title {
  display: flex;
  width: 100vw;
  justify-content: center;
}
</style>
