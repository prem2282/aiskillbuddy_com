<template>
  <div class="flyer-section" style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)">
    <q-image>
      <img class="flyer-card" src="~assets/flyer_1.png" alt="Quasar Logo" />
    </q-image>

    <q-image>
      <img class="flyer-card" src="~assets/flyer_2.png" alt="Quasar Logo" />
    </q-image>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlyerSection",
  components: {},
});
</script>

<style scoped>
.flyer-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flyer-card {
  max-width: 100%;
  max-height: 90vh;
}

@media (max-width: 600px) {
  .flyer-section {
    flex-direction: column;
  }
}
</style>
