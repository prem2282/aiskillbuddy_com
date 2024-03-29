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
          flat
          dense
          round
          no-caps
          label="Academics"
          @click="toggleLeftDrawer"
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
    return {};
  },
});
</script>
