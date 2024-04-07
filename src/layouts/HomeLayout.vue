<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> AI Skill Buddy </q-toolbar-title>
        <q-btn
          class="q-pa-md"
          flat
          dense
          no-caps
          label="Academics"
          @click="goToAcamadics"
        />
        <q-btn
          class="q-pa-md"
          flat
          dense
          no-caps
          label="Login"
          @click="goToLogin"
        />
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
