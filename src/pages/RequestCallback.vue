<template>
  <div class="connect-button-container">
    <a
      :href="'tel:+918754288702'"
      style="text-decoration: none; color: inherit"
    >
      <q-chip
        class="q-pa-md text-subtitle2"
        text-color="white"
        icon="phone"
        color="primary"
        >+91 87542 88702</q-chip
      >
    </a>
    <a href="https://maps.app.goo.gl/wjFeAHBukMuEoU6K7" target="_blank">
      <q-chip
        class="buddy-blue-5 q-pa-md q-ma-md text-subtitle2"
        text-color="white"
        icon="location_on"
        clickable
      >
        Ramanathapuram, Coimbatore
      </q-chip>
    </a>

    ]
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RequestCallback",
  components: {},
  setup() {},
});
</script>
<style scoped>
.connect-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
