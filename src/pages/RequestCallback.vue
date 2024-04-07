<template>
  <div class="connect-button-container">
    <q-chip
      class="buddy-blue-5 q-pa-md text-subtitle2"
      text-color="white"
      icon="location_on"
      >Ramanathapuram, Coimbatore</q-chip
    >
    <q-chip
      class="q-pa-md text-subtitle2"
      text-color="white"
      icon="phone"
      color="primary"
      >+91 987 654 3210</q-chip
    >
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RequestCallback",
  components: {},
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
